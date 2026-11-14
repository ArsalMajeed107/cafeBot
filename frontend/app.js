// CafeBot chat UI – mock replies only. No AI API or backend yet.

const chat = document.getElementById("chat");
const form = document.getElementById("composer");
const input = document.getElementById("input");
const chips = document.getElementById("chips");

const SUGGESTIONS = ["Show menu", "I'd like a latte", "Any desserts?"];

// Simple keyword -> mock reply rules (first match wins).
const MOCK_REPLIES = [
  { words: ["menu"], reply: "We have coffee, tea, cold drinks, burgers, sandwiches and desserts. Which would you like to see?" },
  { words: ["latte", "coffee", "cappuccino", "espresso"], reply: "Great choice! (Demo reply) What size would you like?" },
  { words: ["dessert", "brownie", "cake"], reply: "We have sweet treats on the menu. (Demo reply) Want to hear about them?" },
  { words: ["burger", "sandwich"], reply: "Hungry? (Demo reply) Tell me which one and how many." },
  { words: ["hi", "hello", "hey"], reply: "Hello! What can I get started for you?" }
];
const FALLBACK = "I'm in demo mode, so I can only give sample answers. Try asking about the menu.";

function addMessage(text, who) {
  const el = document.createElement("div");
  el.className = "msg " + who;
  el.textContent = text;
  chat.appendChild(el);
  chat.scrollTop = chat.scrollHeight; // auto-scroll to latest
}

function mockReply(text) {
  const t = text.toLowerCase();
  const hit = MOCK_REPLIES.find(r => r.words.some(w => t.includes(w)));
  return hit ? hit.reply : FALLBACK;
}

function send(text) {
  text = text.trim();
  if (!text) return;
  addMessage(text, "me");
  input.value = "";
  setTimeout(() => addMessage(mockReply(text), "bot"), 500);
}

// Submitting the form covers both the Send button and the Enter key.
form.addEventListener("submit", e => { e.preventDefault(); send(input.value); });

SUGGESTIONS.forEach(label => {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = label;
  b.addEventListener("click", () => send(label));
  chips.appendChild(b);
});

addMessage("Hi, I'm CafeBot. What can I get for you today?", "bot");
input.focus();
