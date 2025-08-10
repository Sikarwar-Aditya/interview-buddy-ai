<div align="center">

  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="Vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="Firebase" />
  </div>

  <h2 align="center">Interview Buddy – AI-Powered Mock Interview Platform</h2>
  <p align="center">Prepare for technical, behavioral, and role-specific interviews with AI voice agents and instant feedback.</p>

</div>

---

## 📑 Table of Contents

1. 🤖 [Introduction](#introduction)  
2. 🛠 [Tech Stack](#tech-stack)  
3. ✨ [Features](#features)  
4. 🚀 [Quick Start](#quick-start)  

---

## 🤖 Introduction

**Interview Buddy** is an AI-driven platform designed to help you get ready for **any type of interview** — whether it’s for **technical roles** like Frontend, Backend, Full Stack, UI/UX, or SDE, or **non-technical positions** in management, sales, marketing, and more.

It’s built with **Next.js** for both the frontend and backend, **Firebase** for secure authentication and data storage, and **TailwindCSS** for a clean, responsive UI. By combining **Vapi voice technology** with **Google Gemini**, it offers realistic, conversational mock interviews and **instant AI-powered feedback**.

From **coding challenges** to **behavioral questions** and **situational role-play**, Interview Buddy adapts to your goals — making it your all-in-one personal interview coach.

---

## 🛠 Tech Stack

- **Next.js** – Frontend + backend framework  
- **Firebase** – Authentication & database  
- **Tailwind CSS** – Styling & responsive design  
- **Vapi AI** – Voice-powered AI interviews  
- **shadcn/ui** – Prebuilt UI components  
- **Google Gemini** – AI question generation  
- **Zod** – Schema validation  

---

## ✨ Features

🔐 **Secure Authentication** – Sign up and log in with Firebase’s email/password authentication for a smooth onboarding.  

🎯 **Custom Interview Creation** – Choose your role, skill focus, and difficulty to generate tailored mock interviews with Vapi and Google Gemini.  

🧠 **Instant AI Feedback** – Get real-time, constructive feedback on both technical accuracy and communication style.  

🎨 **Sleek & Modern UI** – Designed with TailwindCSS for a visually appealing and user-friendly experience.  

🎙 **Voice-Powered Sessions** – Practice with an AI voice interviewer for a realistic, interactive environment.  

📊 **Personal Dashboard** – Track your progress, review transcripts, and manage past interviews easily.  

📱 **Responsive Across Devices** – Works flawlessly on desktop, tablet, and mobile for anytime practice.  

⚙️ **Scalable & Maintainable Code** – Clean architecture for easy updates and future improvements.  

---

## 🚀 Quick Start

Follow these steps to run the project locally.

### **Prerequisites**  
Make sure you have installed:  
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/)  

---

### **1. Clone the Repository**
```bash
git clone https://github.com/Sikarwar-Aditya/interview-buddy-ai.git 
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Replace the placeholder values with your actual **[Firebase](https://firebase.google.com/)**, **[Vapi](https://vapi.ai/?utm_source=youtube&utm_medium=video&utm_campaign=jsmastery_recruitingpractice&utm_content=paid_partner&utm_term=recruitingpractice)** credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.





