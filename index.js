let userInput = document.querySelector("#date");
userInput.max = new Date().toISOString().split("T")[0];

document.querySelector("button").addEventListener("click", calculateAge);

function calculateAge() {
  const result = document.getElementById("result");

  if (!userInput.value) {
    result.textContent = "Please select your birth date.";
    result.style.display = "block";
    return;
  }

  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let y3 = y2 - y1;
  let m3 = m2 - m1;
  let d3 = d2 - d1;

  if (d3 < 0) {
    m3--;
    d3 += getDaysInMonth(y2, m2 - 1 || 12);
  }

  if (m3 < 0) {
    y3--;
    m3 += 12;
  }

  result.textContent = `Your age is ${y3} years, ${m3} months, and ${d3} days.`;
  result.style.display = "block";
}
  