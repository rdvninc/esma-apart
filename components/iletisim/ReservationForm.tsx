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
    await new Promise((r) => setTimeout(r, 600));

    const konaklama = accommodationOptions.find((o) => o.value === data.accommodation)?.label ?? data.accommodation;

    const mesaj = [
      "*YENİ REZERVASYON TALEBİ*",
      "----------------------------",
      `*Ad Soyad:* ${data.fullName}`,
      `*E-posta:* ${data.email}`,
      `*Telefon:* ${data.phone || "Belirtilmedi"}`,
      "----------------------------",
      `*Konaklama:* ${konaklama}`,
      `*Giris:* ${data.checkin}`,
      `*Cikis:* ${data.checkout}`,
      `*Misafir Sayisi:* ${data.guests || "1"} kisi`,
      data.notes ? `\n*Notlar:* ${data.notes}` : "",
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/905383999618?text=${encodeURIComponent(mesaj)}`;
    window.open(url, "_blank");
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
          WhatsApp mesajınız gönderildi. En kısa sürede size dönüş yapacağız.
        </p>
        <a
          href="https://wa.me/905383999618"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body text-sm font-medium transition-colors duration-200 cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp&apos;ı Aç
        </a>
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
