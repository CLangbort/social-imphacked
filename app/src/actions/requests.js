const $ = require ('jquery');

const PIP_DATA = 'peopleInParksData';
const FULL_DAY = 60 * 60 * 24 * 1000;

/**
 * Make ajax call to get daily info record. Restructure data to be correct object
 * and set proper local storage
 */
const _fetchData = function() {
  return $.ajax({
    method: 'GET',
    url: 'https://peopleinparks.herokuapp.com/getDailyInfo',
  }).then(function(request) {
    const record = {
      image: request[0].image,
      park: request[1].park,
      facts: request[2].facts,
    };

    // Used to check against 24 hours to know when to fetch new data
    record.fetchNewDataTime = new Date().getTime() + FULL_DAY;

    localStorage.setItem(PIP_DATA, JSON.stringify(record));

    return record;
  });
};

/**
 * Check local storage and use that data. If that doesn't exist or if the data
 * was last fetched more than 24 hours ago, fetch new data
 */
export default function() {
  const peopleInParksLocalStorage = localStorage.getItem(PIP_DATA);

  if (peopleInParksLocalStorage) {
    const peopleInParksData = JSON.parse(peopleInParksLocalStorage);
    const fetchNewDataTime = peopleInParksData.fetchNewDataTime;

    const shouldFetchDate = fetchNewDataTime - new Date().getTime();

    if (shouldFetchDate < 0) {
      localStorage.removeItem(PIP_DATA);
      return _fetchData();
    }

    return Promise.resolve(peopleInParksData);
  }

  return _fetchData();
}
