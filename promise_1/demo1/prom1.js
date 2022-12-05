const axios_get = new Promise((success, failure) => {
    const rand = Math.floor(Math.random() * 100);
    console.log(f3)
    if (rand % 2 == 0) {
        console.log('success');
        success(rand)
    }
    else {
        failure(`ERROR ${rand}`)
    }
})

axios_get.then(
     
     (error) => { console.log(`e-zugi ${error}`);}, // failure
     (value) => { console.log(`zugi ${value}`);}, // success
)
// .....