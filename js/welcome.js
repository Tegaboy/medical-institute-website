const displayName = document.querySelector("#display-name");
// to get the name from local storage
const userName = localStorage.getItem("name")
// to add it dynamically to the dom
displayName.textContent = userName;