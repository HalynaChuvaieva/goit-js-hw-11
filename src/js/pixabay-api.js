import axios from 'axios';

export const getImagesByQuery = query => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '54255152-2d8d878a583dc14505a7d5e94',
      q: query,
      image_type: 'photo',
      safesearch: true,
      orientation: 'horizontal',
    },
  }).then(response => response.data);
};






























// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.get('/users')
// 	.then(response => console.log(response))
// 	.catch(error => console.log(error))

// {
//  data: {},   // Відповідь від сервера
//  status: 200,  // Код стану HTTP
//  statusText: "OK", // Текстовий опис статусу
//  headers: {},  // Заголовки відповіді
//  config: {},  // Конфігурація запиту
//  request: {}  // Об'єкт самого запиту
// }

// const myApiKey = "secret-api-key-for-every-request";

// axios.defaults.headers.common["header-name"] = myApiKey;

// axios.get("https://jsonplaceholder.typicode.com/users", {
// 	params: {
// 		_limit: 7,
// 		_sort: "name"
// 	}
// });


// axios.get('https://jsonplaceholder.typicode.com/users')
// 	.then(response => {
// 	  console.log(response.data);
//       console.log(response.status);
//       console.log(response.statusText);
//       console.log(response.headers);
//       console.log(response.config);
//   	})
//   	.catch(error => {
//   		console.log(error);
//   	})