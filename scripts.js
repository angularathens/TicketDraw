function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getName(number) {
  let result = participants[getRandomInt(participants.length)];
  document.getElementById(number).innerText = result;
  document.getElementById(`${number}-div`).classList.replace("hidden","winner");
  console.log(number, result);
  return null;
}
