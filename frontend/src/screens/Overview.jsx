// // import React, { useEffect, useContext } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import { motion } from 'framer-motion'
// // import { UserContext } from '../context/user.context'

// // const Overview = () => {
// //   const navigate = useNavigate()
// //   const { user } = useContext(UserContext)

// //   // Redirect logged-in users to home
// //   useEffect(() => {
// //     if (user) navigate('/home')
// //   }, [user, navigate])

// //   return (
// //     <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 overflow-hidden">

// //       {/* 🌐 Navbar */}
// //       <nav className="flex justify-between items-center px-10 py-5 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 sticky top-0 z-10">
// //         <div className="flex items-center space-x-2">
// //           <i className="ri-code-s-slash-line text-2xl text-blue-500"></i>
// //           <h1 className="text-xl font-bold tracking-tight">
// //             <span className="text-blue-500">TeamSync</span> Platform
// //           </h1>
// //         </div>

// //         <div className="flex items-center gap-4">
// //           <button
// //             onClick={() => navigate('/login')}
// //             className="px-5 py-2 rounded-lg bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transition"
// //           >
// //             Login
// //           </button>
// //           <button
// //             onClick={() => navigate('/register')}
// //             className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-lg"
// //           >
// //             Register
// //           </button>
// //         </div>
// //       </nav>

// //       {/* 🚀 Hero Section */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="flex flex-col items-center justify-center text-center flex-grow px-6 py-16"
// //       >
// //         <motion.h1
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.2 }}
// //           className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
// //         >
// //           Collaborate. Code. Create.
// //         </motion.h1>

// //         <motion.p
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.4 }}
// //           className="text-slate-400 max-w-2xl mb-10 text-lg"
// //         >
// //           TeamSync helps developers collaborate in real time — chat, share, and
// //           code seamlessly with AI-powered tools built for modern teamwork.
// //         </motion.p>

// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.97 }}
// //           onClick={() => navigate('/login')}
// //           className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-md transition"
// //         >
// //           Get Started →
// //         </motion.button>
// //       </motion.div>

// //       {/* 🧭 Steps Section */}
// //       {/* 🔹 How to Use Section */}
// // <section className="bg-slate-950 py-20 px-8">
// //   <h2 className="text-center text-4xl font-bold mb-12">
// //     How to Use <span className="text-blue-500">TeamSync</span>
// //   </h2>

// //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
// //     {[
// //       {
// //         title: 'Register or Login',
// //         desc: 'Start by creating your account or logging in securely.',
// //       },
// //       {
// //         title: 'Create a Project',
// //         desc: 'Add a new project and invite collaborators easily.',
// //       },
// //       {
// //         title: 'Start Chatting',
// //         desc: 'Discuss ideas, share code snippets, and brainstorm in real time.',
// //       },
// //       {
// //         title: 'Build & Run Server',
// //         desc: 'Spin up the web container and run your project instantly.',
// //       },
// //     ].map((item, i) => (
// //       <div
// //         key={i}
// //         className="bg-slate-900/50 border border-slate-800 hover:border-blue-600 hover:shadow-blue-500/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300"
// //       >
// //         <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 text-blue-400 rounded-full mb-4 text-2xl font-bold">
// //           {i + 1}
// //         </div>
// //         <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
// //         <p className="text-slate-400 text-sm">{item.desc}</p>
// //       </div>
// //     ))}
// //   </div>
// // </section>


// //       {/* 💡 Features Section */}
// //       <section className="py-16 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
// //         <h2 className="text-3xl font-bold text-center mb-10">
// //           Why Developers ❤️ <span className="text-blue-400">TeamSync</span>
// //         </h2>

