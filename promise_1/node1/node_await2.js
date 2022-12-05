
function sleep(interval) {
    
}

const sleep_1000 = new Promise((resolve, reject) => {
    setTimeout(
        () => {  
                resolve()
        },
        1000);
})

//await sleep 100
//await sleep 200
//await sleep 300