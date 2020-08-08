const API_URL = 'https://jsonplaceholder.typicode.com';

const fetchAPI = url => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        else {
          throw response;
        }
      })
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
};

export default class CallAPI {
  static get(url) {
    return fetchAPI(`${API_URL}/${url}`)
  }
}