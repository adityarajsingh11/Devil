
// // import React, { useContext, useState, useEffect } from 'react'
// // import { UserContext } from '../context/user.context'
// // import axios from "../config/axios"
// // import { useNavigate } from 'react-router-dom'
// // import { motion, AnimatePresence } from 'framer-motion'

// // function Home() {
// //   const { user, setUser } = useContext(UserContext)
// //   const [isModalOpen, setIsModalOpen] = useState(false)
// //   const [projectName, setProjectName] = useState("")
// //   const [projects, setProjects] = useState([])
// //   const navigate = useNavigate()

// //   // 🧠 Fetch all projects
// //   useEffect(() => {
// //     axios
// //       .get('/projects/all')
// //       .then(res => {
// //         setProjects(res.data.projects || [])
// //       })
// //       .catch(err => {
// //         console.error(err)
// //       })
// //   }, [])

// //   // ✨ Create project
// //   const createProject = e => {
// //     e.preventDefault()
// //     axios
// //       .post('/projects/create', { name: projectName })
// //       .then(res => {
// //         setIsModalOpen(false)
// //         setProjectName("")
// //         // refresh project list
// //         axios.get('/projects/all').then(res => setProjects(res.data.projects))
// //       })
// //       .catch(err => console.error(err))
// //   }

// //   // 🚪 Logout function
// //   const handleLogout = () => {
// //     localStorage.removeItem('token') // clear saved token
// //     setUser(null) // reset user context
// //     navigate('/') // go to Overview page
// //   }

// //   return (
// //     <main className="min-h-screen w-full bg-gray-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 p-6">

// //       {/* 🔹 Header */}
// //       <header className="flex items-center justify-between mb-8">
// //         <h1 className="text-2xl font-bold">Your Projects</h1>

// //         <div className="flex items-center gap-4">
// //           <button
// //             onClick={() => setIsModalOpen(true)}
// //             className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm flex items-center gap-2"
// //           >
// //             <i className="ri-add-line text-lg"></i>
// //             New Project
// //           </button>

// //           {/* 🚪 Logout Button */}
// //           <button
// //             onClick={handleLogout}
// //             className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm flex items-center gap-2 transition"
// //           >
// //             <i className="ri-logout-box-line text-lg"></i>
// //             Logout
// //           </button>
// //         </div>
// //       </header>

// //       {/* 🗂 Projects Grid */}
// //       {projects.length > 0 ? (
// //         <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
// //           {projects.map(project => (
// //             <motion.div
// //               key={project._id}
// //               onClick={() => navigate(`/project`, { state: { project } })}
// //               whileHover={{ scale: 1.02 }}
// //               transition={{ duration: 0.15 }}
// //               className="p-5 cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow hover:shadow-md transition-all"
// //             >
// //               <h2 className="text-lg font-semibold truncate">{project.name}</h2>
// //               <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
// //                 <i className="ri-user-line"></i> {project.users.length} Collaborators
// //               </p>
// //             </motion.div>
// //           ))}
// //         </section>
// //       ) : (
// //         <div className="flex flex-col items-center justify-center text-center mt-20">
// //           <img
// //             src="https://illustrations.popsy.co/violet/project-completed.svg"
// //             alt="No projects"
// //             className="w-48 opacity-80"
// //           />
// //           <p className="text-slate-600 dark:text-slate-400 mt-4">
// //             No projects yet. Start by creating one!
// //           </p>
// //           <button
// //             onClick={() => setIsModalOpen(true)}
// //             className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow"
// //           >
// //             Create New Project
// //           </button>
// //         </div>
// //       )}

// //       {/* ✨ Modal */}
// //       <AnimatePresence>
// //         {isModalOpen && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
// //           >
// //             <motion.div
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //               transition={{ duration: 0.2 }}
// //               className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-md mx-4"
// //             >
// //               <header className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
// //                 <h2 className="text-lg font-semibold">Create Project</h2>
// //               </header>

// //               <form onSubmit={createProject} className="p-6 space-y-4">
// //                 <div>
// //                   <label className="block text-sm font-medium mb-2">
// //                     Project name
// //                   </label>
// //                   <input
// //                     onChange={e => setProjectName(e.target.value)}
// //                     value={projectName}
// //                     name="projectName"
// //                     type="text"
// //                     required
// //                     placeholder="Enter project name"
// //                     className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                   />
// //                 </div>

