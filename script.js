// JavaScript to hide the loader and show the content once the page is fully loaded
window.addEventListener("load", function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
});

function formAlert() {
    const fullname = document.getElementById('names').value;
    alert(`Thank you for your feedback ${fullname}.\nWe will get back to you!`)
}