const my_promise_zugi = new Promise((success, failure) => {
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

my_promise_zugi.then(
    value => { console.log(`zugi ${value}`);}, // success
    error => { console.log(`e-zugi ${error}`);}, // failure
     
)
// .....