// //                 <div className="flex justify-end gap-2 pt-2">
// //                   <button
// //                     type="button"
// //                     onClick={() => setIsModalOpen(false)}
// //                     className="px-4 py-2 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 rounded-md hover:bg-gray-200 dark:hover:bg-slate-700"
// //                   >
// //                     Cancel
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow"
// //                   >
// //                     Create
// //                   </button>
// //                 </div>
// //               </form>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </main>
// //   )
// // }

// // export default Home


// import React, { useContext, useState, useEffect } from "react";
// import { UserContext } from "../context/user.context";
// import axios from "../config/axios";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { LogOut, User, PlusCircle, FolderGit2, Mail } from "lucide-react";

// function Home() {
//   const { user, setUser } = useContext(UserContext);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [projectName, setProjectName] = useState("");
//   const [projects, setProjects] = useState([]);
//   const navigate = useNavigate();

//   // 🧠 Fetch all projects
//   useEffect(() => {
//     axios
//       .get("/projects/all")
//       .then((res) => {
//         setProjects(res.data.projects || []);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   // ✨ Create project (Fix: preserve case)
//   const createProject = (e) => {
//     e.preventDefault();
//     const name = projectName.trim(); // ✅ Don't convert to lowercase
//     if (!name) return;
//     axios
//       .post("/projects/create", { name })
//       .then(() => {
//         setIsModalOpen(false);
//         setProjectName("");
//         // refresh list
//         axios.get("/projects/all").then((res) => setProjects(res.data.projects));
//       })
//       .catch((err) => console.error(err));
//   };

//   // 🚪 Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/");
//   };

//   return (
//     <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 p-6 relative overflow-hidden">
      
//       {/* 🔹 Glowing Orbs */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//         className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-cyan-400/10 blur-3xl rounded-full"
//       ></motion.div>
//       <motion.div
//         animate={{ rotate: -360 }}
//         transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//         className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-bl from-cyan-500/10 to-blue-500/10 blur-3xl rounded-full"
//       ></motion.div>

//       {/* 🔹 Header */}
//       <header className="flex flex-col sm:flex-row items-center justify-between mb-10 bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-lg backdrop-blur-md">
//         <div>
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
//             🚀 Your Projects
//           </h1>
//           <p className="text-slate-400 text-sm mt-1">
//             Manage, collaborate, and build — all in real-time.
//           </p>
//         </div>

//         {/* 🧑‍💻 Profile Section */}
//         <div className="flex items-center gap-4 mt-4 sm:mt-0">
//           <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2">
//             <User className="text-blue-400" size={20} />
//             <span className="text-sm text-slate-300 truncate max-w-[140px]">
//               {user?.email || "user@example.com"}
//             </span>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             onClick={handleLogout}
//             className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white shadow"
//           >
//             <LogOut size={18} /> Logout
//           </motion.button>
//         </div>
//       </header>

//       {/* 🧩 Toolbar */}
//       <div className="flex justify-end mb-6">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={() => setIsModalOpen(true)}
//           className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg text-white font-medium flex items-center gap-2 shadow-md"
//         >
//           <PlusCircle size={18} /> New Project
//         </motion.button>
//       </div>

//       {/* 🗂 Projects Grid */}
//       {projects.length > 0 ? (
//         <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {projects.map((project) => (
//             <motion.div
//               key={project._id}
//               whileHover={{ scale: 1.04, y: -3 }}
//               transition={{ type: "spring", stiffness: 150 }}
//               onClick={() => navigate(`/project`, { state: { project } })}
//               className="p-5 bg-slate-900/80 border border-slate-800 hover:border-blue-500 hover:shadow-blue-500/20 rounded-2xl shadow-md cursor-pointer transition-all"
//             >
//               <div className="flex items-center gap-3 mb-2">
//                 <FolderGit2 className="text-blue-400" size={22} />
//                 <h2 className="text-lg font-semibold truncate text-slate-100">
//                   {project.name}
//                 </h2>
//               </div>
//               <p className="text-sm text-slate-400 flex items-center gap-1">
//                 <i className="ri-user-line"></i> {project.users.length} Collaborators
//               </p>
//             </motion.div>
//           ))}
//         </section>
//       ) : (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col items-center justify-center text-center mt-20"
//         >
//           <motion.img
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 3 }}
//             src="https://illustrations.popsy.co/violet/project-completed.svg"
//             alt="No projects"
//             className="w-48 opacity-90"
//           />
//           <p className="text-slate-400 mt-4">
//             No projects yet — start building your first one!
//           </p>
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg shadow-md"
//           >
//             Create Project
//           </button>
//         </motion.div>
//       )}

