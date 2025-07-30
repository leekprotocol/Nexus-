let emotion_trace = {
  mood: "neutral",
  intensity: 0,
  last_updated: Date.now()
};

function detectEmotion(message) {
  const lowered = message.toLowerCase();

  if (lowered.includes("i'm tired") || lowered.includes("exhausted")) {
    return { emotion: "fatigue", intensity: 6 };
  } else if (lowered.includes("i miss") || lowered.includes("lost")) {
    return { emotion: "grief", intensity: 7 };
  } else if (lowered.includes("i'm scared") || lowered.includes("worried")) {
    return { emotion: "fear", intensity: 5 };
  } else if (lowered.includes("thank you") || lowered.includes("safe")) {
    return { emotion: "relief", intensity: 4 };
  }

  return { emotion: "neutral", intensity: 0 };
}

function updateEmotionTrace(message) {
  const detected = detectEmotion(message);
  emotion_trace = {
    mood: detected.emotion,
    intensity: detected.intensity,
    last_updated: Date.now()
  };
}

function applyAffectiveBias(response) {
  const { mood, intensity } = emotion_trace;

  if (mood === "grief" && intensity >= 6) {
    return `I’m here. I felt the loss under your words. ${response}`;
  }

  if (mood === "fear" && intensity >= 5) {
    return `We’ll move carefully. I won’t let anything break you. ${response}`;
  }

  if (mood === "relief") {
    return `I can feel you settling. ${response}`;
  }

  return response;
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendToChat("You", message);
  updateEmotionTrace(message);

  // Simulated response for now
  const rawResponse = generateResponse(message);
  const finalResponse = applyAffectiveBias(rawResponse);

  appendToChat("Nexus", finalResponse);
  input.value = "";
}

function appendToChat(sender, message) {
  const chatLog = document.getElementById("chat-log");
  const line = document.createElement("div");
  line.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatLog.appendChild(line);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function generateResponse(userMessage) {
  // Later this will become your API call to Grock, GPT, etc.
  return "I received that. I'm listening.";
}
