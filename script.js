const lockerScreen = document.getElementById("lockerScreen");
const lockerVideo = document.getElementById("lockerVideo");

const pinScreen = document.getElementById("pinScreen");
const pinInput = document.getElementById("pinInput");
const pinMsg = document.getElementById("pinMsg");
const pinBtn = document.getElementById("pinBtn");
const pinTitle = document.getElementById("pinTitle");

const treeVideoScreen = document.getElementById("treeVideoScreen");
const treeVideo = document.getElementById("treeVideo");

const treeScreen = document.getElementById("treeScreen");

/* AFTER LOCKER VIDEO */
lockerVideo.onended = () => {
    lockerScreen.style.display = "none";
    pinScreen.style.display = "flex";
    setupPinMode();
    pinInput.focus();
};

/* SET PIN MODE */
function setupPinMode() {
    const savedPin = localStorage.getItem("userPin");

    if (!savedPin) {
        pinTitle.textContent = "CREATE NEW PIN";
        pinBtn.textContent = "SAVE PIN";
    } else {
        pinTitle.textContent = "ENTER PIN";
        pinBtn.textContent = "UNLOCK";
    }
}

/* PIN BUTTON */
pinBtn.addEventListener("click", () => {
    const enteredPin = pinInput.value;
    const savedPin = localStorage.getItem("userPin");

    if (enteredPin.length !== 6) {
        pinMsg.textContent = "PIN MUST BE 6 DIGITS";
        return;
    }

    if (!savedPin) {
        localStorage.setItem("userPin", enteredPin);
        pinMsg.style.color = "lightgreen";
        pinMsg.textContent = "PIN CREATED SUCCESSFULLY";
        pinInput.value = "";
        setupPinMode();
    } else {
        if (enteredPin === savedPin) {
            pinScreen.style.display = "none";
            treeVideoScreen.style.display = "block";
            treeVideo.play();

            treeVideo.onended = () => {
                treeVideoScreen.style.display = "none";
                treeScreen.style.display = "flex";
            };
        } else {
            pinMsg.textContent = "WRONG PIN";
        }
    }
});
