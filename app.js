form = document.getElementById("form");
formInput = document.getElementById("formInput")
myDiv = document.querySelector(".container")
API = "https://api.github.com/users/"

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = formInput.value.trim(); 
    if (inputValue === "") {
        alert("Enter username pls"); 
    } else {
        searchUser(inputValue);
    }
});

searchUser = () => {
    fetch(API + formInput.value)
    .then((res) => {
        if (res.status === 200) {
            return res.json();
        } else if (res.status === 404) {
            alert("User not found");
        } else {
            alert("An error occurred.");
        }
    })
    .then((data) => {
        if (data) {
            renderUser(data);
        }
    })
};



renderUser = (data) => {
    myDiv.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = data.login;

    const userImage = document.createElement("img");
    userImage.src = data.avatar_url;

    const followers = document.createElement("p");
    followers.textContent = `Followers: ${data.followers}`;

    const following = document.createElement("p");
    following.textContent = `Following: ${data.following}`;

    myDiv.append(userImage,h2, followers, following);
};




