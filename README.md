# My-Field-Project-

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# College Chatbot – React + Botpress

A smart and responsive chatbot built using **React.js** and **Botpress**, designed to enhance the user experience of a college website. It helps students, staff, and visitors by answering frequently asked questions, guiding through campus resources, and providing instant support.

Hosted live on **Netlify**, with continuous deployment from **GitHub**.

---

##  Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started (Local Development)](#getting-started-local-development)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Project Team](#project-team)
- [Support](#support)
- [Author](#author)



---

## 📖 About the Project

This chatbot provides automated assistance to users browsing a college website. It can:

- Answer questions about admissions, courses, fees, and more.
- Provide directions to departments and facilities.
- Help reduce the workload on human support staff.
- Be extended easily with new flows and knowledge bases.

It is embedded directly into the college site via an iframe (Botpress webchat).

---


## ✨ Features

- AI-powered chatbot with dynamic flow handling
- Embedded seamlessly into the college website
- Auto-deploy on GitHub push using Netlify
- Secure handling of sensitive data (via environment variables)
- Scalable and customizable for any college or university

---

## Tech Stack

| Technology | Description |
|------------|-------------|
| **React.js** | Front-end framework for building the web app |
| **Botpress Cloud** | Conversational AI engine for chatbot functionality |
| **Netlify** | Hosting and continuous deployment |
| **GitHub** | Source code management and version control |

---


## Prerequisites

Ensure the following tools are installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)  
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)  
- [Git](https://git-scm.com/)

---

## Getting Started (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/shifamanihar/My-Field-Project-.git
cd My-Field-Project-
````

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

### 4. Open in Your Browser

Visit: [http://localhost:5173](http://localhost:5173)

Or press `o` in the terminal to open automatically.

---

## Project Structure

```
MY-FIELD-PROJECT-/
src/
├── App.jsx
├── App.css
├── Home.jsx
├── index.css
├── main.jsx
├── assets/
│
├── Chatpage/
│   ├── Chatpage.jsx
│   ├── Chatpage.css
│
├── ContactPage/
│   ├── ContactPage.jsx
│   ├── ContactPage.css
│
├── EnquiryForm/
│   ├── EnquiryForm.jsx
│   ├── EnquiryForm.css
│
├── Footer/
│   ├── Footer.jsx
│   ├── Footer.css
│
├── Header/
│   ├── Header.jsx
│   ├── Header.css
│
├── HeroSection/
│   ├── HeroSection.jsx
│   ├── HeroSection.css
│
├── LoginPage/
│   ├── LoginPage.jsx
│   ├── LoginPage.css
|
├── Pages/
│   ├── AboutPage/
│   │   ├── AboutPage.jsx
│   │   ├── AboutPage.css
│
│   ├── Courses/
│   │   ├── Courses.jsx
│   │   ├── Courses.css
│
│   ├── ProfilePage/
│   │   ├── ProfilePage.jsx
│   │   ├── ProfilePage.css
│
│   ├── Testimonials.jsx
│   ├── Testimonials.css
│
├── .gitignore
├── README.md
├── package.json
├── vite.config.js
```

---

## Available Scripts

| Script            | Purpose                                |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start the development server           |
| `npm run build`   | Build the app for production           |
| `npm run preview` | Preview the production build locally   |
| `npm run lint`    | Run ESLint on all source files         |
| `npm run format`  | Format files using Prettier (optional) |


## Deployment

This project is deployed on **Netlify**, a popular platform for hosting modern web applications with continuous deployment.

### Deployment Steps

1. Fork or Clone the Repository


git clone https://github.com/shifamanihar/My-Field-Project-.git
cd My-Field-Project-


3. Run the Project


npm run dev
```

Deploy on Netlify

Go to https://app.netlify.com

Log in with your GitHub account

Click “Add new site” → “Import from GitHub”

Select your repository (My-Field-Project-)

Configure the build settings (if not auto-detected):

Build command: npm run build

Publish directory: build

Click Deploy Site


## Project Team

Owner: Shifa Manihar
Team: A group of 3 passionate students building a chatbot for the college website.

| **Name**            | **GitHub Profile**                                    | **Responsibilities**                                   |
| ------------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| **Shifa Manihar**   | [@shifamanihar](https://github.com/shifamanihar)      | Frontend Development, UI/UX Design, Research           |
| **Vikas Prajapati** | [@vikasprajapati](https://github.com/vikasprajapati3) | Frontend Development, Deployment, Layout Design        |
| **Yogesh Chavan**   | [@yogeshchavan](https://github.com/yogeshchavan)      | Component Logic, Frontend Development, Data Collection |


## Support

For issues, bugs, or suggestions:

Email: [vikasrjc7@gmail.com](mailto:vikasrjc7@gmail.com)
Or open an issue on GitHub.

---


## Author

**Vikas Prajapati**
 · IT Learner · Tech Community Contributor

Email: [vikasrjc7@gmail.com](mailto:vikasrjc7@gmail.com)
GitHub: [github.com/vikasprajapati3](https://github.com/vikasprajapati3)
LinkedIn: [linkedin.com/in/vikasprajapati3](https://linkedin.com/in/vikasprajapati3)
 

