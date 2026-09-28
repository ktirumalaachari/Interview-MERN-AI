# 🤖 InterviewIQ.AI — Next-Gen AI Mock Interview Platform

<p align="center">
  <img src="client/public/img1.png" alt="InterviewIQ.AI Logo" width="100" height="100" />
</p>

<p align="center">
  <b>Master Your Next Technical & HR Interview with Adaptive AI Intelligence, Real-Time Voice Simulation, and Deep Analytics.</b>
</p>

<p align="center">
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/OpenRouter-GPT--4o--mini-6366F1?style=for-the-badge&logo=openai&logoColor=white" alt="OpenRouter" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Razorpay-Payments-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF" alt="Razorpay" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Firebase-Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase Auth" /></a>
</p>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack & Tooling](#-tech-stack--tooling)
- [System Architecture](#-system-architecture)
- [Application Flow & AI Engine](#-application-flow--ai-engine)
- [Environment Variables Setup Guide (All 7 Credentials)](#-environment-variables-setup-guide)
- [Quick Start & Installation](#-quick-start--installation)
- [API Endpoints Reference](#-api-endpoints-reference)
- [Database Models & Schema](#-database-models--schema)
- [Credits & Monetization System](#-credits--monetization-system)
- [Project Directory Structure](#-project-directory-structure)
- [Personalization & Customization Guide](#-personalization--customization-guide)
- [Contributing & License](#-license)
- [Author](#-author)

---

## 💡 Overview

**InterviewIQ.AI** is an end-to-end, enterprise-grade AI-powered mock interview web application built on the **MERN** (MongoDB, Express, React, Node.js) stack. It bridges the gap between candidate preparation and real-world hiring standards:

1. **Upload Resume (PDF):** The platform parses text with PDF.js and extracts candidate skills, experience level, target role, and past projects via GPT-4o-mini.
2. **Dynamic Questioning:** Questions dynamically adapt to the candidate's chosen domain (Technical vs. HR) with progressive difficulty (`Easy` ➔ `Medium` ➔ `Hard`).
3. **Voice Simulation:** Native browser Web Speech Synthesis speaks questions aloud through animated avatars (male/female), while Web Speech Recognition captures spoken candidate responses under realistic countdown pressure.
4. **Tri-Metric AI Evaluation:** Evaluates answers across **Confidence**, **Communication**, and **Correctness** (0–10 scale), generating instant feedback and comprehensive downloadable PDF reports with Recharts analytics.
5. **Credit Economy & Payments:** Built-in credit billing with Razorpay payment gateway integration and Google OAuth session management.

---

## ✨ Key Features

| Category | Highlights |
|---|---|
| 🎙️ **Voice-Assisted Simulation** | Browser Speech Synthesis (interviewer voice) + Speech Recognition (spoken answers) with male/female video avatars. |
| 📄 **Smart Resume Extraction** | Seamless PDF parsing via PDF.js; automatic extraction of tech stack, experience, and past projects using AI. |
| 📈 **Progressive Difficulty** | 5 structured questions ranging from foundational concepts to advanced problem-solving scenarios. |
| ⏱️ **Timer-Based Pressure** | Configurable countdown timer per question with automated submission upon expiry. |
| 🧠 **Multi-Dimensional AI Scoring** | Granular feedback scored on Confidence, Communication, and Technical Correctness. |
| 📊 **Interactive Analytics** | Real-time score cards, circular progress meters, Recharts performance trend graphs, and full historical log. |
| 📑 **PDF Report Generator** | Instant downloadable professional PDF summaries generated client-side using `jspdf` and `jspdf-autotable`. |
| 💳 **Razorpay Credit System** | Credit-gated interview creation with instant credit purchase using Razorpay Web Checkout. |
| 🔐 **Secure Google OAuth** | One-tap Google Sign-In via Firebase Auth coupled with backend HTTP-only JWT cookies. |

---

## 🧰 Tech Stack & Tooling

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,redux,tailwind,nodejs,express,mongodb,firebase,postman,git,github,vscode" alt="Tech Stack Icons" />
</p>

### Frontend Layer
- **Framework:** [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/) (Fast Refresh & modern ESM build)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) (`@reduxjs/toolkit`, `react-redux`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) (Framer Motion v13)
- **Visualizations:** [Recharts](https://recharts.org/) & [React Circular Progressbar](https://www.npmjs.com/package/react-circular-progressbar)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, Bootstrap, Heroicons)
- **PDF Generation:** [jsPDF](https://github.com/parallax/jsPDF) & [jsPDF AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable)
- **HTTP Client:** [Axios](https://axios-http.com/)

### Backend Layer
- **Runtime:** [Node.js](https://nodejs.org/) (ES Modules)
- **Framework:** [Express.js 5](https://expressjs.com/)
- **Database ORM:** [Mongoose 9](https://mongoosejs.com/)
- **Authentication:** [JSON Web Token (JWT)](https://jwt.io/) + [Cookie-Parser](https://www.npmjs.com/package/cookie-parser)
- **File Parsing:** [Multer](https://github.com/expressjs/multer) + [PDF.js](https://mozilla.github.io/pdf.js/) (`pdfjs-dist`)
- **CORS & Security:** [CORS](https://www.npmjs.com/package/cors) with credentials enabled

### AI, Cloud & Payment Gateways
- **AI Gateway:** [OpenRouter API](https://openrouter.ai/) (Accessing `openai/gpt-4o-mini`)
- **Database Cloud:** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Authentication Provider:** [Google Firebase Authentication](https://firebase.google.com/)
- **Payment Processing:** [Razorpay Checkout SDK](https://razorpay.com/)
- **Voice APIs:** Native Browser `SpeechRecognition` & `SpeechSynthesis` (Web Speech API)

---

## 🏗️ System Architecture

```
┌────────────────────────────────────────────────────────┐
│               Client (React 19 + Vite)                 │
│                                                        │
│  • Google Sign-In (Firebase)   • Web Speech API        │
│  • Redux Toolkit State         • Motion Animations     │
│  • Resume Upload (PDF)         • jsPDF Report Export   │
│  • Razorpay Checkout Modal     • Recharts Analytics    │
└───────────────────────────┬────────────────────────────┘
                            │ Axios (withCredentials: true)
                            ▼
┌────────────────────────────────────────────────────────┐
│             Server (Express 5 + Node.js)               │
│                                                        │
│  • JWT Cookie Auth Middleware  • Resume Text Extractor │
│  • Multer File Handler         • Score Calculator      │
│  • Razorpay HMAC Signature Verifier                    │
└───────────────┬────────────────────────┬───────────────┘
                │                        │
       Mongoose │                        │ REST Requests
                ▼                        ▼
┌───────────────────────────┐    ┌───────────────────────┐
│      MongoDB Atlas        │    │    External APIs      │
│                           │    │                       │
│  • Users (Credits, Info)  │    │  • OpenRouter         │
│  • Interviews (Q&A/Scores)│    │    (GPT-4o-mini)      │
│  • Payments (Orders)      │    │  • Razorpay Payment   │
└───────────────────────────┘    └───────────────────────┘
```

---

## 🔄 Application Flow & AI Engine

### 1. User Authentication
User initiates Google login on client. Firebase handles OAuth popup and returns credentials. Frontend forwards profile data to `POST /api/auth/google`. Server matches or creates the user in MongoDB, generates an HTTP-only JWT cookie (`token`), and returns profile state to Redux.

### 2. Resume Ingestion & Parsing
When uploading a resume:
1. Multer intercepts the `.pdf` in memory.
2. `pdfjs-dist` iterates through all pages and aggregates raw text.
3. The server prompts OpenRouter AI to parse skills, roles, and experience into structured JSON:
```json
{
  "role": "Frontend Developer",
  "experience": "2 years",
  "projects": ["E-Commerce Web App", "Real-Time Chat"],
  "skills": ["React", "JavaScript", "Tailwind CSS", "Redux"]
}
```

### 3. Progressive Question Generation
Before generation, the server verifies the user has at least **50 credits**. Upon verification, 50 credits are deducted. OpenRouter AI generates 5 tailored questions:
- **Q1 & Q2:** Foundational & conceptual (`Easy`)
- **Q3 & Q4:** Practical implementation & edge cases (`Medium`)
- **Q5:** Architectural, performance, or system design (`Hard`)

### 4. Live Interview Simulation
- Questions and feedback are read aloud via `window.speechSynthesis`.
- Answers are collected either via voice dictation (`window.SpeechRecognition`) or text typing.
- A circular countdown timer ticks down; when time expires, the answer is auto-submitted.

### 5. Tri-Metric Evaluation
Each answer is evaluated by OpenRouter against the question context:
$$\text{Score} = \text{round}\left(\frac{\text{Confidence} + \text{Communication} + \text{Correctness}}{3}\right)$$
Scores and personalized feedback are immediately recorded in MongoDB.

---

## 🔐 Environment Variables Setup Guide

To run InterviewIQ.AI successfully, you need **7 key credentials** across your backend (`server/.env`) and frontend (`client/.env`). Follow this step-by-step walkthrough to generate and add each key:

### Summary Table

| # | Variable Name | Location | Provider / Service | Direct Resource Link |
|:---:|---|---|---|---|
| **1** | `PORT` | `server/.env` | Local Server Port | N/A (Set to `8000`) |
| **2** | `MONGODB_URI` | `server/.env` | MongoDB Atlas | [cloud.mongodb.com](https://www.mongodb.com/cloud/atlas) |
| **3** | `JWT_SECRET` | `server/.env` | Cryptographic Token Secret | [randomkeygen.com](https://randomkeygen.com/) |
| **4** | `OPEN_ROUTER_APIKEY` | `server/.env` | OpenRouter (GPT-4o-mini) | [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys) |
| **5** | `RAZORPAY_KEY_ID` | `server/.env` | Razorpay Dashboard | [dashboard.razorpay.com](https://dashboard.razorpay.com/#/app/keys) |
| **6** | `RAZORPAY_KEY_SECRET` | `server/.env` | Razorpay Dashboard | [dashboard.razorpay.com](https://dashboard.razorpay.com/#/app/keys) |
| **7** | `VITE_FIREBASE_APIKEY` | `client/.env` | Google Firebase Console | [console.firebase.google.com](https://console.firebase.google.com/) |
| **8** | `VITE_RAZORPAY_KEY_ID` | `client/.env` | Razorpay Dashboard | [dashboard.razorpay.com](https://dashboard.razorpay.com/#/app/keys) (Same as #5) |

---

### Step-by-Step Instructions to Obtain Each Variable

#### 1️⃣ `MONGODB_URI` (MongoDB Database)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and Sign Up / Log In.
2. Click **Create Deployment** and choose the **M0 Free Tier** cluster.
3. Under **Security ➔ Database Access**:
   - Click **Add New Database User**.
   - Select **Password Authentication**, set a Username and Password, and assign the `readWriteAnyDatabase` role.
4. Under **Security ➔ Network Access**:
   - Click **Add IP Address** ➔ Select **Allow Access from Anywhere** (`0.0.0.0/0`) ➔ Confirm.
5. Under **Deployment ➔ Database ➔ Clusters**:
   - Click **Connect** ➔ Choose **Drivers** (Node.js).
   - Copy the connection string format:
     ```
     mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/interview_ai?retryWrites=true&w=majority
     ```
   - Replace `<username>` and `<password>` with your database user credentials.

#### 2️⃣ `JWT_SECRET` (JWT Signing Key)
1. Generate any high-entropy random string (at least 32 characters).
2. You can generate one instantly in your terminal:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
   Or generate one from [RandomKeygen](https://randomkeygen.com/) (CodeIgniter or 256-bit WEP key).

#### 3️⃣ `OPEN_ROUTER_APIKEY` (AI Engine)
1. Visit [OpenRouter](https://openrouter.ai/) and sign in with Google or GitHub.
2. Navigate directly to [OpenRouter Keys](https://openrouter.ai/settings/keys).
3. Click **Create Key**.
4. Give your key a name (e.g. `Interview-AI`) and click **Create**.
5. Copy the generated key (starts with `sk-or-v1-...`).
6. *(Ensure your OpenRouter account has available credits to query `openai/gpt-4o-mini`)*.

#### 4️⃣ & 5️⃣ `RAZORPAY_KEY_ID` & `RAZORPAY_KEY_SECRET`
1. Go to [Razorpay](https://razorpay.com/) and register or sign in to your dashboard.
2. In the top navigation bar, toggle the environment switch from **Live Mode** to **Test Mode**.
3. In the left sidebar, navigate to **Account & Settings** ➔ **API Keys** (or open [Razorpay API Keys](https://dashboard.razorpay.com/#/app/keys)).
4. Click **Generate Test Key**.
5. A modal will display:
   - **Key ID** (e.g., `rzp_test_xxxxxxxxxxxxxx`) ➔ used as `RAZORPAY_KEY_ID` in `server/.env` and `VITE_RAZORPAY_KEY_ID` in `client/.env`.
   - **Key Secret** (e.g., `xxxxxxxxxxxxxxxxxxxxxxxx`) ➔ used as `RAZORPAY_KEY_SECRET` in `server/.env`.
   > ⚠️ **Important:** Razorpay displays the secret only once. Copy and store it immediately!

#### 6️⃣ `VITE_FIREBASE_APIKEY` (Google Authentication)
1. Visit the [Firebase Console](https://console.firebase.google.com/) and click **Add Project**.
2. Give your project a name (e.g., `my-interview-ai`) and continue to create the project.
3. In your project overview, click the **Web icon (`</>`)** to register a web app.
4. Give the app a nickname and click **Register App**.
5. Copy the `apiKey` property from the generated `firebaseConfig` snippet.
6. Enable Google Login:
   - In the left sidebar, go to **Build ➔ Authentication**.
   - Click **Get Started** ➔ Go to the **Sign-in method** tab.
   - Select **Google** ➔ Enable the toggle ➔ Set your support email ➔ Click **Save**.
7. *(Optional & Recommended)*: If you want full control over your Firebase project, replace the entire `firebaseConfig` object inside [client/src/utils/firebase.js](file:///d:/Mobile%20Devices/Interview-MERN-AI-main/client/src/utils/firebase.js) with your newly created project details!

---

### `.env` File Templates

Create `server/.env`:
```env
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/interview_ai?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here_min_32_characters
OPEN_ROUTER_APIKEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx
```

Create `client/.env`:
```env
VITE_FIREBASE_APIKEY=AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxxx
```

---

## 🚀 Quick Start & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or v20.x+ recommended)
- [npm](https://www.npmjs.com/) (v9.x+)
- Active MongoDB Atlas instance

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Interview-MERN-AI.git
cd Interview-MERN-AI
```

### 2. Configure Backend Server
```bash
cd server
npm install
```
Create `server/.env` based on `server/.env.example` and populate your credentials.

Start the backend development server:
```bash
npm run dev
```
The server will boot up at `http://localhost:8000`.

### 3. Configure Frontend Client
Open a second terminal window:
```bash
cd client
npm install
```
Create `client/.env` based on `client/.env.example` and add your keys.

Start the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 🔌 API Endpoints Reference

Base URL: `http://localhost:8000`

### 🔑 Authentication (`/api/auth`)
| Method | Endpoint | Description | Protected |
|---|---|---|:---:|
| `POST` | `/api/auth/google` | Verify Google profile and set JWT auth cookie | No |
| `GET` | `/api/auth/logout` | Clear session cookie and invalidate auth state | No |

### 👤 User Operations (`/api/user`)
| Method | Endpoint | Description | Protected |
|---|---|---|:---:|
| `GET` | `/api/user/current-user` | Retrieve authenticated user profile & credit balance | Yes |

### 🎯 Interviews (`/api/interview`)
| Method | Endpoint | Description | Protected |
|---|---|---|:---:|
| `POST` | `/api/interview/resume` | Ingest PDF resume and extract candidate context | Yes |
| `POST` | `/api/interview/generate-questions` | Generate 5 AI interview questions (deducts 50 credits) | Yes |
| `POST` | `/api/interview/submit-answer` | Submit an answer and get AI evaluation metrics | Yes |
| `POST` | `/api/interview/finish` | Finalize session and calculate aggregate report stats | Yes |
| `GET` | `/api/interview/get-interview` | Fetch interview history list for the user | Yes |
| `GET` | `/api/interview/report/:id` | Fetch detailed report data for a specific interview | Yes |

### 💳 Payments (`/api/payment`)
| Method | Endpoint | Description | Protected |
|---|---|---|:---:|
| `POST` | `/api/payment/order` | Create a new Razorpay checkout order | Yes |
| `POST` | `/api/payment/verify` | Verify Razorpay HMAC SHA256 signature and add credits | Yes |

---

## 🗄️ Database Models & Schema

```
┌─────────────────────────────────┐       ┌─────────────────────────────────┐
│              User               │       │             Payment             │
├─────────────────────────────────┤       ├─────────────────────────────────┤
│ _id: ObjectId                   │       │ _id: ObjectId                   │
│ name: String                    │◄──┐   │ userId: ObjectId (ref: User)    │
│ email: String (unique)          │   └───┤ planId: String                  │
│ credits: Number (default: 100)  │       │ amount: Number                  │
│ createdAt: Date                 │       │ credits: Number                 │
│ updatedAt: Date                 │       │ razorpayOrderId: String         │
└─────────────────────────────────┘       │ razorpayPaymentId: String       │
                 ▲                        │ status: String ('pending'/'paid')
                 │                        │ createdAt: Date                 │
                 │                        └─────────────────────────────────┘
┌────────────────┴────────────────┐
│            Interview            │
├─────────────────────────────────┤
│ _id: ObjectId                   │
│ userId: ObjectId (ref: User)    │
│ role: String                    │
│ experience: String              │
│ mode: String ('hr' | 'tech')    │
│ resumeText: String              │
│ finalScore: Number              │
│ status: String                  │
│ questions: [                    │
│   {                             │
│     question: String,           │
│     difficulty: String,         │
│     timeLimit: Number,          │
│     answer: String,             │
│     feedback: String,           │
│     score: Number,              │
│     confidence: Number,         │
│     communication: Number,      │
│     correctness: Number         │
│   }                             │
│ ]                               │
│ createdAt: Date                 │
└─────────────────────────────────┘
```

---

## 💳 Credits & Monetization System

Every generated interview consumes **50 credits**. Users can top up credits using Razorpay:

| Tier | Price | Credits Included | Interviews Possible | Cost Per Interview |
|---|:---:|:---:|:---:|:---:|
| **Free Welcome** | ₹0 | 100 Credits | 2 Interviews | Free |
| **Starter Pack** | ₹100 | 150 Credits | 3 Interviews | ₹33.3 |
| **Pro Pack** | ₹500 | 650 Credits | 13 Interviews | ₹38.4 *(Best Value)* |

---

## 📁 Project Directory Structure

```
Interview-MERN-AI/
├── client/                          # React + Vite Frontend
│   ├── public/                      # Static assets & favicon
│   │   └── img1.png
│   ├── src/
│   │   ├── assets/                  # Graphics & AI interviewer videos
│   │   │   ├── Videos/
│   │   │   │   ├── male-ai.mp4
│   │   │   │   └── female-ai.mp4
│   │   │   └── ...
│   │   ├── components/              # Modular UI components
│   │   │   ├── Navbar.jsx           # Top header & credits modal
│   │   │   ├── Footer.jsx           # Clean branding footer
│   │   │   ├── AuthModel.jsx        # Login overlay modal
│   │   │   ├── Step1SetUp.jsx       # Role & resume setup
│   │   │   ├── Step2Interview.jsx   # Live voice interview interface
│   │   │   ├── Step3Report.jsx      # Scoring, charts & PDF exporter
│   │   │   └── Timer.jsx            # Countdown timer widget
│   │   ├── pages/                   # Application views
│   │   │   ├── Home.jsx             # Landing page
│   │   │   ├── Auth.jsx             # Google authentication view
│   │   │   ├── InterviewPage.jsx    # Interview flow controller
│   │   │   ├── InterviewHistory.jsx # Past interview records
│   │   │   ├── InterviewReport.jsx  # Single session report
│   │   │   └── Pricing.jsx          # Credit purchase plans
│   │   ├── redux/                   # Redux Toolkit store & slices
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   ├── utils/                   # Firebase initialization
│   │   │   └── firebase.js
│   │   ├── App.jsx                  # Route definitions & base URL
│   │   └── main.jsx                 # Client entry point
│   ├── .env.example                 # Frontend env template
│   ├── package.json
│   └── vite.config.js
│
├── server/                          # Express.js REST API Backend
│   ├── config/                      # Database & JWT helpers
│   │   ├── connectDB.js             # Mongoose connection
│   │   └── token.js                 # JWT cookie generator
│   ├── controllers/                 # Route logic controllers
│   │   ├── auth.controller.js
│   │   ├── interview.controller.js
│   │   ├── payment.controller.js
│   │   └── user.controller.js
│   ├── middlewares/                 # Express middlewares
│   │   ├── auth.middleware.js       # JWT cookie authentication
│   │   └── multer.js                # In-memory PDF upload
│   ├── models/                      # Mongoose data schemas
│   │   ├── user.model.js
│   │   ├── interview.model.js
│   │   └── payment.model.js
│   ├── routes/                      # API route definitions
│   │   ├── auth.route.js
│   │   ├── interview.route.js
│   │   ├── payment.route.js
│   │   └── user.route.js
│   ├── services/                    # 3rd party service abstractions
│   │   ├── openRouter.service.js    # GPT-4o-mini prompt engineering
│   │   └── razorpay.service.js      # Razorpay client instance
│   ├── .env.example                 # Backend env template
│   ├── index.js                     # Server entry point
│   └── package.json
│
└── README.md                        # Documentation
```

---

## 🎨 Personalization & Customization Guide

When cloning this project for personal showcase or deployment, make sure to customize the following files:

| Target Item | File Location | Line(s) | What to Change |
|---|---|---|---|
| **App Title** | `client/index.html` | Line 7 | Change `<title>InterviewIQ.ai</title>` to your custom app name |
| **App Favicon** | `client/index.html` | Line 5 | Replace `/img1.png` with your personal icon |
| **Navbar Brand** | `client/src/components/Navbar.jsx` | Line 45 | Change `InterviewIQ.AI` to your brand name |
| **Footer Info** | `client/src/components/Footer.jsx` | Line 10–13 | Update brand name, description, and social media/portfolio links |
| **Auth Screen Brand** | `client/src/pages/Auth.jsx` | Line 54 | Update brand title on the login card |
| **Razorpay Brand** | `client/src/pages/Pricing.jsx` | Line 72 | Change checkout title (`InterviewIQ.AI`) |
| **Firebase Project** | `client/src/utils/firebase.js` | Lines 4–11 | Replace hardcoded config with your own Firebase project credentials |
| **Backend Base URL** | `client/src/App.jsx` | Line 13 | Change `http://localhost:8000` to your deployed backend URL |
| **CORS Origin** | `server/index.js` | Line 18 | Change `http://localhost:5173` to your deployed frontend domain |
| **Author & GitHub** | `README.md` | Bottom | Replace Aryan Nair info with your Name, GitHub, and LinkedIn |

---

## 📜 License

This project is open-source under the [MIT License](LICENSE). Feel free to use, modify, and distribute with attribution.

---

## 👨‍💻 Author

**K Tirumala Achari**  
Full Stack Developer | Aspiring Software Engineer

<a href="mailto:ktirumalachari@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/>
</a>
<a href="https://www.linkedin.com/in/k-tirumala-achari-921106307/">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
</a>
<a href="https://github.com/ktirumalaachari">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>
<a href="https://www.ktirumalaachari.me">
  <img src="https://img.shields.io/badge/Portfolio-FF6B35?style=for-the-badge&logo=firefox&logoColor=white" alt="Portfolio"/>
</a>
<br/><br/>

> _"Passionate about building impactful, user-centric solutions through technology,_
> _committed to continuous learning and innovation."_

**⭐ If you found this project helpful or inspiring, please give it a star! ⭐**

<br/>
Made with ❤️ by **K Tirumala Achari**

[![GitHub](https://img.shields.io/badge/GitHub-ktirumalaachari-blue?style=flat&logo=github)](https://github.com/ktirumalaachari)

</div>