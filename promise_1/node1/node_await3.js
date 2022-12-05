
const axiosRequest = require('axios')

async function run_axios() {
    try {
        const response = await axiosRequest.get(`https://www.boredapi.com/api/activity`);
        console.log(`You could : ${response.data.activity}`);
        const response2 = await axiosRequest.get(`https://www.boredapi.com/api/activity`);
        console.log(`You could : ${response2.data.activity}`);
    }
    catch (error) {
        console.log(`ERROR: ${error}`)
    }
    finished = true
}

async function run_axios_async() {
    return new Promise(async (success, failure) => {
        try {
            const response = await axiosRequest.get(`https://www.boredapi.com/api/activity`);
            console.log(`You could : ${response.data.activity}`);
            const response2 = await axiosRequest.get(`https://www.boredapi.com/api/activity`);
            console.log(`You could : ${response2.data.activity}`);
        }
        catch (error) {
            console.log(`ERROR: ${error}`)
        }
        success()
    })
}

async function main() {
    run_axios()
    await run_axios_async()
    await console.log('??????????');
}
main()

//await call activity_api
//await call activity_api    