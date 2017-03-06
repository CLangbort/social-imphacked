const $ = require ('jquery')

const PIP_DATA = 'peopleInParksData';

export default function() {
  const peopleInParksData = localStorage.getItem(PIP_DATA);

  if (peopleInParksData) {
    return Promise.resolve(JSON.parse(peopleInParksData));
  }
  return $.ajax({
    method: 'GET',
    url: 'https://peopleinparks.herokuapp.com/getDailyInfo',
  }).then(function(request) {
    const record = {
      image: request[0].image,
      park: request[1].park,
      facts: request[2].facts,
    }

    localStorage.setItem(PIP_DATA, JSON.stringify(record));
    return record;
  });
}
