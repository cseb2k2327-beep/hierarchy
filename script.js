const CORRECT_PIN = "123456";

const lockerScreen = document.getElementById("lockerScreen");
const lockerVideo = document.getElementById("lockerVideo");

const pinScreen = document.getElementById("pinScreen");
const pinInput = document.getElementById("pinInput");
const pinMsg = document.getElementById("pinMsg");
const unlockBtn = document.getElementById("unlockBtn");

const treeVideoScreen = document.getElementById("treeVideoScreen");
const treeVideo = document.getElementById("treeVideo");

const treeScreen = document.getElementById("treeScreen");

/* START LOCKER VIDEO */
lockerVideo.play();

/* SHOW PIN AFTER LOCKER */
setTimeout(() => {
    lockerScreen.style.display = "none";
    pinScreen.style.display = "flex";
    pinInput.focus();
}, 5000);

/* PIN CHECK */
unlockBtn.addEventListener("click", () => {
    if (pinInput.value === CORRECT_PIN) {
        pinScreen.style.display = "none";
        treeVideoScreen.style.display = "block";
        treeVideo.play();

        setTimeout(() => {
            treeVideoScreen.style.display = "none";
            treeScreen.style.display = "flex";
        }, 6000);

    } else {
        pinMsg.textContent = "WRONG PIN";
    }
});
