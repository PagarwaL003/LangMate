
# LangMate

> **Connect. Learn. Grow.**

LangMate is a global language exchange platform that connects language learners from around the world. With real-time chat, video calls, and a vibrant community, LangMate makes it easy to practice languages, make friends, and immerse yourself in new cultures—all in a beautiful, modern interface.

---

## 🌟 What is LangMate?

LangMate is a full-stack web application designed to help users find language partners, chat in real time, and participate in 1-on-1 or group video calls. The platform features robust authentication, notifications, friend management, and a choice of 32 unique UI themes for a personalized experience.

---

## 🚀 Key Features

- 🌐 **Real-time Messaging** with Typing Indicators & Reactions
- 📹 **1-on-1 and Group Video Calls** with Screen Sharing & Recording
- 🔐 **JWT Authentication** & Protected Routes
- 🌍 **Language Exchange Platform** with 32 Unique UI Themes
- 🧠 **Global State Management** with Zustand
- 🚨 **Error Handling** (Frontend & Backend)
- 🚀 **Free Deployment**

---

## ⚡ Tech Stack

| Layer      | Technology                        |
|------------|------------------------------------|
| Frontend   | React, Vite, Tailwind CSS, TanStack Query |
| Backend    | Node.js, Express                  |
| Database   | MongoDB                           |
| State Mgmt | Zustand                           |
| Styling    | Tailwind CSS, DaisyUI                     |
| API Utils  | Axios                             |


---

## 📁 Project Structure

```
LangMate/
├── backend/
│   ├── config/           # Database and stream configuration
│   ├── controllers/      # Route controllers (auth, chat, user)
│   ├── middlewares/      # Express middlewares
│   ├── models/           # Mongoose models (user, friendRequest)
│   ├── routes/           # API route definitions
│   ├── package.json      # Backend dependencies
│   └── server.js         # Express server entry point
└── frontend/
|    └── chatapp/
|        ├── public/       # Static assets
|        ├── src/
|        │   ├── components/   # Reusable React components
|        │   ├── constants/    # App constants
|        │   ├── hooks/        # Custom React hooks
|        │   ├── lib/          # API and utility functions
|        │   ├── pages/        # Application pages
|        │   └── store/        # State management
|        ├── package.json      # Frontend dependencies
|        ├── tailwind.config.js
|        ├── vite.config.js
└── README.md              # Documentation
```

---

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB

### Backend Setup
```powershell
cd backend
npm install
# Configure your database in config/db.js
node server.js
```

### Frontend Setup
```powershell
cd frontend/chatapp
npm install
npm run dev
```

---

## 💡 Usage

- Access the frontend at `http://localhost:5173`
- The backend API runs on `http://localhost:3000` (or your configured port)
- Register, log in, add friends, and start chatting or video calling!

---

## Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. For major changes, open an issue first to discuss your ideas.
