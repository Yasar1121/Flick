# 🎬 Flick

**Flick** is a sleek and modern movie and TV show discovery application built with **React**, powered by **The Movie Database (TMDB)** API. It offers users an immersive experience to explore trending content, top-rated shows, and similar titles — all in one clean UI.

---

## 🌟 Features

- 🔍 **Search** for movies and TV shows
- 🧭 **Browse** trending, upcoming, top-rated content
- 🎞️ **View details** of movies/TV shows including:
  - Trailers
  - Cast
  - Similar recommendations
- 🧠 **Smart UI/UX** with loading skeletons and lazy-loaded content
- 📱 **Responsive design** for all screen sizes

---

## 🚀 Live Demo

> https://flick-rosy.vercel.app/

---

## 🛠️ Tech Stack

| Frontend      | Description              |
| ------------- | ------------------------ |
| React         | Core JavaScript library  |
| React Router  | For client-side routing  |
| Axios / Fetch | API requests to TMDB     |
| SCSS / CSS    | For custom styling       |
| TMDB API      | Movie & TV data provider |

---

## 🔗 TMDB API Info

All data in this app is fetched from the [TMDB API](https://www.themoviedb.org/documentation/api). You’ll need an API key to run the app locally.

---

## 📂 Folder Structure

```
flick/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level views (Home, Details, etc.)
│   ├── hooks/            # Custom hooks (e.g., useFetch)
│   ├── utils/            # Utility functions
│   ├── App.js
│   └── main.jsx
└── README.md
```

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/flick.git
cd flick
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### 4. Run the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📝 To-Do

- [ ] Add light/dark mode toggle
- [ ] Implement user login/bookmarking
- [ ] Add pagination
- [ ] Deploy to Vercel / Netlify

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

MIT License © [Your Name](https://github.com/your-username)

---

## 🙏 Acknowledgements

- [TMDB API](https://www.themoviedb.org/)
- [React](https://reactjs.org/)
- [Figma / Dribbble](https://dribbble.com/) (if you took design inspiration)

---
