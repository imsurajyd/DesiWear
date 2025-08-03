// DROAP DOWN
const profileBtn = document.getElementById("profileBtn");
const dropdown = document.getElementById("dropdownMenu");

profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("show");
});

document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target) && !profileBtn.contains(e.target)) {
        dropdown.classList.remove("show");
    }
});

// Fake login
function login() {
    localStorage.setItem("userName", "Suraj");
    updateUI();
}

function updateUI() {
    const name = localStorage.getItem("userName");
    if (name) {
        document.getElementById("notLoggedIn").style.display = "none";
        document.getElementById("loggedIn").style.display = "block";
        document.getElementById("userName").textContent = name;
        document.getElementById("userName").style.color = "#E54746";
        document.getElementById("profileName").textContent = name;
    }
}

// Auto load if logged in
updateUI();