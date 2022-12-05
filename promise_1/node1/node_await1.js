function get_a_promise() {
    const my_promise_zugi = new Promise((success, failure) => {
        const rand = Math.floor(Math.random() * 100);

        if (rand % 2 == 0) {
            console.log('success');
            success(rand)
        }
        else {
            failure(`ERROR ${rand}`)
        }
    })
    return my_promise_zugi
}

async function run_in_parallel() {
    try {
        const success1 = await get_a_promise() // blocking
        console.log(success1);
        const success2 = await get_a_promise()
        console.log(success2);
        const success3 = await get_a_promise()
        console.log(success3);
        const success4 = await get_a_promise()
        console.log(success4);
    }
    catch (error) {
        console.log(`ERROR: ${error}`);
    }    
}
run_in_parallel()
console.log('when ?????');