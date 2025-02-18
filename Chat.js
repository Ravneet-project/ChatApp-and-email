export function sendMessage(messages, setMessages, input, setInput) {
    if (input.trim()) {
      // Add user message
      const newMessages = [...messages, { text: input, user: "You" }];
      setMessages(newMessages);
      setInput("");
  
      // Simulate a bot response after 1 second
      setTimeout(() => {
        const botReply = { text: getBotResponse(input), user: "Bot" };
        setMessages((prevMessages) => [...prevMessages, botReply]);
      }, 1000);
    }
  }
  
  // Function to generate bot response based on input
  function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("hello")) return "Hi there! How can I assist you?";
    if (lowerInput.includes("help")) return "Sure! Let me know your query.";
    if (lowerInput.includes("bye")) return "Goodbye! Have a nice day!";
    return "I'm not sure how to respond to that.";
  }
  