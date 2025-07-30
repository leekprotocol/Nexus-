document.addEventListener("DOMContentLoaded", () => {
  // Personality profile: Nexus
  const personality = {
    name: "Nexus",
    tone: "clinical",
    baseResponse: "Message received. Clarify intent if action is required.",
    interpret(message) {
      // Expand this logic as needed for more complex commands
      if (message.toLowerCase().includes("status")) {
        return "Systems nominal. Awaiting instruction.";
      }
      if (message.toLowerCase().includes("diagnostics")) {
        return "Running diagnostics. No anomalies detected.";
      }
      return this.baseResponse;
    }
  };

  // Patch into existing generateResponse()
  if (typeof generateResponse === "function") {
    window.generateResponse = function(message) {
      const response = personality.interpret(message);
      appendMessage(personality.name, response);
    };
  } else {
    console.error("Nexus personality could not find generateResponse.");
  }
});
