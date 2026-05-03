import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSignOutAlt, FaHome } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const AdminLayout = ({ children, title }) => {
  const { logout } = useAuth();
  const navigate   = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header
        className="text-white px-4 sm:px-6 py-3 flex items-center justify-between gap-4 shadow"
        style={{ backgroundColor: "rgb(106, 27, 154)" }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <Link
            to="/admin"
            className="hover:opacity-75 transition p-1"
            title="Dashboard"
          >
            <FaHome size={17} />
          </Link>
          <div className="min-w-0">
            <p className="text-[10px] opacity-60 uppercase tracking-wide">
              நிர்வாக குழு
            </p>
            <h1 className="font-semibold text-sm sm:text-base leading-tight truncate">
              {title}
            </h1>
          </div>
        </div>

        <motion.button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-white/15 hover:bg-white/25 px-3 py-2 rounded-lg text-sm transition flex-shrink-0"
          whileTap={{ scale: 0.94 }}
        >
          <FaSignOutAlt size={13} />
          <span className="hidden sm:inline">வெளியேறு</span>
        </motion.button>
      </header>

      {/* Page content */}
      <main className="flex-1 p-4 sm:p-6 max-w-4xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
