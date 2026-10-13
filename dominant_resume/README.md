# React Lab Template

A simple React + Vite starter project intended to be adapted for the 20 React lab questions.

## Requirements
- Node.js and npm installed

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed in the terminal (usually http://localhost:5173).

## Test a production build
```bash
npm run build
npm run preview
```

## Main files
- `src/App.jsx`: main component, form state, submit handler, result list, delete and reset.
- `src/index.css`: optional basic styles.
- `src/main.jsx`: React entry point.

## How to adapt it
1. Keep the `App` component and `useState` pattern.
2. Change `initialForm` and form fields for the current question.
3. Update `handleChange` if you add checkboxes, radio buttons, or special input types.
4. Replace `handleSubmit` with the application logic.
5. Replace the result list with the output needed for the question.
6. Remove fields and functions that are not needed.

## Important
This is a frontend starter template. It does not include a backend or external API by default.
For News, Dictionary, Recipe Finder, Book Finder, and live Currency Converter tasks, API integration may be needed depending on your lab's requirements. Never put private API keys directly in frontend code.
