// Define the parts of the sentence and their options
const parts = {
  subject: ["Newt D. Willis", "Capy D. Bara", "Trasher", "Iris", "Kiota", "Bo Bo", "Yomi"],
  verb: ["killed", "slept with", "ate", "chilled with", "is mad at", "loves"],
  adj: ["a dumb", "a weird", "a quirky", "a sticky", "a rabid", "an obese"],
  animal: ["pirate", "turtle", "monkey", "shrimp", "cow", "creature", "stink monster"],
  place: ["on the ship", "on an island", "in Iris's room", "in the trash heap", "in Capy's orange bath", "in Vangrad"]
};
// Initialize selected words
let selected = {
  subject: "", verb: "", adj: "", animal: "", place: ""
};
// Function to initialize the game
function showOptions(part) {
  const container = document.getElementById(`${part}-options`);
  container.innerHTML = ""; // clear previous options
// Create buttons for each word in the selected part
  parts[part].forEach(word => {
    const btn = document.createElement("button");
    btn.textContent = word;
    btn.className = "option-button";
    btn.onclick = () => {
      selected[part] = word;
      updateSentence();
    };
    container.appendChild(btn);
  });
}
// Function to update the sentence display
function updateSentence() {
  const { subject, verb, adj, animal, place } = selected;
  if (subject && verb && adj && animal && place) {
    document.getElementById("sentenceBox").innerText =
      `${subject} ${verb} ${adj} ${animal} ${place}.`;
  }
}
// Function to handle button clicks
function randomSentence() {
  for (let part in parts) {
    const options = parts[part];
    selected[part] = options[Math.floor(Math.random() * options.length)];
  }
  updateSentence();
}
// Function to reset the sentence and options
function resetSentence() {
  for (let key in selected) selected[key] = "";
  document.getElementById("sentenceBox").innerText = "Click a button to start the game!";
  document.querySelectorAll(".options-container").forEach(div => div.innerHTML = "");
}


