"use client";

import { motion } from "motion/react";
import { Home, Database, Globe, ShieldCheck, ArrowRight } from "lucide-react";
import { useTheme, palette, ThemeToggle } from "../components/theme";

const URLS = {
  home: process.env.NEXT_PUBLIC_HOME_URL ?? "http://localhost:3000",
  site1: process.env.NEXT_PUBLIC_SITE1_URL ?? "http://localhost:3001",
  site2: process.env.NEXT_PUBLIC_SITE2_URL ?? "http://localhost:3002",
  admin: process.env.NEXT_PUBLIC_ADMIN_URL ?? "http://localhost:8080",
  site1Access: process.env.NEXT_PUBLIC_SITE1_ACCESS_URL ?? "site1.idk.com",
  site2Access: process.env.NEXT_PUBLIC_SITE2_ACCESS_URL ?? "site2.idk.com",
  // Admin gateway entry — clicking Admin Console opens Site 1 through this route
  adminGateway: process.env.NEXT_PUBLIC_ADMIN_GATEWAY ?? "http://192.168.99.167:8080",
};

const mono: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', 'SFMono-Regular', Menlo, Consolas, monospace",
};

function hostOfUrl(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function DestCard({
  href,
  icon,
  tag,
  title,
  desc,
  foot,
  highlight,
  footAccent,
  index,
}: {
  href: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  foot: React.ReactNode;
  highlight?: boolean;
  footAccent?: boolean;
  index?: number;
}) {
  const { theme } = useTheme();
  const c = palette[theme];
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 + (index ?? 0) * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: c.surface,
        border: `1px solid ${c.border}`,
        borderTop: highlight ? "2px solid #6d5cff" : `1px solid ${c.border}`,
        borderRadius: 12,
        padding: 20,
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        minHeight: 210,
        boxShadow: highlight ? "0 10px 30px rgba(109,92,255,0.12)" : "0 4px 16px rgba(15,23,42,0.04)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: highlight ? "rgba(109,92,255,0.08)" : c.pill,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: highlight ? "#6d5cff" : c.muted,
          }}
        >
          {icon}
        </span>
        <span
          style={{
            fontSize: 11,
            background: highlight ? "rgba(109,92,255,0.10)" : c.pill,
            color: highlight ? "#6d5cff" : c.soft,
            borderRadius: 999,
            padding: "4px 10px",
            ...mono,
          }}
        >
          {tag}
        </span>
      </div>
      <h3 style={{ margin: "16px 0 6px", fontSize: 15 }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: c.soft, flex: 1 }}>{desc}</p>
      <div
        style={{
          marginTop: 16,
          paddingTop: 12,
          borderTop: `1px solid ${c.borderSoft}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 11,
          color: footAccent ? "#6d5cff" : c.soft,
          ...mono,
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>{foot}</span>
        <ArrowRight size={14} />
      </div>
    </motion.a>
  );
}

export default function Page() {
  const { theme } = useTheme();
  const c = palette[theme];
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:
          `radial-gradient(50% 35% at 30% 15%, rgba(168,85,247,0.10), transparent 60%), radial-gradient(45% 35% at 75% 80%, rgba(59,130,246,0.08), transparent 60%), ${c.page}`,
        color: c.text,
      }}
    >
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 32px" }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              background: "#1e1b4b",
              color: "#fff",
              borderRadius: 6,
              padding: "4px 10px",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              ...mono,
            }}
          >
            IDK
          </span>
          <span style={{ lineHeight: 1.2 }}>
            <span style={{ display: "block", fontSize: 13, fontWeight: 700 }}>IDK Portal</span>
            <span style={{ display: "block", fontSize: 10, letterSpacing: 1, color: c.faint }}>WORKSPACE DIRECTORY</span>
          </span>
        </span>
        <ThemeToggle />
      </motion.div>

      {/* center */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
          style={{
            fontSize: 11,
            letterSpacing: 1,
            color: "#6d5cff",
            background: "rgba(109,92,255,0.07)",
            borderRadius: 999,
            padding: "6px 14px",
            ...mono,
          }}
        >
          • SINGLE SIGN-ON GATEWAY
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
          style={{ fontSize: 32, fontWeight: 600, margin: "14px 0 8px", letterSpacing: -0.5 }}
        >
          Select Destination
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
          style={{ color: c.soft, fontSize: 13, maxWidth: 480, textAlign: "center", margin: 0, lineHeight: 1.6 }}
        >
          Choose an authorized service node or access dashboard below to proceed with your authenticated session.
        </motion.p>

        <div
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 14,
            width: "min(880px, 100%)",
          }}
        >
          <DestCard
            href={URLS.home}
            index={0}
            icon={<Home size={16} />}
            tag="Main"
            title="Home"
            desc="Return to main landing hub and account overview."
            foot="index.html"
          />
          <DestCard
            href={URLS.site1}
            index={1}
            icon={<Database size={16} />}
            tag="Primary"
            title="Site 1"
            desc={`Primary live node at ${URLS.site1Access} & active simulation instance.`}
            foot={URLS.site1Access}
          />
          <DestCard
            href={URLS.site2}
            index={2}
            icon={<Globe size={16} />}
            tag="Secondary"
            title="Site 2"
            desc={`Secondary application node at ${URLS.site2Access} & replicated fallback service.`}
            foot={URLS.site2Access}
          />
          <DestCard
            href={`${URLS.site1}/?via=${encodeURIComponent(URLS.adminGateway)}`}
            index={3}
            icon={<ShieldCheck size={16} />}
            tag=":8080"
            title="Admin Console"
            desc={`Enter Site 1 through the admin gateway route.`}
            foot={hostOfUrl(URLS.adminGateway)}
            highlight
            footAccent
          />
        </div>
      </div>

      {/* footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 32px",
          fontSize: 11,
          color: c.soft,
          ...mono,
        }}
      >
        <span>
          IDK Simulator Access Portal <span style={{ color: c.faintest }}>/ v2.4.0</span>
        </span>
        <span>
          <span style={{ color: "#10b981" }}>•</span> Protected by local gateway{" "}
          <span style={{ color: c.faint }}>· :8080 Restricted Access</span>
        </span>
      </motion.div>
    </div>
  );
}