// //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
// //           {[
// //             {
// //               icon: 'ri-chat-3-line',
// //               title: 'Real-time Chat',
// //               desc: 'Instant messaging and discussion rooms for teams.',
// //             },
// //             {
// //               icon: 'ri-code-box-line',
// //               title: 'Code Collaboration',
// //               desc: 'Share, edit, and preview your code with team members.',
// //             },
// //             {
// //               icon: 'ri-server-line',
// //               title: 'Web Container',
// //               desc: 'Run your project instantly with live server integration.',
// //             },
// //             {
// //               icon: 'ri-user-shared-line',
// //               title: 'Team Management',
// //               desc: 'Add, remove, or manage team roles effortlessly.',
// //             },
// //             {
// //               icon: 'ri-robot-line',
// //               title: 'AI Assistance',
// //               desc: 'Get smart code completions and debugging help.',
// //             },
// //             {
// //               icon: 'ri-lock-line',
// //               title: 'Secure Environment',
// //               desc: 'Your data and projects are encrypted and protected.',
// //             },
// //           ].map(({ icon, title, desc }) => (
// //             <motion.div
// //               key={title}
// //               whileHover={{ scale: 1.05 }}
// //               transition={{ duration: 0.2 }}
// //               className="bg-slate-800/50 border border-slate-700 hover:border-blue-500 rounded-xl p-6 text-center transition-all"
// //             >
// //               <i className={`${icon} text-3xl text-blue-400 mb-3`}></i>
// //               <h3 className="text-lg font-semibold mb-2">{title}</h3>
// //               <p className="text-slate-400 text-sm">{desc}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* 🧾 Footer */}
// //       {/* 🔹 Footer */}
// //       {/* 🔹 Footer */}
// //         <footer className="text-center py-6 border-t border-slate-800 bg-slate-950 text-slate-500 text-sm">
// //         <p>
// //             © {new Date().getFullYear()} Built by{" "}
// //             <a
// //             href="mailto:9555adityarajsingh@gmail.com"
// //             className="text-blue-400 font-semibold hover:underline hover:text-blue-300 transition"
// //             >
// //             Aditya Raj Singh
// //             </a>{" "}
// //             — Powered by{" "}
// //             <span className="text-blue-400 font-semibold">TeamSync</span>.
// //         </p>

// //         <div className="flex justify-center gap-5 mt-3">
// //             <a
// //             href="https://github.com/adityarajsingh11/Devil"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-slate-400 hover:text-blue-400 transition"
// //             title="GitHub"
// //             >
// //             <i className="ri-github-fill text-xl"></i>
// //             </a>

// //             <a
// //             href="https://www.linkedin.com/in/adityarajsingh117/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-slate-400 hover:text-blue-400 transition"
// //             title="LinkedIn"
// //             >
// //             <i className="ri-linkedin-box-fill text-xl"></i>
// //             </a>
// //         </div>
// //         </footer>
  

// //     </div>
// //   )
// // }

// // export default Overview


// import React, { useEffect, useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { UserContext } from '../context/user.context'
// import { Twitter, Code2, Rocket, Sparkles } from 'lucide-react'  // ✅ Lucide-react icons

// const Overview = () => {
//   const navigate = useNavigate()
//   const { user } = useContext(UserContext)

//   // Redirect logged-in users to home
//   useEffect(() => {
//     if (user) navigate('/home')
//     document.title = "⚡ SocketVerse | Talk. Build. Sync." // ✅ Title Update
//   }, [user, navigate])

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 overflow-hidden">

//       {/* 🌐 Navbar */}
//       <header className="fixed top-0 w-full z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-800 shadow-md">
//         <nav className="flex justify-between items-center px-10 py-4 max-w-7xl mx-auto">
//           {/* Left Side - Logo */}
//           <div
//             onClick={() => navigate('/')}
//             className="flex items-center space-x-2 cursor-pointer select-none"
//           >
//             <motion.div
//               whileHover={{ rotate: 20, scale: 1.1 }}
//               transition={{ type: 'spring', stiffness: 200 }}
//             >
//               <Code2 className="text-blue-500 w-6 h-6" />
//             </motion.div>
//             <h1 className="text-xl font-bold tracking-tight">
//               <span className="text-blue-500">Socket</span>Verse
//             </h1>
//           </div>

