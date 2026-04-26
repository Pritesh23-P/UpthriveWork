# UpthriveWork Hub

A student-focused academic help platform built with Next.js 15, offering full stack projects, AI/ML solutions, assignments, presentations, and custom academic help.

## 📋 Services
- **Full Stack Project** — Complete, production-ready web applications
- **AI/ML Project** — Intelligent models and data pipelines
- **Assignment** — 100% original, plagiarism-free assignments
- **Presentation** — Professional academic presentations
- **Custom Academic Help** — Research papers, dissertations, case studies

## 🛠️ Tech Stack
- **Framework** — Next.js 15 (App Router)
- **Styling** — Tailwind CSS v4
- **Animation** — Framer Motion
- **Database** — MongoDB Atlas
- **Form Handling** — Formspark
- **Content** — MDX
- **Font** — Mona Sans

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/upthrivewerk.git

# Navigate to project
cd UpthriveWork

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env.local
```

### Environment Variables
Create `.env.local` in the root.

### Run Development Server
```bash
pnpm dev
```

Open (http://localhost:3000) in your browser.

### Build for Production
```bash
pnpm build
pnpm start
```

## 🗄️ Database
MongoDB Atlas is used to store contact form submissions.
- Database: `UW`
- Collection: `UWT`

## 📧 Contact Form
The contact form collects:
- Name, Email, University, Phone
- Message, Project Deadline
- Service Required

Data is stored in MongoDB and forwarded to Formspark.

## 🚀 Deployment
The easiest way to deploy is via [Vercel](https://vercel.com):

1. Push code to GitHub
2. Import project in Vercel
3. Add `MONGODB_URI` in environment variables
4. Deploy!

## 📝 License
This project is private and proprietary.
© 2026 UpthriveWork Hub. All rights reserved.