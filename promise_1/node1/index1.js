
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
                            console.log('1111111111');
                            //return axiosRequest.get(`https://www.boredapi.com/api/activity`)
                        })


                      

