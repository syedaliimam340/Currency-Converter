# Currency-Converter
# Currency Converter

A simple **Currency Converter** project built using **HTML, CSS, JavaScript, and Fetch API**.

This project allows users to convert an amount from one currency to another by fetching live exchange rate data from an API.

---

## Features

- Convert currency in real time
- Select source and target currencies
- Fetch live exchange rates
- Simple and responsive UI
- Beginner-friendly JavaScript practice project

---

## Technologies Used

- **HTML** – Structure of the page
- **CSS** – Styling and layout
- **JavaScript** – Logic and DOM manipulation
- **Fetch API** – To get currency exchange data from server/API

---

## How It Works

1. User enters an amount
2. User selects source currency
3. User selects target currency
4. App fetches exchange rate data using `fetch()`
5. Converted amount is shown on the screen

---

## Project Structure

```text
Lecture 13 Fetch API/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Fetch API Usage

This project uses `fetch()` to call an exchange rate API and get JSON data.

Example:

```javascript
fetch("API_URL")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

---

## How to Run

1. Open the folder in **VS Code**
2. Open `index.html`
3. Use **Live Server** or open it in the browser
4. Enter amount and select currencies
5. View the converted result

---

## Learning Outcomes

After completing this project, you will understand:

- How to use Fetch API
- How to work with JSON data
- How to handle API responses
- How to build a real-world JavaScript project
- How to update UI dynamically using JavaScript

---

## Notes

- Fetch API returns a **Promise**
- API response should usually be converted using `.json()`
- Error handling is important for network failures
- Live exchange APIs may require an API key

---

## Author

Created for learning JavaScript and Fetch API.