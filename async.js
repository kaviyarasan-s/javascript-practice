// Normal async setup
// const getData = (URL, callback) => {
//     const request = new XMLHttpRequest();
//     const OK = 200;
//     request.addEventListener('readystatechange', () => {
//         if (request.readyState == 4) {
//             if (request.status === OK) {
//                 const data = JSON.parse(request.responseText);
//                 callback(undefined, data);
//             } else {
//                 callback('Unable to fetch the data', undefined);
//             }
//         }
//     });
//     request.open('GET', URL);
//     // request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
//     request.send();
// }



// getData('data.json', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         getData('data1.json', (err, data)=>{
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//                 getData('data2.json' , (err, data) =>{
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// });

// promise example

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         //resolve('data');
//         //reject('error');
//     });
// }

// getPromise().then(data => {
//     console.log(data);
// }, err => {if (response.status !== 200) {
//     throw new Error('unable to fetch data');
// }
//     console.log(err);
// })

// Chaining promise
// const getData = (URL) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         const OK = 200;
//         request.addEventListener('readystatechange', () => {
//             if (request.readyState == 4) {
//                 if (request.status === OK) {
//                     const data = JSON.parse(request.responseText);
//                     resolve(data);
//                 } else {
//                     reject('Unable to fetch the data');
//                 }
//             }
//         });
//         request.open('GET', URL);
//         // request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
//         request.send();
//     });
// }

// getData('data.json').then(data => {
//     console.log('Result 1', data);
//     return getData('data1.json');
// }).then(data => {
//     console.log('Result 2', data);
//     return getData('data2.json');
// }).then(data => {
//     console.log('Result 3', data);
// }).catch(err => {
//     console.log(err);
// })

// fetch API

// fetch('data/user.json').then((res) => {
//     console.log(res);
//     return res.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// Async & Await

const getData = async () => {
    const response = await fetch('data/user2.json');
    if (response.status !== 200) {
        throw new Error('unable to fetch data')
    }
    const data = await response.json();
    return data;
}

getData()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));