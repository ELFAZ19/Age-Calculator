document.querySelector("button").addEventListener("click", calculateAge);

function calculateAge() {
  const result = document.getElementById("result");
  const timeRemaining = document.getElementById("timeRemaining");
  const zodiacSign = document.getElementById("zodiacSign");
  const funMessage = document.getElementById("funMessage");

  const userInput = document.querySelector("#date");
  let selectedDate = userInput.value;

  if (!selectedDate) {
    result.textContent = "Please enter your birth date.";
    result.style.display = "block";
    return;
  }

  let birthDate = new Date(selectedDate);
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

  // Adjust if the day or month is negative
  if (d3 < 0) {
    m3--;
    d3 += getDaysInMonth(y2, m2 - 1 || 12);
  }

  if (m3 < 0) {
    y3--;
    m3 += 12;
  }

  // Age in different units
  let ageInDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
  let ageInWeeks = Math.floor(ageInDays / 7);
  let ageInHours = ageInDays * 24;
  let ageInMinutes = ageInHours * 60;
  let ageInSeconds = ageInMinutes * 60;

  result.textContent = `Your age is ${y3} years, ${m3} months, and ${d3} days.`;
  result.style.display = "block";

  // Time until next birthday
  let nextBirthday = new Date(
    y2 + (m2 > m1 || (m2 === m1 && d2 > d1) ? 1 : 0),
    m1 - 1,
    d1
  );
  let timeLeft = nextBirthday - today;
  let timeLeftDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let timeLeftHours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let timeLeftMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

  timeRemaining.textContent = `Time until next birthday: ${timeLeftDays} days, ${timeLeftHours} hours, ${timeLeftMinutes} minutes.`;
  timeRemaining.style.display = "block";

  // Zodiac sign calculation
  const zodiac = getZodiacSign(m1, d1);
  zodiacSign.textContent = `Your Zodiac sign is: ${zodiac}`;
  zodiacSign.style.display = "block";

  // Fun message based on age
  funMessage.textContent = getFunMessage(y3);
  funMessage.style.display = "block";
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

// Get zodiac sign based on birth date
function getZodiacSign(month, day) {
  const zodiacSigns = [
    { sign: "Capricorn", endDate: { month: 1, day: 19 } },
    { sign: "Aquarius", endDate: { month: 2, day: 18 } },
    { sign: "Pisces", endDate: { month: 3, day: 20 } },
    { sign: "Aries", endDate: { month: 4, day: 19 } },
    { sign: "Taurus", endDate: { month: 5, day: 20 } },
    { sign: "Gemini", endDate: { month: 6, day: 20 } },
    { sign: "Cancer", endDate: { month: 7, day: 22 } },
    { sign: "Leo", endDate: { month: 8, day: 22 } },
    { sign: "Virgo", endDate: { month: 9, day: 22 } },
    { sign: "Libra", endDate: { month: 10, day: 22 } },
    { sign: "Scorpio", endDate: { month: 11, day: 21 } },
    { sign: "Sagittarius", endDate: { month: 12, day: 21 } },
  ];

  for (let i = 0; i < zodiacSigns.length; i++) {
    const sign = zodiacSigns[i];
    if (
      month < sign.endDate.month ||
      (month === sign.endDate.month && day <= sign.endDate.day)
    ) {
      return sign.sign;
    }
  }
  return "Capricorn"; // Default if not found (for December 22 - December 31)
}

// Fun message based on age
function getFunMessage(age) {
  if (age <= 18) {
    return "You are still in your prime years!";
  } else if (age <= 30) {
    return "You’re a young spirit, ready to take on the world!";
  } else if (age <= 50) {
    return "You have wisdom and experience, a perfect balance!";
  } else {
    return "You are a true inspiration with years of experience!";
  }
}
