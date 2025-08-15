# 🎓 Lernify


<div align="center">

![Lernify Logo](https://img.shields.io/badge/Lernify-InProgress-blue?style=for-the-badge&logo=graduation-cap)
[![GitHub stars](https://img.shields.io/github/stars/haya-ehab/Lernify?style=social)](https://github.com/haya-ehab/Lernify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)


</div>

---

**Lernify** is a next-generation, scalable Learning Management System (LMS) that transforms online education by delivering an intuitive, powerful experience for **students** 👨‍🎓, **instructors** 👩‍🏫, and **administrators** 🔧.



---

## 🚀 What Makes Lernify Special?

<table>
<tr>
<td width="33%" align="center">
<h3>🎯 User-Centric</h3>
Designed with real users in mind, delivering seamless experiences across all roles
</td>
<td width="33%" align="center">
<h3>⚡ Lightning Fast</h3>
Built with modern tech stack for optimal performance and scalability
</td>
<td width="33%" align="center">
<h3>🔒 Enterprise Ready</h3>
Security-first approach with robust authentication and data protection
</td>
</tr>
</table>

---

## ✨ Feature Showcase

### 🔐 **Authentication & Security**
- 🛡️ JWT-based secure sessions
- 👥 Role-based access control (Student, Instructor, Admin)
- 🔒 Data encryption & privacy protection

### 📚 **Course Management**
- 🎨 Interactive course builder
- 📅 Scheduling & calendar integration
- 📈 Enrollment analytics

### 📂 **Rich Content Management**
- 📄 Document management
- 🖼️ Interactive media support
- 📱 Mobile-optimized content

### 📝 **Smart Assessments**
- 🤖 AI-powered auto-grading
- 📊 Real-time analytics
- 💬 Personalized feedback


### 📊 **Advanced Analytics**
- 📈 Student progress tracking
- 🎯 Performance insights


### 🎓 **Digital Certificates**
- 🏅 Blockchain-verified certificates
- 📧 Automated distribution


### 💬 **Social Learning**
- 💭 Real-time chat & messaging
- 🗣️ Discussion forums
- 👥 Study groups

---

## 🛠️ Technologies Used

<div align="center">

### **Frontend** 🎨
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

### **Backend** ⚡
![NestJS](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

### **Other Tools** 🔧
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)

</div>

---

## 📁 Project Architecture

```
🏗️ Lernify/
├── 🎨 frontend/                 # React client application
│   ├── 📂 src/
│   │   ├── 🧩 components/       # Reusable UI components
│   │   ├── 📄 pages/           # Application pages
│   │   ├── 🔗 hooks/           # Custom React hooks
│   │   ├── 🛠️ utils/           # Helper functions
│   │   └── 🎯 types/           # TypeScript definitions
│   └── 📦 package.json
├── ⚙️ backend/                  # NestJS server application
│   ├── 📂 src/
│   │   ├── 📋 modules/         # Feature modules
│   │   ├── 🛡️ guards/          # Authentication guards
│   │   ├── 📊 database/        # Database configurations
│   │   └── 🔧 common/          # Shared utilities
│   └── 📦 package.json
├── 📚 docs/                     # Documentation & guides
│   ├── 📖 API.md              # API documentation
│   ├── 🚀 DEPLOYMENT.md       # Deployment guide
│   └── 🎨 DESIGN.md           # Design system    
├── 🔄 .github/workflows/       # CI/CD pipelines
└── 📋 README.md               # You are here!
```

---

## 🚀 Quick Start Guide

### 🎯 Prerequisites
- 📦 Node.js (v18 or higher)
- 🐘 PostgreSQL (v13 or higher)


### 1️⃣ **Clone & Navigate**
```bash
# Clone the magic ✨
git clone https://github.com/haya-ehab/Lernify.git
cd Lernify
```

### 2️⃣ **Environment Setup**
```bash
# Copy environment files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Configure your database and secrets 🔐
```

### 3️⃣ **Install Dependencies**
```bash
# Frontend installation 🎨
cd frontend
npm install

# Backend installation ⚙️
cd ../backend
npm install
```


### 5️⃣ **Launch Time** 🚀
```bash
# Start backend (Terminal 1)
cd backend
npm run start:dev

# Start frontend (Terminal 2)
cd frontend
npm run dev
```

### 🎉 **You're Live!**
- 🌐 Frontend: `http://localhost:3000`
- 🔧 Backend: `http://localhost:8000`


---

---

## 🤝 Contributing

 Here's how you can help make Lernify even better:

<div align="center">

### 🚀 **Get Started**

</div>

1. **🍴 Fork** the repository
2. **🌿 Create** your feature branch
   ```bash
   git checkout -b feature/amazing-new-feature
   ```
3. **✨ Make** your magical changes
4. **📝 Commit** with style
   ```bash
   git commit -m "feat: ✨ add amazing new feature"
   ```
5. **🚀 Push** to your branch
   ```bash
   git push origin feature/amazing-new-feature
   ```
6. **🎯 Open** a Pull Request

### 📋 **Contribution Guidelines**
- 🧪 Write tests for new features
- 📚 Update documentation
- 🎨 Follow our coding standards
- 🔍 Ensure all checks pass

---

## 🎨 Design System

Our design focuses on:
- 📱 **Mobile Responsive** - Seamless across all devices
- 🎨 **Consistent UI** - Unified design language
- ⚡ **Performance** - Optimized for speed

---

## 📊 Project Status

<div align="center">

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/haya-ehab/Lernify?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/haya-ehab/Lernify?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/haya-ehab/Lernify?style=flat-square)
![GitHub pull requests](https://img.shields.io/github/issues-pr/haya-ehab/Lernify?style=flat-square)

</div>

---

## 📜 License

This project is licensed under the **MIT License** 📄 - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

###  **⭐ Lernify Team**

## <sub> Haya </sub> [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/haya-ehab/Lernify)
## <sub> Ashraf </sub>[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ashrafmuhmed)
## <sub> Renad </sub> [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/renadsaeed) 


</div>

---

