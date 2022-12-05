
function sleep(interval) {
    const sleep_promise = new Promise((resolve, reject) => {
        setTimeout(
            () => {  
                    resolve()
            },
            interval);
    })
    return sleep_promise
}

async function go_sleep() {
    await new Promise((resolve, reject) => {
        setTimeout(
            () => {  
                    resolve()
            },
            100);
    })
    console.log('finish sleep 100');
    await sleep(200)
    console.log('finish sleep 200');
    await sleep(300)
    console.log('finish sleep 300');
}
go_sleep()
//await sleep 100
//await sleep 200
//await sleep 300
