function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// heart icon clicked

const heartClicked = document.getElementsByClassName("heart");
for (const heart of heartClicked) {
  heart.addEventListener("click", function () {
    const heartBeat = getElement("heart-beat");
    const heartBeatValue = heartBeat.innerText;
    const heartCount = Number(heartBeatValue) + 1;
    heartBeat.innerText = heartCount;
  });
}

// Call button
const callButtons = document.getElementsByClassName("call-btn");
for (let callBtn of callButtons) {
  callBtn.addEventListener("click", function () {
    const cartTitle =
      callBtn.parentNode.parentNode.children[1].children[1].innerText;
    const cartNumber =
      callBtn.parentNode.parentNode.children[1].children[2].innerText;
    const cartIcon = callBtn.parentNode.children[1].children[0].innerText;

    alert(` Calling... ${cartTitle} ${cartNumber}`);

    const coin = getElement("call-coin");
    const coinValue = coin.innerText;
    if (coinValue < 20) {
      return alert("insufficiant balance");
    }
    const callHistory = getElement("call-history-container");
    // console.log(callHistory)
    const createElement = document.createElement("div");
    createElement.innerHTML = `
    <div
                class="rounded-lg flex justify-between items-center shadow-lg mt-5 p-5"
              >
                <div class="">
                  <p class="text-lg">${cartTitle}</p>
                  <p class="text-lg">${cartNumber}</p>
                </div>
                <p class="">11:36:58 AM</p>
              </div>
    `;
    callHistory.appendChild(createElement);
    const coinDecrement = Number(coinValue) - 20;
    coin.innerText = coinDecrement;
  });

}

const clearBtn = getElement("clear-btn");
document.getElementById("clear-btn").addEventListener("click",function(){
  document.getElementById("call-history-container").innerText = "";
})
