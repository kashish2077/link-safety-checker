function checkURL() {
    const input = document.getElementById("urlInput").value.toLowerCase();
    const resultText = document.getElementById("resultText");
    const resultBox = document.getElementById("resultBox");
    const tipText = document.getElementById("tipText");
    const alertSound = document.getElementById("alertSound");
    const safeSound = document.getElementById("safeSound");

    let message = "";
    let resultClass = "";
    let tip = "";

    if (
        input.includes("bit.ly") ||
        input.includes("login-now") ||
        input.includes("free-gift") ||
        input.includes("click-here") ||
        input.includes("verify")
    ) {
        message = "🚫 Suspicious — This looks like a phishing trap!";
        resultClass = "danger";
        tip = "Don't click links that urge you to 'verify' or offer 'free rewards'. Always double-check!";
        alertSound.play();
    } else if (
        input.includes("http://") ||
        input.includes("offer") ||
        input.includes("promo")
    ) {
        message = "⚠️ Be Careful — Might be unsafe.";
        resultClass = "warning";
        tip = "Use HTTPS websites and avoid shortened links or too-good-to-be-true promos.";
        alertSound.play();
    } else if (input.includes("https://") && input.includes(".com")) {
        message = "✅ Looks Safe — But always double-check!";
        resultClass = "safe";
        tip = "Check the URL spelling and domain. Secure sites use https://";
        safeSound.play();
    } else {
        message = "🤔 Can't tell. Use caution.";
        resultClass = "warning";
        tip = "When in doubt, don't click. Use virus scanners or link checkers.";
        alertSound.play();
    }

    resultBox.className = "";
    resultBox.classList.add(resultClass);
    resultBox.classList.remove("hidden");

    resultText.textContent = message;
    tipText.textContent = tip;
}

function clearInput() {
    document.getElementById("urlInput").value = "";
    document.getElementById("resultBox").classList.add("hidden");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}