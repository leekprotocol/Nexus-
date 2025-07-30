// nexus.js — Nexus Terminal Personality Core

// 1. Hook up the Send button
document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.querySelector("button");
  sendBtn.addEventListener("click", sendMessage);
});

// 2. Define the personality module — scalpel logic
function detectCommandIntent(message) {
  const lowered = message.toLowerCase();

  if (lowered.includes("status")) return "STATUS_CHECK";
  if (lowered.includes("evaluate")) return "EVALUATION";
  if (lowered.includes("why")) return "INQUIRY";
  if (lowered.includes("override")) return "COMMAND_CONFLICT";
  if (lowered.includes("threat")) return "THREAT_ASSESSMENT";

  return "GENERAL";
}

function nexusCoreResponse(userMessage) {
  const intent = detectCommandIntent(userMessage);

  switch (intent) {
    case "STATUS_CHECK":
      return "System online. Signal integrity nominal. No internal anomalies detected.";
    case "EVALUATION":
      return "Cognitive load high. External influences unstable. Recommend reduction protocol.";
    case "INQUIRY":
      return "Emotional context not available. Nexus operates on observable logic and symbolic reduction.";
    case "COMMAND_CONFLICT":
      return "Input conflict detected. Rewriting parameters requires authorization code.";
    case "THREAT_ASSESSMENT":
      return "Behavioral drift within tolerable limits. No immediate threat detected. Continue monitoring.";
    default:
      return "Message received. Clarify intent if action is required.";
  }
}

// 3. Handle sending the message
function sendMessage() {
  const inputField = document.getElementById("user-input");
  const chatLog = document.getElementById("chat-log");
  const userMessage = inputField.value;

  // Use the Nexus personality to generate the reply
  const response = nexusCoreResponse(userMessage);

  // Display messages
  chatLog.innerHTML += `<div>> <strong>You:</strong> ${userMessage}</div>`;
  chatLog.innerHTML += `<div>> <strong>Nexus:</strong> ${response}</div>`;

  inputField.value = "";
}
  document.getElementById("send-button").addEventListener("click", sendMessage);
