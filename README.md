# 🌐 STREAMIFY

**A real-time language learning platform connecting learners with native speakers worldwide through chat and video calls.**

Connect with language partners, practice conversations, and achieve fluency through real-world interactions.

---

## ✨ What It Does

STREAMIFY solves a simple problem: **finding real people to practice languages with**.

- 🤝 **Smart Matching** - Find language partners based on what you speak and what you're learning
- 💬 **Real-time Chat** - Instant messaging powered by Stream Chat
- 📹 **Video Calls** - HD video conversations for authentic practice
- 🌍 **15+ Languages** - English, Spanish, French, German, Mandarin, Japanese, Korean, Hindi, and more
- 🎨 **32 Themes** - Customize your experience with beautiful themes

---

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- [Stream.io account](https://getstream.io) (free tier)

### Installation

**1. Clone & Install**
```bash
git clone https://github.com/yourusername/streamify.git
cd streamify

# Backend
cd Backend
npm install

# Frontend
cd ../Frontend
npm install
```

**2. Environment Setup**

Create `Backend/.env`:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
STEAM_API_KEY=your_stream_api_key
STEAM_API_SECRET=your_stream_api_secret
PORT=3000
```

Create `Frontend/.env`:
```env
VITE_BACKEND_URL=http://localhost:3000
VITE_STREAM_API_KEY=your_stream_api_key
```

**3. Run**
```bash
# Backend (in Backend folder)
npm run dev

# Frontend (in Frontend folder)
npm run dev
```

Visit `http://localhost:5173` 🎉

---

## 🛠 Built With

**Frontend:** React 19 • Vite • TailwindCSS • DaisyUI • Zustand • React Query
**Backend:** Node.js • Express • MongoDB • Mongoose
**Real-time:** Stream.io (Chat & Video SDKs)
**Auth:** JWT • bcryptjs • HTTP-only cookies
**Deployment:** Vercel

---

## 🏗 Architecture

```
React Frontend (Vite + TailwindCSS)
           ↓
   REST API (Express.js)
      ↙          ↘
MongoDB        Stream.io
(Users, Friends)  (Chat, Video)
```

**Key Design Decisions:**
- **MVC Pattern** - Clean separation of concerns
- **JWT Auth** - Secure authentication with HTTP-only cookies
- **React Query** - Smart caching and state management
- **Stream.io Integration** - Production-grade real-time infrastructure

---

## 📁 Project Structure

```
STREAMIFY/
├── Backend/
│   └── src/
│       ├── controllers/    # Business logic
│       ├── models/         # MongoDB schemas
│       ├── routes/         # API endpoints
│       ├── middleware/     # Auth middleware
│       └── lib/            # DB & Stream.io setup
│
└── Frontend/
    └── src/
        ├── components/     # Reusable UI components
        ├── pages/          # Route pages
        ├── hooks/          # Custom React hooks
        ├── lib/            # API client
        └── store/          # Global state (Zustand)
```

---

## 🔐 Security Features

- Password hashing with bcryptjs (10 salt rounds)
- JWT tokens with 1-day expiration
- HTTP-only cookies (XSS protection)
- Protected routes with middleware validation
- Email validation and input sanitization
- CORS configuration for cross-origin security

---

## 🎯 Key Features

### User Management
- Secure registration and authentication
- Profile onboarding with language preferences
- Random avatar generation

### Social Features
- Send/accept friend requests
- Smart user recommendations (filters existing friends)
- View friends with language details and location

### Communication
- **Chat:** Direct messaging, typing indicators, message history
- **Video:** HD video calls, screen controls, shareable call links
- Real-time updates powered by Stream.io

### Customization
- 32 beautiful themes (Light, Dark, Synthwave, Dracula, Nord, etc.)
- Persistent theme preferences
- Fully responsive design (mobile, tablet, desktop)

---

## 🚧 Technical Challenges Solved

1. **Dual Database Sync** - Users exist in both MongoDB (app data) and Stream.io (chat/video). Auto-sync with `upsertStreamUser`.
2. **Friend Relationships** - Bidirectional friend management with edge case handling (duplicates, self-requests).
3. **State Management** - React Query caching + Zustand for optimal performance and UX.
4. **Security** - Multi-layer approach with JWT, bcryptjs, HTTP-only cookies, and protected routes.

---

## 📦 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB connection string | ✅ |
| `JWT_SECRET_KEY` | JWT signing secret | ✅ |
| `STEAM_API_KEY` | Stream.io API key | ✅ |
| `STEAM_API_SECRET` | Stream.io API secret | ✅ |
| `VITE_BACKEND_URL` | Backend API URL (frontend) | ✅ |
| `VITE_STREAM_API_KEY` | Stream.io key (frontend) | ✅ |

Get Stream.io credentials at [getstream.io/dashboard](https://getstream.io/dashboard)

---

## 🤝 Contributing

Contributions welcome!

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m "Add amazing feature"`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use this project for learning or your own portfolio!

---

## 🙏 Credits

Built with [Stream.io](https://getstream.io) • [DaisyUI](https://daisyui.com) • [Lucide Icons](https://lucide.dev)

---

<div align="center">

**Built with ❤️ for language learners**

⭐ Star this repo if you find it useful!

</div>
