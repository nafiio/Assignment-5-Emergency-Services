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

// copy btn

const copyBtns = document.getElementsByClassName("copy-btn");
// console.log(copyBtns);
for (const btn of copyBtns) {
  // console.log(btn)
  btn.addEventListener("click", function () {
    const copyNumber = document.getElementById("copy-number");
    const copyNumberValue = copyNumber.innerText;
    const cartCopyNumber =
      btn.parentNode.parentNode.children[1].children[2].innerText;
    alert(`নম্বর কপি হয়েছে : ${cartCopyNumber}`);
    navigator.clipboard.writeText(cartCopyNumber);
    const countNumber = Number(copyNumberValue) + 1;
    copyNumber.innerText = countNumber;
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

    const coin = getElement("call-coin");
    const coinValue = coin.innerText;
    if (coinValue < 20) {
      return alert(
        "❌আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।",
      );
    }
    alert(` Calling... ${cartTitle} ${cartNumber}`);
    const coinDecrement = Number(coinValue) - 20;
    coin.innerText = coinDecrement;

    const currentTime = {
      name: `${cartTitle}`,
      number: `${cartNumber}`,
      date: new Date().toLocaleTimeString(),
    };
    const callHistoryContainer = document.getElementById(
      "call-history-container",
    );

    const createElement = document.createElement("div");
    createElement.innerHTML = `
    <div
                class="rounded-lg flex justify-between items-center shadow-sm mb-5 p-5"
              >
                <div class="">
                  <p class="text-lg">${currentTime.name}</p>
                  <p class="text-lg">${currentTime.number}</p>
                </div>
                <p class="">${currentTime.date}</p>
              </div>
    `;
    callHistoryContainer.append(createElement);

    callHistory.appendChild(createElement);
    
  });
}

const clearBtn = getElement("clear-btn");
clearBtn.addEventListener("click", function () {
  document.getElementById("call-history-container").innerText = "";
});
