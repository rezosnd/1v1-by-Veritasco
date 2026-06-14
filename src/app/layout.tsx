import LiquidMetalButton from "@/components/LiquidMetalButton";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VeritasCo 1v1 | Competitive Coding",
  description: "Real-time competitive coding platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&display=swap" rel="stylesheet" />
        <link href="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/css/billodesign.webflow.shared.ed7e29851.css" rel="stylesheet" type="text/css" />
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js" suppressHydrationWarning></script>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (min-width:992px) {
            html.w-mod-js:not(.w-mod-ix) [data-w-id="82b43a68-3da9-2389-02ed-e46febcbf892"] {opacity:0;}
            html.w-mod-js:not(.w-mod-ix) [data-w-id="574b060d-8e30-5804-55ce-346124f0a1e7"] {opacity:0;}
            html.w-mod-js:not(.w-mod-ix) [data-w-id="e1e4db0b-23cf-1a78-5d15-3826765d8090"] {opacity:0;}
          }
          /* Force hide the preloader that gets stuck on refresh */
          .c-preloader { display: none !important; }
          .page-wrapper { opacity: 1 !important; visibility: visible !important; }
          
          /* Hide the Webflow native navbar since we have our custom one */
          .w-nav { display: none !important; }

          /* Filter to make the 3D element purple */
          spline-viewer {
            filter: hue-rotate(60deg) saturate(1.5) contrast(1.1);
          }
        ` }} />
        <script type="module" src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"></script>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet" />
        <script type="module" dangerouslySetInnerHTML={{ __html: `
            import { liquidMetalFragmentShader, ShaderMount } from "https://esm.sh/@paper-design/shaders";
            window.PaperShaders = { liquidMetalFragmentShader, ShaderMount };
          `}} />
      </head>
      <body className={`font-inter antialiased bg-[#050816] text-white min-h-screen`} suppressHydrationWarning>
        
        {/* Modern Rounded Navbar (CodeHelp Style) */}
        <div className="fixed top-5 left-1/2 -translate-x-1/2 w-full max-w-6xl z-[9999] px-4 pointer-events-none">
          <div className="flex items-center justify-between px-5 py-2.5 bg-[#050816]/50 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(123,97,255,0.1)] pointer-events-auto transition-all">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300" suppressHydrationWarning>
              <img src="/veritasco.png" alt="VeritasCo Logo" className="w-8 h-8 object-contain" />
              <span className="font-sora font-bold text-xl tracking-tight text-white">VeritasCo<span className="text-[#7B61FF] glitch-hover inline-block">1v1</span></span>
            </a>

            {/* Nav Links */}
            <div className="hidden md:flex flex-row items-center justify-center gap-6 text-sm font-sora font-medium tracking-wide">
              <a href="/arena" className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300" suppressHydrationWarning>Arena</a>
              <a href="/problems" className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300" suppressHydrationWarning>Problems</a>
              <a href="/leaderboard" className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300" suppressHydrationWarning>Leaderboard</a>
              <a href="/pricing" className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300" suppressHydrationWarning>Pricing</a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <a href="/login" className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300" suppressHydrationWarning>Login</a>
              <a href="/signup"><LiquidMetalButton className="px-5 py-2 text-sm">Sign Up</LiquidMetalButton></a>
            </div>
          </div>
        </div>

        <div id="webflow-root" className="min-h-screen">
          {children}
        </div>

        {/* Script to remove Spline branding from shadow DOM */}
        <script dangerouslySetInnerHTML={{ __html: `
          setInterval(() => {
            const viewers = document.querySelectorAll('spline-viewer');
            viewers.forEach(viewer => {
              if (viewer && viewer.shadowRoot) {
                const logo = viewer.shadowRoot.querySelector('#logo');
                if (logo) {
                  logo.remove();
                }
              }
            });
          }, 1000);
        `}} />
        <Script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module" strategy="lazyOnload" />
      </body>
    </html>
  );
}
