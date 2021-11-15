let queue = document.querySelector("#queue");
let fastTrack = document.querySelector("#fastTrackBtn");
let checkIn = document.querySelector("#checkInBtn");
let nameInput = document.querySelector("#nameInput");
let addToQueue = document.querySelector("#addToFrontOfQueueBtn");
let queueHeading = document.querySelector("#queueHeading");
let body = document.querySelector("body");

addToQueue.addEventListener("click", () => {
  newLi = document.createElement("li");
  newLi.textContent = nameInput.value;
  queue.appendChild(newLi);
  newLi.style.color = "white";
  if (queue.innerHTML.length >= 1) {
    queueHeading.textContent = "";
    nameInput.value = " ";
  }
});
fastTrack.addEventListener("click", () => {
  newLi = document.createElement("li");
  newLi.textContent = nameInput.value;
  queue.prepend(newLi);
  newLi.style.color = "white";
  nameInput.value = " ";
});
checkInBtn.addEventListener("click", () => {
  queue.removeChild(queue.childNodes[0]);
  console.log(queue);
  if (queue.innerHTML.length === 0) {
    queueHeading.textContent = "Kön är för närvarande tom.";
  }
});
addToQueue.style.backgroundColor = "lightblue";
fastTrack.style.backgroundColor = "lightgreen";
queue.style.backgroundColor = "##ffe6cc";
checkIn.style.backgroundColor = "lightgreen";
body.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1561131668-f63504fc549d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80')";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
queueHeading.style.color = "white";
mainHeading.style.color = "white";
