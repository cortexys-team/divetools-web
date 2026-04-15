"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type State = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setState("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      const data = await res.json().catch(() => ({}));
      setErrorMsg(data.error ?? t("errorGeneric"));
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-12 gap-4"
      >
        <div className="w-14 h-14 rounded-full bg-dive-safe/10 flex items-center justify-center ring-1 ring-dive-safe/20">
          <svg viewBox="0 0 24 24" fill="none" stroke="#30D158" strokeWidth="2" className="w-7 h-7">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white">{t("successTitle")}</h3>
        <p className="text-sm text-dive-inactive max-w-xs">{t("successBody")}</p>
        <button
          onClick={() => setState("idle")}
          className="text-sm text-dive-aqua hover:underline mt-2"
        >
          {t("sendAnother")}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
            {t("name")}
          </label>
          <input
            type="text"
            value={form.name}
            onChange={update("name")}
            required
            placeholder={t("namePlaceholder")}
            className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-dive-aqua/40 focus:bg-white/6 transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
            {t("email")}
          </label>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            required
            placeholder={t("emailPlaceholder")}
            className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-dive-aqua/40 focus:bg-white/6 transition-all"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
          {t("message")}
        </label>
        <textarea
          value={form.message}
          onChange={update("message")}
          required
          rows={5}
          placeholder={t("messagePlaceholder")}
          className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-dive-aqua/40 focus:bg-white/6 transition-all resize-none"
        />
      </div>
      {state === "error" && (
        <p className="text-xs text-red-400">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full sm:w-auto bg-dive-aqua/10 hover:bg-dive-aqua/20 border border-dive-aqua/20 text-dive-aqua font-semibold text-sm px-8 py-3 rounded-full transition-all disabled:opacity-50 flex items-center gap-2"
      >
        {state === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            {t("sending")}
          </>
        ) : t("send")}
      </button>
    </form>
  );
}
