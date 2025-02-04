function updateText() {
    let text = document.getElementById("inputText").value;
    document.getElementById("upperCaseText").value = text.toUpperCase();
    document.getElementById("lowerCaseText").value = text.toLowerCase();
    document.getElementById("numbersText").value = text.replace(/\D/g, "");
    document.getElementById("spacesText").value = text.replace(/\s/g, "");
}

function clearInput(id) {
    document.getElementById(id).value = "";
}

function whatsLink() {
    let phoneNumber = document.getElementById("numbersText").value;
    let wppLink = "https://wa.me/55" + phoneNumber;

    window.open(wppLink, "_blank");
}

function copyText(id) {
    let text = document.getElementById(id);
    navigator.clipboard.writeText(text.value)
}

