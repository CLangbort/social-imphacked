const $ = require ('jquery');

const PIP_DATA = 'peopleInParksData';
const FULL_DAY = 60 * 60 * 24 * 1000;

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
    record.fetchNewDataTime = new Date().getTime() + FULL_DAY;

    localStorage.setItem(PIP_DATA, JSON.stringify(record));

    return record;
  });
};

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
