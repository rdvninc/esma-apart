"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  accommodation: string;
  checkin: string;
  checkout: string;
  guests: string;
  notes: string;
};

const accommodationOptions = [
  { value: "", label: "Konaklama türü seçin..." },
  { value: "villa", label: "Lüks Villa (Özel Havuz)" },
  { value: "aframe-1", label: "A-Frame Bungalov 1 (Jakuzi)" },
  { value: "aframe-2", label: "A-Frame Bungalov 2 (Jakuzi)" },
  { value: "kabin-1", label: "Ahşap Bungalov 1" },
  { value: "kabin-2", label: "Ahşap Bungalov 2" },
  { value: "kabin-3", label: "Ahşap Bungalov 3" },
  { value: "kabin-4", label: "Ahşap Bungalov 4" },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-[#DDD0C4]/80 focus:border-[#1B3A2D]/50 focus:bg-white/90 focus:outline-none font-body text-sm text-[#1A1410] placeholder:text-[#9A7E6A]/70 transition-all duration-200";

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    console.log("Form:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-sand rounded-3xl flex flex-col items-center justify-center text-center py-16 px-8 gap-5">
        <div className="w-16 h-16 rounded-full bg-[#2D5441]/12 flex items-center justify-center">
          <CheckCircle size={32} className="text-[#2D5441]" />
        </div>
        <h3 className="font-heading text-2xl text-[#1B3A2D]">Talebiniz Alındı</h3>
        <p className="font-body text-[#5C4A3C] max-w-sm leading-relaxed text-sm">
          En kısa sürede sizinle iletişime geçeceğiz. Hızlı yanıt için WhatsApp'tan da ulaşabilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="fullName" className="block font-body text-xs tracking-widest uppercase text-[#5C4A3C]/80 mb-1.5">
          Ad Soyad <span className="text-[#C4873A]">*</span>
        </label>
        <input id="fullName" type="text" placeholder="Adınız ve soyadınız" className={inputClass}
          {...register("fullName", { required: "Ad soyad zorunludur." })} />
        {errors.fullName && <p className="font-body text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block font-body text-xs tracking-widest uppercase text-[#5C4A3C]/80 mb-1.5">
            E-posta <span className="text-[#C4873A]">*</span>
          </label>
          <input id="email" type="email" placeholder="ornek@email.com" className={inputClass}
            {...register("email", {
              required: "E-posta zorunludur.",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Geçerli bir e-posta girin." },
            })} />
          {errors.email && <p className="font-body text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block font-body text-xs tracking-widest uppercase text-[#5C4A3C]/80 mb-1.5">
            Telefon
          </label>
          <input id="phone" type="tel" placeholder="+90 5xx xxx xx xx" className={inputClass}
            {...register("phone")} />
        </div>
      </div>

      {/* Accommodation */}
      <div>
        <label htmlFor="accommodation" className="block font-body text-xs tracking-widest uppercase text-[#5C4A3C]/80 mb-1.5">
          Konaklama Türü <span className="text-[#C4873A]">*</span>
        </label>
        <select id="accommodation" className={`${inputClass} cursor-pointer`}
          {...register("accommodation", { required: "Lütfen konaklama türü seçin." })}>
          {accommodationOptions.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        {errors.accommodation && <p className="font-body text-xs text-red-500 mt-1">{errors.accommodation.message}</p>}
      </div>

      {/* Dates + Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="checkin" className="block font-body text-xs tracking-widest uppercase text-[#5C4A3C]/80 mb-1.5">
            Giriş <span className="text-[#C4873A]">*</span>
          </label>
          <input id="checkin" type="date" className={`${inputClass} cursor-pointer`}
            {...register("checkin", { required: "Giriş tarihi seçin." })} />
          {errors.checkin && <p className="font-body text-xs text-red-500 mt-1">{errors.checkin.message}</p>}
        </div>
        <div>
          <label htmlFor="checkout" className="block font-body text-xs tracking-widest uppercase text-[#5C4A3C]/80 mb-1.5">
            Çıkış <span className="text-[#C4873A]">*</span>
          </label>
          <input id="checkout" type="date" className={`${inputClass} cursor-pointer`}
            {...register("checkout", { required: "Çıkış tarihi seçin." })} />
          {errors.checkout && <p className="font-body text-xs text-red-500 mt-1">{errors.checkout.message}</p>}
        </div>
        <div>
          <label htmlFor="guests" className="block font-body text-xs tracking-widest uppercase text-[#5C4A3C]/80 mb-1.5">
            Misafir
          </label>
          <select id="guests" className={`${inputClass} cursor-pointer`} {...register("guests")}>
            {["1", "2", "3", "4", "5", "6+"].map((n) => (
              <option key={n} value={n}>{n} kişi</option>
            ))}
          </select>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block font-body text-xs tracking-widest uppercase text-[#5C4A3C]/80 mb-1.5">
          Notlar & Özel İstekler
        </label>
        <textarea id="notes" rows={4} placeholder="Özel taleplerinizi buraya yazabilirsiniz..." className={`${inputClass} resize-none`}
          {...register("notes")} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1B3A2D] hover:bg-[#2D5441] disabled:opacity-60 text-white font-body text-sm font-medium tracking-wide shadow-md shadow-[#1B3A2D]/20 hover:shadow-[#1B3A2D]/35 transition-all duration-220 cursor-pointer self-start"
      >
        {isSubmitting
          ? <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          : <Send size={14} />}
        {isSubmitting ? "Gönderiliyor..." : "Talep Gönder"}
      </button>
    </form>
  );
}
