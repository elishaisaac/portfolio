# Elisha Portfolio

A responsive personal portfolio built with React and Vite, featuring a clean modern design, light/dark mode, and a Web3Forms-powered contact form.

## Features

* Responsive design for desktop, tablet, and mobile
* Light and dark mode
* Mobile navigation
* Projects and skills sections
* Contact form powered by Web3Forms
* Simple, clean developer-focused UI

## Run Locally

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at the local URL shown by Vite.

## Web3Forms Setup

1. Create a Web3Forms access key at [Web3Forms](https://web3forms.com/).

2. Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

3. Restart the Vite development server.

4. Submit the contact form and check the email address connected to your Web3Forms account.

The Web3Forms access key is designed to be used in client-side applications.

> **Note:** Do not commit your `.env` file. The `.env.example` file is included as a template.

## Tech Stack

* React
* Vite
* JavaScript
* CSS
* Web3Forms

## Project Structure

```text
src/
├── components/
├── pages/
├── App.jsx
├── App.css
└── main.jsx
```

## License

This project is for personal portfolio use.
