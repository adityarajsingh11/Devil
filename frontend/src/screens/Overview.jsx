import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserContext } from '../context/user.context'

const Overview = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  // Redirect logged-in users to home
  useEffect(() => {
    if (user) navigate('/home')
  }, [user, navigate])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 overflow-hidden">

      {/* 🌐 Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <i className="ri-code-s-slash-line text-2xl text-blue-500"></i>
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-blue-500">TeamSync</span> Platform
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/login')}
            className="px-5 py-2 rounded-lg bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-lg"
          >
            Register
          </button>
        </div>
      </nav>

      {/* 🚀 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center text-center flex-grow px-6 py-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          Collaborate. Code. Create.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 max-w-2xl mb-10 text-lg"
        >
          TeamSync helps developers collaborate in real time — chat, share, and
          code seamlessly with AI-powered tools built for modern teamwork.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/login')}
          className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-md transition"
        >
          Get Started →
        </motion.button>
      </motion.div>

      {/* 🧭 Steps Section */}
      {/* 🔹 How to Use Section */}
<section className="bg-slate-950 py-20 px-8">
  <h2 className="text-center text-4xl font-bold mb-12">
    How to Use <span className="text-blue-500">TeamSync</span>
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: 'Register or Login',
        desc: 'Start by creating your account or logging in securely.',
      },
      {
        title: 'Create a Project',
        desc: 'Add a new project and invite collaborators easily.',
      },
      {
        title: 'Start Chatting',
        desc: 'Discuss ideas, share code snippets, and brainstorm in real time.',
      },
      {
        title: 'Build & Run Server',
        desc: 'Spin up the web container and run your project instantly.',
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-slate-900/50 border border-slate-800 hover:border-blue-600 hover:shadow-blue-500/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300"
      >
        <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 text-blue-400 rounded-full mb-4 text-2xl font-bold">
          {i + 1}
        </div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-slate-400 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* 💡 Features Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Developers ❤️ <span className="text-blue-400">TeamSync</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: 'ri-chat-3-line',
              title: 'Real-time Chat',
              desc: 'Instant messaging and discussion rooms for teams.',
            },
            {
              icon: 'ri-code-box-line',
              title: 'Code Collaboration',
              desc: 'Share, edit, and preview your code with team members.',
            },
            {
              icon: 'ri-server-line',
              title: 'Web Container',
              desc: 'Run your project instantly with live server integration.',
            },
            {
              icon: 'ri-user-shared-line',
              title: 'Team Management',
              desc: 'Add, remove, or manage team roles effortlessly.',
            },
            {
              icon: 'ri-robot-line',
              title: 'AI Assistance',
              desc: 'Get smart code completions and debugging help.',
            },
            {
              icon: 'ri-lock-line',
              title: 'Secure Environment',
              desc: 'Your data and projects are encrypted and protected.',
            },
          ].map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-800/50 border border-slate-700 hover:border-blue-500 rounded-xl p-6 text-center transition-all"
            >
              <i className={`${icon} text-3xl text-blue-400 mb-3`}></i>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧾 Footer */}
      {/* 🔹 Footer */}
      {/* 🔹 Footer */}
        <footer className="text-center py-6 border-t border-slate-800 bg-slate-950 text-slate-500 text-sm">
        <p>
            © {new Date().getFullYear()} Built by{" "}
            <a
            href="mailto:9555adityarajsingh@gmail.com"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-300 transition"
            >
            Aditya Raj Singh
            </a>{" "}
            — Powered by{" "}
            <span className="text-blue-400 font-semibold">TeamSync</span>.
        </p>

        <div className="flex justify-center gap-5 mt-3">
            <a
            href="https://github.com/adityarajsingh11/Devil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
            title="GitHub"
            >
            <i className="ri-github-fill text-xl"></i>
            </a>

            <a
            href="https://www.linkedin.com/in/adityarajsingh117/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
            title="LinkedIn"
            >
            <i className="ri-linkedin-box-fill text-xl"></i>
            </a>
        </div>
        </footer>
  

    </div>
  )
}

export default Overview
