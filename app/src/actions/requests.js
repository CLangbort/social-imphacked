const $ = require ('jquery')

export default function() {
  return $.ajax({
    method: 'GET',
    url: 'https://peopleinparks.herokuapp.com/getDailyInfo',
  }).then(function(request) {
    const record = {
      image: request[0].image,
      park: request[1].park,
      facts: request[2].facts,
    }
    return record;
  });
}
