const accesDenied = document.getElementsByClassName("accesDenied");

for (const project of accesDenied) {
    project.addEventListener("click", function (e) {
        alert("Toegang geweigerd");
    })
}

