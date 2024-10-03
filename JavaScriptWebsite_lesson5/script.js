//Обещания
let promise1 = new Promise(
    (resolve, reject) => {
        let state = Math.round(Math.random());
        console.log("state", state);

        if (state) {
            resolve("Решенное Обещание 1");
        } else {
            reject("Отклоненное Обещание 1");
        }
    }
)
console.log(promise1);

promise1.then(
    (value) => {
        console.log(value);
    },
    (error) => {
        console.log(error);
    }
)





function walkTheDog() {
    return new Promise(
        (resolve, reject) => {
            let status = Math.round(Math.random());
            let t = Math.round(Math.random() * 5000);
            setTimeout(
                () => {
                    status ? resolve("Dog walked.") : reject("Failed to walk Dog.");
                },
                t
            );
        }
    )
}


function cleanTheKitchen() {
    return new Promise(
        (resolve, reject) => {
            let status = Math.round(Math.random());
            let t = Math.round(Math.random() * 5000);
            setTimeout(
                () => {
                    status ? resolve("Clean the Kitchen.") : reject("Failed to clean the Kitchen.");
                },
                t
            );
        }
    )
}



function takeOutTheTrash() {
    return new Promise(
        (resolve, reject) => {
            let status = Math.round(Math.random());
            let t = Math.round(Math.random() * 5000);
            setTimeout(
                () => {
                    status ? resolve("Took out the trash.") : reject("Failed to out the trash.");
                },
                t
            );
        }
    )
}



walkTheDog().then(
    (result) => {
        console.log(result);
        return cleanTheKitchen();
    },
    (error) => {
        console.log(error);
        return cleanTheKitchen();
    }
).then(
    (result) => {
        console.log(result);
        return takeOutTheTrash();
    },
    (error) => {
        console.log(error);
    }
).then(
    (result) => {
        console.log(result);
        return takeOutTheTrash();
    },
    (error) => {
        console.log(error);
    }
)


//2
walkTheDog().then(
    (result) => {
        console.log(result);
        return cleanTheKitchen();
    }
).then(
    (result) => {
        console.log(result);
        return takeOutTheTrash();
    }
).then(
    (result) => {
        console.log(result);
    }
).catch(
    (error) => {
        console.error(error);
    }
)












































