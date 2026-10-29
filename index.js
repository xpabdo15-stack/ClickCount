
let num = 0;

const counter = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateCounter() {
  counter.textContent = num;

  counter.classList.remove("pop");

  // إعادة تشغيل حركة الرقم
  void counter.offsetWidth;

  counter.classList.add("pop");
}

increaseBtn.addEventListener("click", function() {
  num++;
  updateCounter();
});

resetBtn.addEventListener("click", function() {
  num = 0;
  updateCounter();
});