//           {/* Right Side - Buttons */}
//           <div className="flex items-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate('/login')}
//               className="px-5 py-2 rounded-lg bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transition"
//             >
//               Login
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate('/register')}
//               className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-lg flex items-center gap-2"
//             >
//               <Rocket className="w-4 h-4" /> Register
//             </motion.button>

//             {/* ✅ Twitter / X Logo */}
//             <motion.a
//               whileHover={{ scale: 1.2, rotate: 10 }}
//               whileTap={{ scale: 0.9 }}
//               href="https://x.com/_op_aditya_11"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-slate-400 hover:text-blue-400 transition"
//               title="Follow on X"
//             >
//               <Twitter className="w-5 h-5" />
//             </motion.a>
//           </div>
//         </nav>
//       </header>

//       {/* 🚀 Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex flex-col items-center justify-center text-center flex-grow px-6 py-32"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
//         >
//           Collaborate. Code. Create.
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="text-slate-400 max-w-2xl mb-10 text-lg"
//         >
//           <Sparkles className="inline-block w-5 h-5 text-blue-400 mb-1" /> 
//           &nbsp; SocketVerse empowers developers to chat, build, and deploy 
//           <span className="text-blue-400 font-semibold"> in real-time </span> — powered by Socket.IO and WebContainers.
//         </motion.p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           onClick={() => navigate('/register')}  // ✅ Goes to Register page now
//           className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-md transition flex items-center gap-2"
//         >
//           Get Started →
//         </motion.button>
//       </motion.div>

