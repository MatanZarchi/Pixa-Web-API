function showAlert(message) {
    document.getElementById("alertMessage").innerText = message;
    document.getElementById("customAlert").style.display = "block";
}

function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}
