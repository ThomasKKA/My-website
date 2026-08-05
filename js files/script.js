const myButton = document.getElementById("myButton");
if (myButton) {
    myButton.addEventListener("click", function () {
        window.location.href = "NextPage.html";
    });
}

const goBackButton = document.getElementById("goBackButton");
if (goBackButton) {
    goBackButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}

const prayer = document.getElementById("PrayerPage");
if (prayer) {
    prayer.addEventListener('click', function () {
        window.location.href="Prayer.html"
    });
}