//       {/* 🔹 How to Use Section */}
//       <section className="bg-slate-950 py-20 px-8">
//         <h2 className="text-center text-4xl font-bold mb-12">
//           How to Use <span className="text-blue-500">SocketVerse</span>
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//           {[
//             {
//               title: 'Register or Login',
//               desc: 'Start by creating your account or logging in securely.',
//             },
//             {
//               title: 'Create a Project',
//               desc: 'Add a new project and invite collaborators easily.',
//             },
//             {
//               title: 'Start Chatting',
//               desc: 'Discuss ideas, share code snippets, and brainstorm in real time.',
//             },
//             {
//               title: 'Build & Run Server',
//               desc: 'Spin up the web container and run your project instantly.',
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05, y: -5 }}
//               transition={{ duration: 0.3 }}
//               className="bg-slate-900/50 border border-slate-800 hover:border-blue-600 hover:shadow-blue-500/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300"
//             >
//               <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 text-blue-400 rounded-full mb-4 text-2xl font-bold">
//                 {i + 1}
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-slate-400 text-sm">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 💡 Features Section */}
//       <section className="py-16 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Why Developers ❤️ <span className="text-blue-400">SocketVerse</span>
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {[
//             {
//               icon: 'ri-chat-3-line',
//               title: 'Real-time Chat',
//               desc: 'Instant messaging and discussion rooms for teams.',
//             },
//             {
//               icon: 'ri-code-box-line',
//               title: 'Code Collaboration',
//               desc: 'Share, edit, and preview your code with team members.',
//             },
//             {
//               icon: 'ri-server-line',
//               title: 'Web Container',
//               desc: 'Run your project instantly with live server integration.',
//             },
//             {
//               icon: 'ri-user-shared-line',
//               title: 'Team Management',
//               desc: 'Add, remove, or manage team roles effortlessly.',
//             },
//             {
//               icon: 'ri-robot-line',
//               title: 'AI Assistance',
//               desc: 'Get smart code completions and debugging help.',
//             },
//             {
//               icon: 'ri-lock-line',
//               title: 'Secure Environment',
//               desc: 'Your data and projects are encrypted and protected.',
//             },
//           ].map(({ icon, title, desc }) => (
//             <motion.div
//               key={title}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.2 }}
//               className="bg-slate-800/50 border border-slate-700 hover:border-blue-500 rounded-xl p-6 text-center transition-all"
//             >
//               <i className={`${icon} text-3xl text-blue-400 mb-3`}></i>
//               <h3 className="text-lg font-semibold mb-2">{title}</h3>
//               <p className="text-slate-400 text-sm">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 🧾 Footer */}
//       <footer className="text-center py-6 border-t border-slate-800 bg-slate-950 text-slate-500 text-sm">
//         <p>
//           © {new Date().getFullYear()} Built by{' '}
//           <a
//             href="mailto:9555adityarajsingh@gmail.com"
//             className="text-blue-400 font-semibold hover:underline hover:text-blue-300 transition"
//           >
//             Aditya Raj Singh
//           </a>{' '}
//           — Powered by{' '}
//           <span className="text-blue-400 font-semibold">SocketVerse ⚡</span>.
//         </p>

//         <div className="flex justify-center gap-5 mt-3">
//           <a
//             href="https://github.com/adityarajsingh11/Devil"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-slate-400 hover:text-blue-400 transition"
//             title="GitHub"
//           >
//             <i className="ri-github-fill text-xl"></i>
//           </a>

//           <a
//             href="https://www.linkedin.com/in/adityarajsingh117/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-slate-400 hover:text-blue-400 transition"
//             title="LinkedIn"
//           >
//             <i className="ri-linkedin-box-fill text-xl"></i>
//           </a>

//           <a
//             href="https://x.com/_op_aditya_11"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-slate-400 hover:text-blue-400 transition"
//             title="Twitter"
//           >
//             <Twitter className="w-5 h-5 inline-block" />
//           </a>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default Overview


import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserContext } from '../context/user.context'

// ✅ Lucide-react icons
import { Twitter, Code2, Rocket, Sparkles, TerminalSquare, Users2, MessageSquare, Shield, Cpu, Bot } from 'lucide-react'

const Overview = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  // Redirect logged-in users to home
  useEffect(() => {
    if (user) navigate('/home')
    document.title = '⚡ SocketVerse | Talk. Build. Sync.'
  }, [user, navigate])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 overflow-x-hidden">

      {/* 🌐 NAVBAR */}
     {/* 🌐 NAVBAR */}
<motion.header
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="fixed top-0 w-full z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-800 shadow-xl"
>
  <nav className="max-w-7xl mx-auto flex justify-between items-center px-10 py-3">
    
    {/* Left - Logo & Title */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 cursor-pointer select-none"
      onClick={() => navigate('/')}
    >
      {/* ⚡ Glowing Icon */}
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30"
      >
        <Code2 className="w-5 h-5 text-white" />
      </motion.div>

      {/* Title + Tagline */}
      <div className="flex flex-col leading-tight">
        <motion.h1
          whileHover={{ scale: 1.03 }}
          className="text-2xl font-extrabold tracking-tight flex items-center gap-1"
        >
          <span className="text-blue-400">⚡ Socket</span>
          <span className="text-cyan-400">Verse</span>
        </motion.h1>
        <span className="text-xs text-slate-400 tracking-wide">
          Real-Time Dev Hub 🚀
        </span>
      </div>
    </motion.div>

    {/* Right - Buttons & Links */}
    <div className="flex items-center gap-5">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/login')}
        className="px-5 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all font-semibold"
      >
        Login
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/register')}
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold shadow-lg flex items-center gap-2"
      >
        <Rocket className="w-4 h-4" /> Get Started
      </motion.button>

      {/* Twitter / X */}
      <motion.a
        whileHover={{ rotate: 10, scale: 1.2 }}
        href="https://x.com/_op_aditya_11"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-blue-400 transition"
        title="Follow on X"
      >
        <Twitter className="w-5 h-5" />
      </motion.a>
    </div>
  </nav>
</motion.header>


      {/* 🚀 HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center min-h-screen px-6 py-24"
      >
        <motion.h1
          className="text-5xl sm:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 leading-tight"
        >
          Collaborate. Code. Create.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 max-w-2xl mb-10 text-lg"
        >
          <Sparkles className="inline w-5 h-5 text-blue-400 mb-1" />  
          &nbsp; Empowering developers to chat, build, and deploy 
          <span className="text-blue-400 font-semibold"> in real-time </span> — 
          powered by <span className="text-cyan-400 font-semibold">Socket.IO</span> and WebContainers.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/register')}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white text-lg font-semibold shadow-md flex items-center gap-3"
        >
          <Rocket className="w-5 h-5" /> Join Now
        </motion.button>

        {/* Floating icons animation */}
        <div className="absolute top-40 left-10 animate-pulse opacity-30"><Cpu className="w-10 h-10 text-blue-400" /></div>
        <div className="absolute bottom-40 right-10 animate-bounce opacity-30"><MessageSquare className="w-10 h-10 text-cyan-400" /></div>
      </motion.section>

      {/* 💡 HOW TO USE SECTION */}
      <section className="bg-slate-950 py-20 px-8">
        <h2 className="text-center text-4xl font-bold mb-12">
          How to Use <span className="text-blue-500">SocketVerse</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Users2 />, title: 'Register or Login', desc: 'Start by creating your account or logging in securely.' },
            { icon: <TerminalSquare />, title: 'Create a Project', desc: 'Add a new project and invite collaborators easily.' },
            { icon: <MessageSquare />, title: 'Start Chatting', desc: 'Discuss ideas, share code snippets, and brainstorm live.' },
            { icon: <Rocket />, title: 'Build & Run Server', desc: 'Spin up the web container and deploy instantly.' },
          ].map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/50 border border-slate-800 hover:border-blue-600 hover:shadow-blue-500/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 text-blue-400 rounded-full mb-4">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💻 FEATURES SECTION */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Developers ❤️ <span className="text-blue-400">SocketVerse</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <MessageSquare />, title: 'Real-time Chat', desc: 'Instant messaging and discussion rooms for your team.' },
            { icon: <TerminalSquare />, title: 'Code Collaboration', desc: 'Share, edit, and preview code together seamlessly.' },
            { icon: <Cpu />, title: 'Web Container', desc: 'Run and deploy instantly using WebContainers.' },
            { icon: <Users2 />, title: 'Team Management', desc: 'Add, remove, and assign roles effortlessly.' },
            { icon: <Bot />, title: 'AI Assistance', desc: 'Smart suggestions, debugging, and code help.' },
            { icon: <Shield />, title: 'Secure Environment', desc: 'Your data and code are encrypted and protected.' },
          ].map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-800/50 border border-slate-700 hover:border-blue-500 rounded-xl p-6 text-center transition-all shadow-lg"
            >
              <div className="flex justify-center mb-4 text-blue-400">{icon}</div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧾 FOOTER */}
      <footer className="text-center py-6 border-t border-slate-800 bg-slate-950 text-slate-500 text-sm">
        <p>
          © {new Date().getFullYear()} Built by{' '}
          <a
            href="mailto:9555adityarajsingh@gmail.com"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-300 transition"
          >
            Aditya Raj Singh
          </a>{' '}
          — Powered by{' '}
          <span className="text-blue-400 font-semibold">SocketVerse ⚡</span>.
        </p>

        <div className="flex justify-center gap-6 mt-3">
          <a
            href="https://github.com/adityarajsingh11/Devil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            <i className="ri-github-fill text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/adityarajsingh117/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            <i className="ri-linkedin-box-fill text-xl"></i>
          </a>
          <a
            href="https://x.com/_op_aditya_11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            <Twitter className="w-5 h-5 inline-block" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Overview
