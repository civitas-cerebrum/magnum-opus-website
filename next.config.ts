import type { NextConfig } from "next";

/**
 * Configured for GitHub Pages static hosting at
 *   https://civitas-cerebrum.github.io/magnum-opus-website/
 *
 * `output: "export"` makes `next build` produce a static `out/` directory
 * containing only HTML/CSS/JS — no server runtime needed. The Pages
 * deploy workflow then uploads `out/` as the published artifact.
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/magnum-opus-website",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
