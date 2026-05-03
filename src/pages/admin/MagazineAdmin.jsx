import React, { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from "../../supabase";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaEdit, FaTimes, FaFilePdf } from "react-icons/fa";
import AdminLayout from "../../components/AdminLayout";

const emptyForm = { month: "", title: "", description: "", file: null };

const StatusBanner = ({ status, onClose }) => {
  useEffect(() => {
    if (!status.msg) return;
    const id = setTimeout(onClose, 2000);
    return () => clearTimeout(id);
  }, [status.msg]); // eslint-disable-line react-hooks/exhaustive-deps

  return status.msg ? (
    <motion.div
      key="banner"
      initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3 }}
      className={`px-4 py-3 rounded-xl text-sm font-medium flex justify-between items-center ${
        status.type === "success"
          ? "bg-green-50 text-green-700 border border-green-200"
          : "bg-red-50 text-red-600 border border-red-200"
      }`}
    >
      <span className="flex items-center gap-2">
        {status.msg}
      </span>
      <button onClick={onClose} className="ml-3 opacity-50 hover:opacity-100 flex-shrink-0">
        <FaTimes size={11} />
      </button>
    </motion.div>
  ) : null;
};

const extractStoragePath = (url) => {
  if (!url) return null;
  const marker = "/object/public/uploads/";
  const idx = url.indexOf(marker);
  return idx === -1 ? null : url.slice(idx + marker.length);
};

const deleteFromStorage = async (urls = []) => {
  const paths = urls.map(extractStoragePath).filter(Boolean);
  if (paths.length === 0) return;
  const { error } = await supabase.storage.from("uploads").remove(paths);
  if (error) throw new Error("கோப்பு நீக்குவதில் பிழை: " + error.message);
};

const uploadFile = async (file, folder) => {
  const ext  = file.name.split(".").pop().toLowerCase();
  const path = `${folder}/${Date.now()}.${ext}`;
  const { data, error } = await supabase.storage
    .from("uploads")
    .upload(path, file, { cacheControl: "3600", upsert: false });
  if (error) throw new Error(error.message);
  const { data: { publicUrl } } = supabase.storage
    .from("uploads")
    .getPublicUrl(data.path);
  return publicUrl;
};

