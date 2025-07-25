# LangMate

LangMate is a full-stack chat application designed to connect users for language learning and social interaction. The project consists of a modern React frontend, providing real-time chat, authentication, notifications, and friend management features.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication (signup, login)
- Real-time video & chat functionality
- Friend requests and management
- Notifications
- Responsive and modern UI
- Theme selection

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Other:** Axios, PostCSS

## Project Structure
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
    └── chatapp/
        ├── public/       # Static assets
        ├── src/
        │   ├── components/   # Reusable React components
        │   ├── constants/    # App constants
        │   ├── hooks/        # Custom React hooks
        │   ├── lib/          # API and utility functions
        │   ├── pages/        # Application pages
        │   └── store/        # State management
        ├── package.json      # Frontend dependencies
        ├── tailwind.config.js
        ├── vite.config.js
        └── README.md         # Frontend-specific documentation
```

## Setup & Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB 

### Backend Setup
1. Navigate to the backend folder:
   ```powershell
   cd backend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Configure your database in `config/db.js`.
4. Start the server:
   ```powershell
   node server.js
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```powershell
   cd frontend/chatapp
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start the development server:
   ```powershell
   npm run dev
   ```

## Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. For major changes, open an issue first to discuss your ideas.

