import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabase";

const AuthContext = createContext(null);
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user,    setUser]    = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* Load existing session on mount */
    supabase.auth.getSession().then(({ data: { session } }) => {
      const u = session?.user ?? null;
      if (u && u.email !== ADMIN_EMAIL) {
        supabase.auth.signOut();
        setUser(null);
      } else {
        setUser(u);
      }
      setLoading(false);
    });

    /* Keep in sync with auth state changes */
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const u = session?.user ?? null;
        if (u && u.email !== ADMIN_EMAIL) {
          supabase.auth.signOut();
          setUser(null);
        } else {
          setUser(u);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;

    /* Extra guard: block non-admin accounts */
    if (data.user?.email !== ADMIN_EMAIL) {
      await supabase.auth.signOut();
      const err      = new Error("not-admin");
      err.code       = "not-admin";
      throw err;
    }
    return data;
  };

  const logout = () => supabase.auth.signOut();

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
