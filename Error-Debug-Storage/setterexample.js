const userState = { theme: "dark", logged: true };


localStorage.setItem("userState", JSON.stringify(userState));


const data = JSON.parse(localStorage.getItem("userState"));
console.log(data);  // { theme: "dark", logged: true }


sessionStorage.setItem("userState", JSON.stringify(userState));
const datasession = JSON.parse(sessionStorage.getItem("userState"));
console.log(datasession);  // { theme: "dark", logged: true }

