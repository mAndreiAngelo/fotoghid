import type { NextConfig } from "next";

// Pentru publicarea pe GitHub Pages (export static, servit la /fotoghid),
// build-ul se rulează cu DEPLOY_TARGET=pages — vezi deploy-pages.cmd.
// Build-ul și serverul de dezvoltare locale rămân neschimbate.
const isPagesBuild = process.env.DEPLOY_TARGET === "pages";

const nextConfig: NextConfig = {
  ...(isPagesBuild
    ? {
        output: "export" as const,
        basePath: "/fotoghid",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
