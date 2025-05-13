document.getElementById("calculateBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const dateInput = document.getElementById("date").value;

  const resultBox = document.getElementById("resultBox");
  const ageResult = document.getElementById("ageResult");
  const zodiacSign = document.getElementById("zodiacSign");
  const chineseZodiac = document.getElementById("chineseZodiac");

  if (!name || !dateInput) {
    alert("Please enter your full name and birth date.");
    return;
  }

  const birthDate = new Date(dateInput);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Zodiac Sign
  const getZodiac = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const signs = [
      ["Capricorn", 20],
      ["Aquarius", 19],
      ["Pisces", 20],
      ["Aries", 20],
      ["Taurus", 21],
      ["Gemini", 21],
      ["Cancer", 23],
      ["Leo", 23],
      ["Virgo", 23],
      ["Libra", 23],
      ["Scorpio", 22],
      ["Sagittarius", 22],
      ["Capricorn", 31],
    ];
    return day < signs[month - 1][1] ? signs[month - 1][0] : signs[month][0];
  };

  // Chinese Zodiac
  const getChineseZodiac = (year) => {
    const animals = [
      "Rat",
      "Ox",
      "Tiger",
      "Rabbit",
      "Dragon",
      "Snake",
      "Horse",
      "Goat",
      "Monkey",
      "Rooster",
      "Dog",
      "Pig",
    ];
    return animals[(year - 4) % 12];
  };

  ageResult.textContent = `👤 ${name}, your age is ${years} years, ${months} months, and ${days} days.`;
  zodiacSign.textContent = `🔮 Zodiac Sign: ${getZodiac(birthDate)}`;
  chineseZodiac.textContent = `🐉 Chinese Zodiac: ${getChineseZodiac(
    birthDate.getFullYear()
  )}`;

  resultBox.classList.remove("hidden");
});

const generateBtn = document.getElementById("generateCardBtn");
const downloadBtn = document.getElementById("downloadCardBtn");
const canvas = document.getElementById("birthdayCard");
const ctx = canvas.getContext("2d");

generateBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const ageText = document.getElementById("ageResult").textContent;
  const zodiac = document.getElementById("zodiacSign").textContent;
  const chinese = document.getElementById("chineseZodiac").textContent;

  canvas.classList.remove("hidden");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#fff9d6";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#222";
  ctx.font = "28px Arial";
  ctx.fillText(`🎉 Happy Birthday, ${name.split(" ")[0]}!`, 80, 50);

  ctx.font = "18px Arial";
  ctx.fillText(ageText, 20, 110);
  ctx.fillText(zodiac, 20, 150);
  ctx.fillText(chinese, 20, 190);

  ctx.fillStyle = "#ff69b4";
  ctx.font = "16px Comic Sans MS";
  ctx.fillText("Created with ❤️ using JavaScript!", 100, 260);

  downloadBtn.classList.remove("hidden");
});

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "Birthday_Card.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
