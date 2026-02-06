// Akan names data
const maleNames = [
  "Kwasi",   // Sunday
  "Kwadwo",  // Monday
  "Kwabena", // Tuesday
  "Kwaku",   // Wednesday
  "Yaw",     // Thursday
  "Kofi",    // Friday
  "Kwame"    // Saturday
];

const femaleNames = [
  "Akosua",  // Sunday
  "Adwoa",   // Monday
  "Abenaa",  // Tuesday
  "Akua",    // Wednesday
  "Yaa",     // Thursday
  "Afua",    // Friday
  "Ama"      // Saturday
];

// Form submit event
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const resultDiv = document.getElementById("results");

  // Validation
  if (!birthdate || !gender) {
    resultDiv.textContent = "Please select your date of birth and gender.";
    return;
  }

  // Get day of week (0 = Sunday, 6 = Saturday)
  const date = new Date(birthdate);
  const day = date.getDay();

  let akanName;

  if (gender.value === "male") {
    akanName = maleNames[day];
  } else {
    akanName = femaleNames[day];
  }

  resultDiv.textContent = `Your Akan name is ${akanName}.`;
});
