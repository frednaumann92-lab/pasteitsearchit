# Save and Search

A lightweight, single-page web application built with vanilla HTML, CSS, and JavaScript. **Save and Search** allows users to paste, analyze, search, and manage text entirely in the browser with zero external dependencies.

## Features

- **Real-Time Text Analytics:** Automatically tracks and displays word count, line count, total character count, and the last modification timestamp.
- **Smart Search & Multi-Term Highlighting:** 
  - Search for comma-separated terms (e.g., `term1, term2, term3`).
  - Matches are filtered line-by-line and highlighted with distinct, cycling colors for each term.
- **Local Storage Persistence:** Automatically saves your text and dark mode preference locally using the browser's `localStorage` so you never lose your work on page refresh.
- **Mock Encryption:** Instantly scrambles your text into cryptographic-looking gibberish (`@#$%&*...`) and locks the textarea until toggled off.
- **Export & Sharing Tools:**
  - **Export Text:** Downloads your pasted text as a `.txt` file (`trespass_notices.txt`).
  - **Copy Results:** Instantly copies search findings to your clipboard.
  - **Print:** Formats and opens a print dialog for your search results.
- **Interactive UI Enhancements:**
  - **Going Dark:** Toggleable dark mode with smooth CSS transitions.
  - **Sarcastic Remarks:** Generates witty, randomized commentary whenever a search is performed.
  - **Destroy the World:** A whimsical toggle complete with apocalyptic warnings.
  - **Live Clock:** A floating, real-time digital clock centered at the bottom of the screen.

## Getting Started

1. Save the code into a file named `index.html`.
2. Open the file in any modern web browser (Chrome, Firefox, Safari, Edge).
3. Start typing or pasting text into the main text area.

## Technical Details

- **Language:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Storage:** Browser `localStorage`
- **Dependencies:** None (fully self-contained single-file implementation)
