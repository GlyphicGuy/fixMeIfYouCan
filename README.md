# 🔐 fixMeIfYouCan — Treasure Hunt Challenge

> **SYSTEM COMPROMISED.** The decryption terminal has been sabotaged. Four bugs have been planted in the code. Fix them all to decode the secret message and reveal the passphrase to the next level.

---

## 🎯 Your Mission

This repo contains a simple HTML/CSS/JS cipher-decoder web app — but it has **4 intentional bugs**. Use your tools, your wits, or AI to find and fix every bug. When all bugs are squashed, the app will correctly decode an intercepted message containing:

- 🔑 **A passphrase** for the next level
- 🗺️ **A riddle** pointing to the next location

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

### 1 — Clone the repo

```bash
git clone https://github.com/GlyphicGuy/fixMeIfYouCan.git
cd fixMeIfYouCan
```

### 2 — Install dependencies

```bash
npm install
```

### 3 — Run the dev server

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

You should see the **CIPHER BREAKER v1.0** terminal interface.

---

## 🐛 Bug Hunting

There are exactly **4 bugs** spread across the three source files:

| File | Bugs |
|------|------|
| `index.html` | 1 bug |
| `style.css` | 1 bug |
| `script.js` | 2 bugs |

The cipher uses a **shift of 13** (ROT-13). Once all bugs are fixed and you click **[ DECODE ]**, the message will appear.

> 💡 Tip: Open the browser console (`F12`) — error messages are your friends.

---

## 🤖 AI Prompt Ideas

Stuck? Try feeding these prompts to an AI assistant (GitHub Copilot, ChatGPT, etc.) to help you track down each bug. They're ordered roughly from "first thing to try" to "I've already stared at this for too long".

### 🔴 Nothing happens when I click the button

```
My HTML has a button with onclick="decodeMessage()" but clicking it does nothing
and there's no error. I have a JavaScript file loaded at the bottom of the page.
What should I check first?
```

```
Look at this HTML button and my JavaScript file. Does the function name in the
onclick attribute exactly match the function defined in the script?
```

### 🔴 I get a console error when I click Decode

```
I get "TypeError: Cannot read properties of null (reading 'textContent')" when
my button is clicked. What does this mean and how do I find the element ID
that's causing it?
```

```
My JavaScript calls document.getElementById() to read some text, but it's
returning null. How do I find the correct id attribute I should be passing?
```

### 🔴 The output panel appears but I can't see any text

```
After clicking the button the result box appears and seems to have content
(the element is not empty in DevTools), but the text is invisible. What CSS
property is most likely causing this?
```

```
Check my CSS — the .result class styles the decoded output box. Could there be
a color contrast issue that makes the text invisible against the background?
```

### 🔴 The decoded text is garbled / letters look wrong

```
My Caesar cipher decoder outputs almost-readable text but some letters are
still scrambled. The alphabet has 26 letters. Where in my shift arithmetic
should I double-check the modulo value?
```

```
I'm implementing ROT-N decoding with this formula:
  ((charCode - 65 - shift + 26) % 25) + 65
Is the modulo value correct for a 26-letter alphabet?
```

---

## 📁 Project Structure

```
fixMeIfYouCan/
├── index.html    ← page markup + UI
├── style.css     ← terminal styling
├── script.js     ← cipher decoder logic
├── package.json  ← npm scripts & deps
└── README.md     ← you are here
```

---

## ✅ How to Verify You've Won

When all 4 bugs are fixed:

1. The **[ DECODE ]** button works without errors in the console
2. The decoded message is **visible** in the output panel
3. The decoded text contains the **passphrase** and the **riddle**

Good luck, hacker. 🕵️

