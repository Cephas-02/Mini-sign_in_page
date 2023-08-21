
window.onload = alert("Welcome dear!  You can Log in with this details - Username: Cephas  Password: Jesus123 - Thank you!")
const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    const authenticated = authetication(username, password);

    if(authenticated) {
        alert(`Welcome ${username}`);
        window.location.href = "logout.html";
    } else {
        alert("You Entered incorrect Username and Password");
    }
});






function authetication(username, password) {
    if (username === "Cephas" && password === "Jesus123") {
        return true;
    } else {
        return false;
    }

    
}