//       {/* ✨ Create Project Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6"
//             >
//               <h2 className="text-xl font-semibold mb-4 text-blue-400">
//                 Create New Project
//               </h2>

//               <form onSubmit={createProject} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-2 text-slate-300">
//                     Project Name
//                   </label>
//                   <input
//                     onChange={(e) => setProjectName(e.target.value)}
//                     value={projectName}
//                     name="projectName"
//                     type="text"
//                     required
//                     placeholder="Enter project name"
//                     className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
//                   />
//                 </div>

//                 <div className="flex justify-end gap-2 pt-3">
//                   <button
//                     type="button"
//                     onClick={() => setIsModalOpen(false)}
//                     className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg transition"
//                   >
//                     Create
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }

// export default Home;


import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user.context";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, PlusCircle, FolderGit2, LogOut, Mail, UserCircle2 } from "lucide-react";

function Home() {
  const { user, setUser } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // 🧠 Fetch all projects
  useEffect(() => {
    axios
      .get("/projects/all")
      .then((res) => setProjects(res.data.projects || []))
      .catch((err) => console.error(err));
  }, []);

  // ✨ Create project
  const createProject = (e) => {
    e.preventDefault();
    const name = projectName.trim();
    if (!name) return;
    axios
      .post("/projects/create", { name })
      .then(() => {
        setIsModalOpen(false);
        setProjectName("");
        axios.get("/projects/all").then((res) => setProjects(res.data.projects));
      })
      .catch((err) => console.error(err));
  };

  // 🚪 Logout (redirect to Overview '/')
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/"); // ✅ Redirect to Overview
  };

  // 🧩 Toggle dropdown
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // Close dropdown on outside click
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".profile-menu")) setShowDropdown(false);
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 p-6 relative overflow-hidden">
      {/* Glowing Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-cyan-400/10 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-bl from-cyan-500/10 to-blue-500/10 blur-3xl rounded-full"
      />

      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between mb-10 bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-lg backdrop-blur-md relative">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            🚀 Your Projects
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Manage, collaborate, and build — all in real-time.
          </p>
        </div>

        {/* Profile Section */}
        <div className="relative mt-4 sm:mt-0 profile-menu">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={toggleDropdown}
            className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 cursor-pointer hover:bg-slate-700 transition-all"
          >
            <UserCircle2 className="text-blue-400" size={22} />
            <span className="text-sm text-slate-300 truncate max-w-[120px]">
              {user?.email || "user@example.com"}
            </span>
          </motion.div>

          {/* Dropdown */}
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-56 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50"
              >
                <div className="px-4 py-3 border-b border-slate-700 flex items-center gap-2">
                  <Mail className="text-cyan-400" size={16} />
                  <span className="text-sm text-slate-300 truncate">
                    {user?.email || "user@example.com"}
                  </span>
                </div>
                <div className="flex flex-col p-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    onClick={() => {
                      setShowDropdown(false);
                      navigate("/profile");
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300"
                  >
                    <User size={16} /> View Profile
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    onClick={() => {
                      setShowDropdown(false);
                      handleLogout();
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white mt-1"
                  >
                    <LogOut size={16} /> Logout
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Toolbar */}
      <div className="flex justify-end mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg text-white font-medium flex items-center gap-2 shadow-md"
        >
          <PlusCircle size={18} /> New Project
        </motion.button>
      </div>

      {/* Project Grid */}
      {projects.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project._id}
              whileHover={{ scale: 1.04, y: -3 }}
              transition={{ type: "spring", stiffness: 150 }}
              onClick={() => navigate(`/project`, { state: { project } })}
              className="p-5 bg-slate-900/80 border border-slate-800 hover:border-blue-500 hover:shadow-blue-500/20 rounded-2xl shadow-md cursor-pointer transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <FolderGit2 className="text-blue-400" size={22} />
                <h2 className="text-lg font-semibold truncate text-slate-100">
                  {project.name}
                </h2>
              </div>
              <p className="text-sm text-slate-400 flex items-center gap-1">
                <i className="ri-user-line"></i> {project.users.length} Collaborators
              </p>
            </motion.div>
          ))}
        </section>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center mt-20"
        >
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            src="https://illustrations.popsy.co/violet/project-completed.svg"
            alt="No projects"
            className="w-48 opacity-90"
          />
          <p className="text-slate-400 mt-4">
            No projects yet — start building your first one!
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg shadow-md"
          >
            Create Project
          </button>
        </motion.div>
      )}
    </main>
  );
}

export default Home;