const MagazineAdmin = () => {
  const [items,     setItems]     = useState([]);
  const [dbLoading, setDbLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editItem,  setEditItem]  = useState(null);
  const [form,      setForm]      = useState(emptyForm);
  const [status,    setStatus]    = useState({ type: "", msg: "" });

  const formRef = useRef(null);
  const fileRef = useRef(null);

  const fetchItems = useCallback(async () => {
    setDbLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("type", "magazine")
      .order("created_at", { ascending: false });
    if (error) {
      setStatus({ type: "error", msg: "தரவு ஏற்றுவதில் பிழை: " + error.message });
    } else {
      setItems(data || []);
    }
    setDbLoading(false);
  }, []);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setStatus({ type: "", msg: "" });

    try {
      let fileUrl = editItem?.file_url ?? "";
      if (form.file) fileUrl = await uploadFile(form.file, "magazines");

      const payload = {
        type:        "magazine",
        month:       form.month.trim(),
        title:       form.title.trim(),
        description: form.description.trim(),
        file_url:    fileUrl,
      };

      if (editItem) {
        const { error } = await supabase.from("posts").update(payload).eq("id", editItem.id);
        if (error) throw error;
        setStatus({ type: "success", msg: "✓ வெற்றிகரமாக புதுப்பிக்கப்பட்டது!" });
      } else {
        const { error } = await supabase.from("posts").insert(payload);
        if (error) throw error;
        setStatus({ type: "success", msg: "✓ வெற்றிகரமாக சேர்க்கப்பட்டது!" });
      }
      resetForm();
      fetchItems();
    } catch (err) {
      setStatus({ type: "error", msg: "பிழை: " + err.message });
    } finally {
      setUploading(false);
    }
  };

  const startEdit = (item) => {
    setEditItem(item);
    setForm({ month: item.month, title: item.title, description: item.description ?? "", file: null });
    setStatus({ type: "", msg: "" });
    if (fileRef.current) fileRef.current.value = "";
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`"${item.title}" — இதை நிரந்தரமாக நீக்க விரும்புகிறீர்களா?`)) return;
    try {
      // 1️⃣ Delete file from Storage first
      await deleteFromStorage([item.file_url]);

      // 2️⃣ Delete the database record
      const { error } = await supabase.from("posts").delete().eq("id", item.id);
      if (error) throw new Error("பதிவு நீக்குவதில் பிழை: " + error.message);

      if (editItem?.id === item.id) resetForm();
      setStatus({ type: "success", msg: "✓ கோப்பு மற்றும் பதிவு நீக்கப்பட்டது." });
      fetchItems();
    } catch (err) {
      setStatus({ type: "error", msg: err.message });
    }
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditItem(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <AdminLayout title="நற்கந்தம் இதழ்">
      <div className="space-y-5 py-2" ref={formRef}>

        <AnimatePresence>
          <StatusBanner status={status} onClose={() => setStatus({ type: "", msg: "" })} />
        </AnimatePresence>

        {/* ── Form ───────────────────────────────────────── */}
        <motion.div
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-gray-800">
              {editItem ? "✏️ திருத்துக" : "➕ புதியது சேர்க்க"}
            </h2>
            {editItem && (
              <motion.button onClick={resetForm} whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-gray-600 p-1">
                <FaTimes />
              </motion.button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  மாதம் <span className="text-red-400">*</span>
                </label>
                <input type="text" value={form.month} required
                  onChange={(e) => setForm((f) => ({ ...f, month: e.target.value }))}
                  placeholder="எ.கா: ஜனவரி 2026"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  தலைப்பு <span className="text-red-400">*</span>
                </label>
                <input type="text" value={form.title} required
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder="இதழ் தலைப்பு"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">விளக்கம் (விரும்பினால்)</label>
              <textarea value={form.description} rows={2}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="சிறு விளக்கம்..."
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                இதழ் கோப்பு (PDF / படம்)
                {editItem?.file_url && (
                  <a href={editItem.file_url} target="_blank" rel="noreferrer"
                    className="ml-2 text-purple-500 text-xs hover:underline">↗ தற்போதையது</a>
                )}
              </label>
              <input type="file" ref={fileRef} accept=".pdf,.jpg,.jpeg,.png,.webp"
                onChange={(e) => setForm((f) => ({ ...f, file: e.target.files[0] ?? null }))}
                className="w-full text-sm text-gray-500
                  file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0
                  file:text-sm file:bg-purple-50 file:text-purple-700
                  hover:file:bg-purple-100 file:cursor-pointer file:transition" />
            </div>

            <div className="flex gap-3 pt-1">
              <motion.button type="submit" disabled={uploading}
                className="px-5 py-2.5 text-white text-sm rounded-xl disabled:opacity-60 flex items-center gap-2"
                style={{ backgroundColor: "rgb(106, 27, 154)" }}
                whileTap={{ scale: 0.97 }} whileHover={{ opacity: 0.88 }}>
                {uploading && (
                  <svg className="animate-spin h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10"
                      stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                )}
                {uploading ? "பதிவேற்றுகிறது..." : editItem ? "புதுப்பி" : "சேர்"}
              </motion.button>
              {editItem && (
                <button type="button" onClick={resetForm}
                  className="px-4 py-2.5 text-sm text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
                  ரத்து
                </button>
              )}
            </div>
          </form>
        </motion.div>

        {/* ── List ───────────────────────────────────────── */}
        <motion.div
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.08 }}
        >
          <div className="px-5 sm:px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800 text-sm">
              பதிவேற்றப்பட்டவை ({items.length})
            </h2>
          </div>

          {dbLoading ? (
            <div className="p-10 text-center text-gray-400 text-sm animate-pulse">ஏற்றுகிறது…</div>
          ) : items.length === 0 ? (
            <div className="p-10 text-center text-gray-400 text-sm">
              <p className="text-3xl mb-2">📭</p>இன்னும் எந்த இதழும் சேர்க்கப்படவில்லை.
            </div>
          ) : (
            <ul className="divide-y divide-gray-50">
              {items.map((item) => (
                <li key={item.id}
                  className={`px-5 sm:px-6 py-4 flex items-start sm:items-center justify-between gap-4 transition ${
                    editItem?.id === item.id
                      ? "bg-purple-50 border-l-4 border-purple-500"
                      : "hover:bg-gray-50/60"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-800 text-sm truncate">{item.title}</p>
                    <p className="text-xs text-purple-600 mt-0.5">{item.month}</p>
                    {item.description && (
                      <p className="text-xs text-gray-400 mt-0.5 truncate">{item.description}</p>
                    )}
                    {item.file_url && (
                      <a href={item.file_url} target="_blank" rel="noreferrer"
                        className="text-xs text-gray-400 hover:text-purple-600 flex items-center gap-1 mt-1.5 hover:underline transition w-fit">
                        <FaFilePdf size={10} /> இதழ்
                      </a>
                    )}
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0">
                    <motion.button onClick={() => startEdit(item)} whileTap={{ scale: 0.88 }}
                      className="p-2.5 text-blue-500 hover:bg-blue-50 rounded-xl transition min-w-[38px] min-h-[38px] flex items-center justify-center">
                      <FaEdit size={13} />
                    </motion.button>
                    <motion.button onClick={() => handleDelete(item)} whileTap={{ scale: 0.88 }}
                      className="p-2.5 text-red-400 hover:bg-red-50 rounded-xl transition min-w-[38px] min-h-[38px] flex items-center justify-center">
                      <FaTrash size={13} />
                    </motion.button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </AdminLayout>
  );
};

export default MagazineAdmin;
