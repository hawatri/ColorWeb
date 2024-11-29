let typedColor = "";
let typingTimeout;

document.addEventListener("keydown", (event) => {
  // Handle Backspace for corrections
  if (event.key === "Backspace") {
    typedColor = typedColor.slice(0, -1);
  } else if (/^[a-zA-Z]$/.test(event.key)) {
    // Append valid alphabetical characters
    typedColor += event.key.toLowerCase();
  }

  // Create a temporary element to test color validity
  const testElement = document.createElement("div");
  testElement.style.color = typedColor;

  if (testElement.style.color) {
    // Valid color; apply it
    document.body.style.backgroundColor = typedColor;
  }

  // Reset typedColor after a delay of 2 seconds of inactivity
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    typedColor = "";
  }, 1000); // 1000ms = 1 seconds
});
