const correctPin = "123456";

const locker = document.getElementById("lockerScreen");
const pinScreen = document.getElementById("pinScreen");
const treeVideoScreen = document.getElementById("treeVideoScreen");
const treeScreen = document.getElementById("treeScreen");
const pinMsg = document.getElementById("pinMsg");

setTimeout(() => {
    locker.style.display = "none";
    pinScreen.style.display = "flex";
}, 5000); // locker video duration

function unlock() {
    const pin = document.getElementById("pinInput").value;

    if (pin === correctPin) {
        pinScreen.style.display = "none";
        treeVideoScreen.style.display = "block";

        setTimeout(() => {
            treeVideoScreen.style.display = "none";
            treeScreen.style.display = "flex";
        }, 6000); // tree grow video
    } else {
        pinMsg.textContent = "ACCESS DENIED";
    }
}
