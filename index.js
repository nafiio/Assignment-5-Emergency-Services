
// heart icon clicked

const heartClicked = document.getElementsByClassName("heart");
console.log(heartClicked);
for (const heart of heartClicked) {
  heart.addEventListener("click", function () {
    const heartBeat = document.getElementById("heart-beat");
    const heartBeatValue = heartBeat.innerText;
    const heartCount = Number(heartBeatValue) + 1;
    heartBeat.innerText = heartCount;
  });
}


// Call button
