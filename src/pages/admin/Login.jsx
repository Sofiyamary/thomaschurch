import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

/* Supabase error messages → Tamil */
const getErrorMsg = (error) => {
  if (!error) return "தெரியாத பிழை ஏற்பட்டது.";
  const msg = (error.message || "").toLowerCase();

  if (error.code === "not-admin")
    return "நீங்கள் நிர்வாகி அல்ல. அணுகல் மறுக்கப்பட்டது.";
  if (msg.includes("invalid login credentials") || msg.includes("invalid email or password"))
    return "மின்னஞ்சல் அல்லது கடவுச்சொல் தவறானது.";
  if (msg.includes("email not confirmed"))
    return "மின்னஞ்சல் உறுதிப்படுத்தப்படவில்லை. Supabase-இல் உறுதிப்படுத்தவும்.";
  if (msg.includes("too many requests") || error.status === 429)
    return "அதிக முயற்சிகள். சிறிது நேரம் கழித்து முயற்சிக்கவும்.";
  if (msg.includes("network") || msg.includes("fetch"))
    return "இணைய பிழை. இணைப்பை சரிபார்க்கவும்.";

  return "உள்நுழைவதில் பிழை: " + error.message;
};

const Login = () => {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

  const { login, user } = useAuth();
  const navigate        = useNavigate();

  useEffect(() => {
    if (user) navigate("/admin", { replace: true });
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email.trim(), password);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(getErrorMsg(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3eaf7] flex flex-col items-center justify-center px-4">
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center mb-7">
          <div
            className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl shadow"
            style={{ backgroundColor: "rgb(106, 27, 154)" }}
          >
            🔒
          </div>
          <h1 className="text-xl font-semibold text-purple-800">
            நிர்வாக உள்நுழைவு
          </h1>
          <p className="text-xs text-gray-400 mt-1">Admin Login</p>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div
              key="err"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 mb-5 leading-relaxed"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">மின்னஞ்சல்</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@email.com"
              required
              disabled={loading}
              autoComplete="email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition disabled:opacity-60"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">கடவுச்சொல்</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              required
              disabled={loading}
              autoComplete="current-password"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition disabled:opacity-60"
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full text-white py-3 rounded-xl text-sm font-medium disabled:opacity-70 flex items-center justify-center gap-2 mt-1"
            style={{ backgroundColor: "rgb(106, 27, 154)" }}
            whileHover={!loading ? { opacity: 0.88 } : {}}
            whileTap={!loading ? { scale: 0.97 } : {}}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10"
                    stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                உள்நுழைகிறது...
              </>
            ) : "உள்நுழை"}
          </motion.button>
        </form>
      </motion.div>

      <p className="text-xs text-gray-400 mt-5">
        பரிசுத்த தோமா ஆலயம் — நிர்வாக குழு
      </p>
    </div>
  );
};

export default Login;
