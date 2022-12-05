

axiosRequest.get(`https://www.boredapi.com/api/activity`)
    .then(response => {
        console.log(`You could : ${response.data.activity}`);
        return axiosRequest.get(`https://www.boredapi.com/api/activity`)
    })
    .then(response => {
        console.log(`You could : ${response.data.activity}`);
        //return axiosRequest.get(`https://www.boredapi.com/api/activity`)
    })
    .catch(error => {
        console.log(`ERROR: ${error}`)
    })

//await call activity_api
//await call activity_api    