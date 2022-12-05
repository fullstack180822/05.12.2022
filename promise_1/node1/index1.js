
const axiosRequest = require('axios')
// function foo() {
//     return axiosRequest.get(`https://www.boredapi.com/api/activity`);
// }
// let foo_result = foo()
axiosRequest.get(`https://www.boredapi.com/api/activity`)
                         .then(response => {
                             console.log(`You could : ${response.data.activity}`);
                             return axiosRequest.get(`https://www.boredapi.com/api/activity`)
                         })
                         .catch(error => {
                            console.log(`ERROR: ${error}`)})
                         .then(response => {
                            console.log(`You could : ${response.data.activity}`);
                            //return axiosRequest.get(`https://www.boredapi.com/api/activity`)
                        })

// https://jsonplaceholder.typicode.com/todos/1
// https://jsonplaceholder.typicode.com/albums/1
                      
// json encoding
const json_headers = {
    headers: {
        'Accept-Encoding': 'application/json',
    }
}
axiosRequest.default.get(`https://jsonplaceholder.typicode.com/todos/1`, json_headers)
    .then(response => {
        console.log(`Todos: ${JSON.stringify(response.data)}`);
        return axiosRequest.get(`https://jsonplaceholder.typicode.com/albums/1`, json_headers)
    })
    .catch(error => {
        console.log(`ERROR: ${error}`)
    })
    .then(response => {
        console.log(`Albums : ${JSON.stringify(response.data)}`);
        //return axiosRequest.get(`https://www.boredapi.com/api/activity`)
    })




