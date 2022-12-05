const sleep_1000 = new Promise((resolve, reject) => {
    setTimeout(
        () => {  
                resolve()
        },
        1000);
})

sleep_1000.then(
    (value) => { console.log('finished!');}, // success
)
console.log('passed without waiting!!');
