# 🧑‍💼 Indeed Clone

A basic **job portal application** that replicates the core functionality of Indeed. It allows **employers to post jobs** and **job seekers to browse listings**.

This project was built primarily to **learn and understand Java**, full-stack development, and how frontend and backend interact using modern technologies.

---

## 🚀 Features

- 👨‍💼 Employers can post new job listings
- 🔍 Job seekers can view and browse all job posts
- 🖥️ Frontend built with React
- 🌱 Backend powered by Spring Boot (Java)
- 💾 Data stored in MongoDB using Hibernate
- 📚 Clean project structure — ideal for learning full-stack development

---

## 🛠️ Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | React              |
| Backend     | Java + Spring Boot |
| Database    | MongoDB + Hibernate |
| API Format  | REST               |

---

## 📁 Project Structure

```
Indeed-clone/
├── client/     # React frontend
└── server/     # Spring Boot backend
```

---

## 📦 Setup Instructions

### 🔧 Prerequisites

- Node.js and npm
- Java 17+
- MongoDB (running locally or using Atlas)

### ⚙️ Frontend (React)

```bash
cd client
npm install
npm start
```

### ⚙️ Backend (Spring Boot)

```bash
cd server
# Make sure application.properties is configured for MongoDB
./mvnw spring-boot:run
```

---

## 🌐 API Overview

| Method | Endpoint       | Description        |
|--------|----------------|--------------------|
| GET    | `/posts`       | Fetch all job posts|
| POST   | `/post`        | Create a new job   |

> ⚠️ You may need to enable CORS in Spring Boot for frontend-backend interaction.

---

## 🎯 Why This Project?

> *"This project was made primarily to help me learn Java and understand how real-world full-stack applications are built. It's a simplified version of Indeed, but covers the core flow of job posting and viewing."*

---

## 🧠 What I Learned

- Setting up a full-stack project from scratch
- REST APIs using Spring Boot
- Connecting Spring Boot to MongoDB using Hibernate
- State management and routing in React
- Structuring projects for collaboration

---

## 🤝 Contributing

Pull requests are welcome! If you'd like to suggest improvements or new features, feel free to open an issue or PR.


## 🔗 Live Demo (Optional)

> _Add your deployment link here if you host it on Render, Vercel, or Netlify._

---

## ✨ Author

**Kusum Mishra**  
🔗 [GitHub Profile](https://github.com/Kusum-Mishra)
