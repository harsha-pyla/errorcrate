import React from "react";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function TechIcon({ name, size = 16, className = "" }: TechIconProps) {
  const normName = name.toLowerCase();

  switch (normName) {
    case "home":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );


    /* ─── HTTP / Globe ─── */
    case "http-status":
    case "web":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" stroke="#0077D6" strokeWidth="1.8"/>
          <ellipse cx="12" cy="12" rx="4.5" ry="10" stroke="#0077D6" strokeWidth="1.8"/>
          <line x1="2" y1="12" x2="22" y2="12" stroke="#0077D6" strokeWidth="1.8"/>
          <line x1="4" y1="7" x2="20" y2="7" stroke="#0077D6" strokeWidth="1.2" opacity="0.5"/>
          <line x1="4" y1="17" x2="20" y2="17" stroke="#0077D6" strokeWidth="1.2" opacity="0.5"/>
        </svg>
      );

    /* ─── Node.js – hexagon with N ─── */
    case "nodejs":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2.5L3.5 7.25v9.5L12 21.5l8.5-4.75v-9.5L12 2.5z" fill="#339933" fillOpacity="0.15" stroke="#339933" strokeWidth="1.6" strokeLinejoin="round"/>
          <text x="12" y="15.5" textAnchor="middle" fill="#339933" fontSize="10" fontWeight="900" fontFamily="Arial, sans-serif">N</text>
        </svg>
      );

    /* ─── JavaScript – yellow square with JS ─── */
    case "javascript":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E"/>
          <text x="13.5" y="18" textAnchor="middle" fill="#000" fontSize="11" fontWeight="900" fontFamily="Arial, sans-serif">JS</text>
        </svg>
      );

    /* ─── React – atom orbits ─── */
    case "react":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(120 12 12)"/>
        </svg>
      );

    /* ─── Docker – whale with containers ─── */
    case "docker":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M13.5 2.5h-2v2h2v-2zm-3 0h-2v2h2v-2zm-3 0h-2v2h2v-2zm6 3h-2v2h2v-2zm-3 0h-2v2h2v-2zm-3 0h-2v2h2v-2zm-3 0h-2v2h2v-2zm6 3h-2v2h2v-2zm-3 0h-2v2h2v-2zm-3 0h-2v2h2v-2z" fill="#2496ED"/>
          <path d="M22.5 11.5c-.8-.4-1.7-.5-2.5-.3-.3-1-1.1-1.8-2-2H2v1c0 4.4 3.1 8 7.5 8 2.8 0 5.3-1.3 6.8-3.5.5.1 1 .1 1.5 0 .7-.2 1.3-.6 1.8-1 .8-.7 1.6-.6 2.3-.5l.6-1.7z" fill="#2496ED"/>
        </svg>
      );

    /* ─── Git – branch icon (clean & recognizable) ─── */
    case "git":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="7" cy="6" r="2.5" stroke="#F05032" strokeWidth="1.8" fill="#F05032" fillOpacity="0.15"/>
          <circle cx="17" cy="6" r="2.5" stroke="#F05032" strokeWidth="1.8" fill="#F05032" fillOpacity="0.15"/>
          <circle cx="7" cy="18" r="2.5" stroke="#F05032" strokeWidth="1.8" fill="#F05032" fillOpacity="0.15"/>
          <line x1="7" y1="8.5" x2="7" y2="15.5" stroke="#F05032" strokeWidth="1.8"/>
          <path d="M17 8.5v2c0 2.5-2 4.5-4.5 4.5H9.5" stroke="#F05032" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );

    /* ─── Linux – terminal prompt ─── */
    case "linux":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="3" width="20" height="18" rx="2.5" stroke="#333" strokeWidth="1.8" fill="#333" fillOpacity="0.06"/>
          <path d="M6 8l4 4-4 4" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="13" y1="16" x2="18" y2="16" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );

    /* ─── SQL – database cylinder ─── */
    case "sql":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="#336791" fillOpacity="0.15" stroke="#336791" strokeWidth="1.8"/>
          <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#336791" strokeWidth="1.8"/>
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="#336791" strokeWidth="1.8"/>
        </svg>
      );

    /* ─── Python – two interleaved snakes ─── */
    case "python":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2C9.2 2 7.5 3.2 7.5 5.5V8h5v1H6c-2.2 0-4 1.5-4 4.2 0 2.8 1.5 4.3 4 4.3h2v-2.7c0-2 1.7-3.8 3.8-3.8h4.4c1.5 0 2.8-1.3 2.8-2.8V5.5C19 3.2 17 2 14.2 2h-2.2z" fill="#3776AB"/>
          <path d="M12 22c2.8 0 4.5-1.2 4.5-3.5V16h-5v-1h6.5c2.2 0 4-1.5 4-4.2 0-2.8-1.5-4.3-4-4.3h-2v2.7c0 2-1.7 3.8-3.8 3.8H7.8c-1.5 0-2.8 1.3-2.8 2.8v4.7C5 21 7 22 9.8 22h2.2z" fill="#FFD43B"/>
          <circle cx="9" cy="5.5" r="1" fill="#fff"/>
          <circle cx="15" cy="18.5" r="1" fill="#fff"/>
        </svg>
      );

    /* ─── Kubernetes – ship wheel in hexagon ─── */
    case "kubernetes":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" fill="#326CE5" fillOpacity="0.12" stroke="#326CE5" strokeWidth="1.6" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="#326CE5" strokeWidth="1.6"/>
          <line x1="12" y1="5" x2="12" y2="9" stroke="#326CE5" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="12" y1="15" x2="12" y2="19" stroke="#326CE5" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="5.9" y1="8.5" x2="9.4" y2="10.5" stroke="#326CE5" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="14.6" y1="13.5" x2="18.1" y2="15.5" stroke="#326CE5" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="18.1" y1="8.5" x2="14.6" y2="10.5" stroke="#326CE5" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="9.4" y1="13.5" x2="5.9" y2="15.5" stroke="#326CE5" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      );

    /* ─── AWS – smile arrow ─── */
    case "aws":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M2 14.5c2.5 2 6.5 3 10 3s7.5-1 10-3" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M18 14l2.5 1-1 2.5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="12" y="12" textAnchor="middle" fill="#232F3E" fontSize="8" fontWeight="900" fontFamily="Arial, sans-serif">AWS</text>
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
  }
}
