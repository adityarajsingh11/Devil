// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { UserContext } from "../context/user.context";
// import { Mail, LogOut, UserCircle2, Rocket } from "lucide-react";

// const Profile = () => {
//   const { user, setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 relative overflow-hidden px-4">
      
//       {/* ✨ Background Glow Orbs */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//         className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 blur-3xl"
//       ></motion.div>
//       <motion.div
//         animate={{ rotate: -360 }}
//         transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//         className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 blur-3xl"
//       ></motion.div>

//       {/* 🧊 Profile Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8 text-center"
//       >
//         {/* Avatar Icon */}
//         <motion.div
//           animate={{ y: [0, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 3 }}
//           className="flex justify-center mb-4"
//         >
//           <UserCircle2 size={80} className="text-blue-400 drop-shadow-lg" />
//         </motion.div>

//         {/* Title */}
//         <h2 className="text-2xl font-bold mb-6 text-blue-400">
//           Welcome to <span className="text-cyan-300">SocketVerse</span>
//         </h2>

//         {/* Email Info */}
//         <div className="flex items-center justify-center gap-2 bg-slate-800/70 border border-slate-700 rounded-xl py-3 px-5 mb-6">
//           <Mail className="text-cyan-400" size={18} />
//           <span className="text-slate-300 text-sm">
//             {user?.email || "guest@example.com"}
//           </span>
//         </div>

//         {/* Logout Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleLogout}
//           className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow-lg flex items-center justify-center gap-2 transition-all"
//         >
//           <LogOut size={18} /> Logout
//         </motion.button>

//         {/* Footer */}
//         <div className="mt-6 text-slate-400 text-xs flex justify-center items-center gap-1">
//           <Rocket size={14} className="text-blue-400" />
//           <span>Powered by SocketVerse ⚡</span>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Profile;


import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserContext } from "../context/user.context";
import { Mail, LogOut, UserCircle2, Rocket, ArrowLeft } from "lucide-react";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 relative overflow-hidden px-4">
      {/* Glow Orbs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 blur-3xl"
      ></motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8 text-center relative"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 flex items-center gap-2 text-slate-300 hover:text-blue-400 transition"
        >
          <ArrowLeft size={18} /> Back
        </motion.button>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="flex justify-center mb-4"
        >
          <UserCircle2 size={80} className="text-blue-400 drop-shadow-lg" />
        </motion.div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">
          Welcome to <span className="text-cyan-300">SocketVerse</span>
        </h2>

        <div className="flex items-center justify-center gap-2 bg-slate-800/70 border border-slate-700 rounded-xl py-3 px-5 mb-6">
          <Mail className="text-cyan-400" size={18} />
          <span className="text-slate-300 text-sm">
            {user?.email || "guest@example.com"}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow-lg flex items-center justify-center gap-2 transition-all"
        >
          <LogOut size={18} /> Logout
        </motion.button>

        <div className="mt-6 text-slate-400 text-xs flex justify-center items-center gap-1">
          <Rocket size={14} className="text-blue-400" />
          <span>Powered by SocketVerse ⚡</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
