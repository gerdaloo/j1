let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
// let usersArea = document.getElementById('users')



let submit = document.getElementById("submit");



submit.addEventListener('click', async (e) => {
    e.preventDefault()
    const response = await fetch('/', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: email.value,
                name: name.value,
                password: password.value
            }
        )
    });
    console.log(await response.json())
        // .then((res) => res.json()).then(res => {
        //     if (res.status == "err") {
        //         return alert("درخواست با خطا مواجه شد")
        //     }
        //     alert("ثبت نام با موفقیت انجام شد")
        // })
})





// let users = [];




// // password.addEventListener('keypress', (e) => {
// //     if (e.target.value.length > 6) {
// //         e.target.style.borderColor = "green"
// //     }
// // })

// let ul = document.createElement('ul');
// usersArea.appendChild(ul);
// submit.addEventListener('click', () => {
//     if (name.value.length > 4 && email.value.length > 5 && password.value.length > 6) {
//         users.push({
//             name: name.value,
//             email: email.value,
//             password: password.value
//         });
//         let li = document.createElement('li');
//         ul.appendChild(li);
//         li.innerHTML = `name => ${name.value}, email => ${email.value}`
//     } else {
//         alert("fill the form")
//     }
//     name.value = ""
//     email.value = ""
//     password.value = ""
//     console.log(users);
// })




