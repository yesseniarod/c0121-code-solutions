let countID = setInterval(countDown, 1000);
let currentCount = 3;

function countDown() {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else {
    console.log('Blast off!');
    clearInterval(countID);
  }
}
