const myButton = document.getElementById("myButton");
if (myButton) {
    myButton.addEventListener("click", function () {
        window.location.href = "html files/NextPage.html";
    });
}

const goBackButton = document.getElementById("goBackButton");
if (goBackButton) {
    goBackButton.addEventListener("click", function () {
        window.location.href = "html files/index.html";
    });
}