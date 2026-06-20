import PageHero from "@/components/konaklama/PageHero";
import ReservationForm from "@/components/iletisim/ReservationForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "İletişim & Rezervasyon — EsmaApart Adrasan",
  description: "EsmaApart'ta rezervasyon yapmak için WhatsApp veya formumuzu kullanın. Adrasan, Kumluca, Antalya.",
};

const IG_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const FB_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const contactDetails = [
  { icon: MapPin, label: "Adres", value: "Adrasan, Kumluca, Antalya, Türkiye", href: undefined, customIcon: undefined },
  { icon: Phone, label: "Telefon", value: "+90 538 399 96 18", href: "tel:+905383999618", customIcon: undefined },
  { icon: Mail, label: "E-posta", value: "info@esmaapart.com", href: "mailto:info@esmaapart.com", customIcon: undefined },
  { icon: Clock, label: "Instagram", value: "@apartesma", href: "https://www.instagram.com/apartesma/", customIcon: IG_ICON },
  { icon: Clock, label: "Facebook", value: "EsmaApart", href: "https://www.facebook.com/profile.php?id=61550638682830", customIcon: FB_ICON },
  { icon: Clock, label: "Yanıt Süresi", value: "Genellikle 2 saat içinde", href: undefined, customIcon: undefined },
];

const WA_ICON = (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function IletisimPage() {
  return (
    <>
      <PageHero
        tag="İletişim & Rezervasyon"
        title="Rezervasyon Yapın"
        subtitle="WhatsApp ya da formu kullanarak anında rezervasyon sorgulayın."
        image="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1600&q=80&auto=format"
      />

      <section className="py-10 px-4 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left: Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* WhatsApp CTA card */}
            <div className="glass-sand rounded-3xl p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B3A2D]/8 border border-[#1B3A2D]/12 mb-4 w-fit">
                <span className="w-1 h-1 rounded-full bg-[#C4873A]" />
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#1B3A2D]/65">Hızlı İletişim</span>
              </div>
              <h2 className="font-heading text-2xl text-[#1B3A2D] mb-2">Bize Ulaşın</h2>
              <p className="font-body text-[#5C4A3C] text-sm leading-relaxed mb-5">
                En hızlı yanıt için WhatsApp tercih edilir. Forma gelen talepler de aynı gün yanıtlanır.
              </p>

              <a
                href="https://wa.me/905383999618?text=Merhaba%2C%20rezervasyon%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#1B3A2D] hover:bg-[#2D5441] text-white transition-all duration-200 cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                  {WA_ICON}
                </div>
                <div>
                  <p className="font-body text-xs text-white/55 mb-0.5">Anında Yanıt</p>
                  <p className="font-heading text-base text-white">WhatsApp ile Yazın</p>
                </div>
              </a>
            </div>

            {/* Contact details card */}
            <div className="glass-sand rounded-3xl p-6 flex flex-col gap-4">
              {contactDetails.map(({ icon: Icon, label, value, href, customIcon }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1B3A2D]/8 flex items-center justify-center shrink-0">
                    {customIcon ?? <Icon size={15} className="text-[#1B3A2D]" />}
                  </div>
                  <div>
                    <p className="font-body text-[10px] tracking-widest uppercase text-[#9A7E6A] mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-body text-sm text-[#3D3028] hover:text-[#1B3A2D] transition-colors cursor-pointer">{value}</a>
                    ) : (
                      <p className="font-body text-sm text-[#3D3028]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="glass-sand rounded-3xl p-6 md:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B3A2D]/8 border border-[#1B3A2D]/12 mb-4 w-fit">
                <span className="w-1 h-1 rounded-full bg-[#C4873A]" />
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#1B3A2D]/65">Rezervasyon Formu</span>
              </div>
              <h2 className="font-heading text-2xl text-[#1B3A2D] mb-7">Rezervasyon Talebi</h2>
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 pb-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.45!2d30.4318483!3d36.3344761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c23ba3a604ac0b:0x8d2c732bce2c6d80!2sADRASAN+ESMA+APART!5e0!3m2!1str!2str!4v1718870000000!5m2!1str!2str"
              className="w-full h-full border-0 grayscale opacity-80"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EsmaApart Konum"
            />
          </div>
        </div>
      </section>
    </>
  );
}
