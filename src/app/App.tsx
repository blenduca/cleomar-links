import { motion } from "motion/react";
import svgPaths from "../imports/ExpertHubPaginaDeLinks/svg-d2oc7gn16t";
import imgContainer from "figma:asset/acecbb15544a706eea19a431dad10cbaa2dfb7e1.png";

// ─── Arrow Icon ──────────────────────────────────────────────────────────────
function ArrowIcon({ color = "#102640" }: { color?: string }) {
  return (
    <svg
      className="block"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 13.3333 13.3333"
    >
      <path
        d={svgPaths.p19aed710}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
  );
}

// ─── Arrow Button ─────────────────────────────────────────────────────────────
function ArrowButton({ dark = false }: { dark?: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center justify-center rounded-full size-10 shrink-0 cursor-pointer ${dark
        ? "bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)]"
        : "bg-[rgba(16,38,64,0.1)] border border-[rgba(16,38,64,0.18)]"
        }`}
    >
      <ArrowIcon color={dark ? "white" : "#102640"} />
    </motion.div>
  );
}

// ─── Category Badge ───────────────────────────────────────────────────────────
function Badge({
  label,
  dark = false,
}: {
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`w-fit inline-flex items-center px-4 py-1.5 rounded-full border text-[11px] sm:text-[13px] uppercase tracking-wider ${dark
        ? "bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.18)] text-[#b3b3b3]"
        : "bg-[rgba(16,38,64,0.1)] border-[rgba(16,38,64,0.18)] text-[#102640]"
        }`}
      style={{ fontFamily: "'Mohave', sans-serif", fontWeight: 700, letterSpacing: "-0.65px" }}
    >
      {label}
    </div>
  );
}

// ─── Diagonal Decoration Lines ────────────────────────────────────────────────
function DiagonalLines({ color = "#102640" }: { color?: string }) {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-[160px] overflow-hidden pointer-events-none rounded-r-[16px]">
      <div
        className="absolute top-0 bottom-0"
        style={{
          right: "48px",
          width: "3px",
          background: color,
          opacity: 0.15,
          transform: "rotate(17.54deg) skewX(-5.21deg)",
          transformOrigin: "center",
          height: "120%",
          top: "-10%",
        }}
      />
      <div
        className="absolute"
        style={{
          right: "28px",
          width: "5px",
          background: color,
          opacity: 0.3,
          transform: "rotate(17.54deg) skewX(-5.21deg)",
          transformOrigin: "center",
          height: "120%",
          top: "-10%",
        }}
      />
    </div>
  );
}

// ─── Banner Card ─────────────────────────────────────────────────────────────
interface BannerProps {
  href: string;
  bg: string;
  badge: string;
  badgeDark?: boolean;
  titleLight: string;
  titleBold: string;
  titleLightColor: string;
  titleBoldColor: string;
  description: string;
  descriptionColor: string;
  decorationColor: string;
  dark?: boolean;
  cta?: React.ReactNode;
}

function BannerCard({
  href,
  bg,
  badge,
  badgeDark = false,
  titleLight,
  titleBold,
  titleLightColor,
  titleBoldColor,
  description,
  descriptionColor,
  decorationColor,
  dark = false,
  cta,
}: BannerProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full max-w-[700px] rounded-2xl overflow-hidden cursor-pointer block"
      style={{ background: bg, border: "0.875px solid rgba(255,255,255,0.05)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="relative flex items-end justify-between p-6 sm:p-8 md:p-10 overflow-hidden">
        {/* Content */}
        <div className="flex flex-col gap-4 sm:gap-5 flex-1 min-w-0 pr-4">
          {badge && <Badge label={badge} dark={badgeDark} />}
          <div className="flex flex-col gap-1 sm:gap-2 uppercase">
            <p
              className="leading-none"
              style={{
                fontFamily: "'Mohave', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(22px, 5vw, 40px)",
                color: titleLightColor,
                letterSpacing: "-0.05em",
                lineHeight: "1.1",
              }}
            >
              {titleLight}
            </p>
            <p
              className="leading-none"
              style={{
                fontFamily: "'Mohave', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 9vw, 80px)",
                color: titleBoldColor,
                letterSpacing: "-0.05em",
                lineHeight: "0.9",
              }}
            >
              {titleBold}
            </p>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: descriptionColor,
              lineHeight: "1.5",
              maxWidth: "420px",
            }}
          >
            {description}
          </p>
        </div>

        {/* CTA or Arrow */}
        <div className="shrink-0 z-10 self-end">
          {cta || <ArrowButton dark={dark} />}
        </div>

        {/* Diagonal decoration */}
        <DiagonalLines color={decorationColor} />
      </div>
    </motion.a>
  );
}

// ─── WhatsApp Button ──────────────────────────────────────────────────────────
function WhatsAppButton() {
  return (
    <motion.div
      className="flex items-center gap-3 bg-[rgba(37,211,102,0.1)] border-2 border-[rgba(37,211,102,0.18)] rounded-full px-5 py-3 shrink-0 cursor-pointer"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(37,211,102,0.18)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 31.7912 31.9429"
        className="shrink-0"
      >
        <path d={svgPaths.pc417d00} fill="#25D366" />
      </svg>
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          color: "white",
          whiteSpace: "nowrap",
        }}
      >
        WhatsApp
      </span>
    </motion.div>
  );
}

// ─── Social Icon Button ────────────────────────────────────────────────────────
function SocialButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center size-10 rounded-full bg-[rgba(235,105,49,0.2)] border border-[rgba(235,105,49,0.3)] cursor-pointer"
      whileHover={{
        scale: 1.15,
        backgroundColor: "rgba(235,105,49,0.35)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
}

// ─── Instagram Icon ───────────────────────────────────────────────────────────
function InstagramIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <g clipPath="url(#ig-clip)">
        <path
          d={svgPaths.p299a6200}
          stroke="#EB6931"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d={svgPaths.p3cad6d80}
          stroke="#EB6931"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M13.125 4.875H13.1325"
          stroke="#EB6931"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="ig-clip">
          <rect fill="white" height="18" width="18" />
        </clipPath>
      </defs>
    </svg>
  );
}

// ─── LinkedIn Icon ────────────────────────────────────────────────────────────
function LinkedInIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <path
        d={svgPaths.p204bd7c0}
        stroke="#EB6931"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.pad25e80}
        stroke="#EB6931"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p127a4d00}
        stroke="#EB6931"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}


// ─── Facebook Icon ────────────────────────────────────────────────────────────
function FacebookIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <path
        d={svgPaths.p3c358280}
        stroke="#EB6931"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center"
      style={{
        background: "linear-gradient(90deg, #0c1b2e 0%, #0c1b2e 100%)",
      }}
    >
      {/* ── Profile Section ────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-4 pt-16 pb-2 px-4 w-full max-w-[700px]">
        {/* Avatar */}
        <motion.div
          className="relative shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="size-[140px] sm:size-[160px] rounded-full overflow-hidden relative">
            <img
              src={imgContainer}
              alt="Cleomar Tenedini"
              className="absolute w-[135%] h-[203%] max-w-none"
              style={{ left: "-21.4%", top: "-17.87%" }}
            />
          </div>
          {/* Orange ring */}
          <div className="absolute inset-0 rounded-full border-[3.6px] border-[rgba(235,105,49,0.3)] shadow-lg pointer-events-none" />
        </motion.div>

        {/* Name */}
        <motion.div
          className="flex flex-col items-center gap-2 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <p
            className="uppercase tracking-wide"
            style={{
              fontFamily: "'Mohave', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(22px, 6vw, 30px)",
              letterSpacing: "0.4px",
            }}
          >
            <span style={{ color: "white" }}>Cleomar </span>
            <span style={{ color: "#eb6931" }}>Tenedini</span>
          </p>
          <p
            className="max-w-[380px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "white",
              lineHeight: "1.65",
              letterSpacing: "-0.3px",
            }}
          >
            Consultoria e treinamento para empresas que querem escalar vendas.
            +15 anos em vendas consultivas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
            {["CONSULTORIA B2B", "VENDA CONSULTIVA", "ALTA PERFORMANCE"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-[rgba(235,105,49,0.2)] border border-[rgba(235,105,49,0.3)]"
                style={{
                  fontFamily: "'Mohave', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#eb6931",
                  letterSpacing: "0.04em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Banner Cards ───────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-6 w-full max-w-[700px] px-4 mt-8">
        {/* Banner 1 – Terapia de Vendas (dark) */}
        <BannerCard
          href="https://v0-cleomar-tenedini.vercel.app/"
          bg="linear-gradient(142.244deg, rgb(15,38,69) 0%, rgb(10,28,51) 100%)"
          badge="Comunidade"
          badgeDark
          titleLight="terapia"
          titleBold="de vendas"
          titleLightColor="#b3b3b3"
          titleBoldColor="white"
          description="Pare de vender! Comece a gerar valor. Junte-se à Terapia de Vendas: a comunidade gratuita que transforma pressão em performance."
          descriptionColor="#b3b3b3"
          decorationColor="#e86820"
          dark
        />

        {/* Banner 2 – Fale com o Cleomar / WhatsApp (dark) */}
        <BannerCard
          href="https://wa.me/5549999773055"
          bg="linear-gradient(148.782deg, rgb(15,38,69) 0%, rgb(10,28,51) 100%)"
          badge=""
          badgeDark
          titleLight="Fale com o"
          titleBold="cleomar"
          titleLightColor="#b3b3b3"
          titleBoldColor="white"
          description="Diagnóstico comercial gratuito!"
          descriptionColor="#b3b3b3"
          decorationColor="#e86820"
          dark
          cta={<WhatsAppButton />}
        />

        {/* Banner 3 – Academia de Vendas (orange) */}
        <BannerCard
          href="https://wa.me/5549999773055?text=Ol%C3%A1%2C%20gostaria%20de%20participar%20da%20Academia%20de%20Vendas."
          bg="#e86820"
          badge="Consultoria · In-company"
          titleLight="Academia de"
          titleBold="vendas"
          titleLightColor="#102640"
          titleBoldColor="#102640"
          description="Consultoria em vendas consultivas com programa in-company para capacitar representantes comerciais dentro da sua empresa."
          descriptionColor="#102640"
          decorationColor="#102640"
        />

        {/* Banner 4 – Tenedini Representações (orange) */}
        <BannerCard
          href="https://wa.me/5549999773055"
          bg="#e86820"
          badge="Representações"
          titleLight="tenedini"
          titleBold="representações"
          titleLightColor="#102640"
          titleBoldColor="#102640"
          description="Serviços de Representação de Vendas Complexas."
          descriptionColor="#102640"
          decorationColor="#102640"
        />
      </div>

      {/* ── Footer / Social ────────────────────────────────────────────────── */}
      <motion.div
        className="flex flex-col items-center gap-6 py-16 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p
          className="uppercase"
          style={{
            fontFamily: "'Mohave', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(20px, 5vw, 30px)",
            color: "#b3b3b3",
            letterSpacing: "0.4px",
            lineHeight: 1,
          }}
        >
          Tenedini{" "}
          <span
            style={{
              fontWeight: 700,
              color: "#eb6930",
            }}
          >
            soluções
          </span>
        </p>
        <div className="flex items-center gap-4">
          <SocialButton href="https://www.instagram.com/cleomar.tenedini/">
            <InstagramIcon />
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/in/cleomar-luiz-tenedini-656a09280">
            <LinkedInIcon />
          </SocialButton>
          <SocialButton href="https://www.facebook.com/cleomarluiz.tenedini">
            <FacebookIcon />
          </SocialButton>
        </div>
      </motion.div>
    </div>
  );
}
