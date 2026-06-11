/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local placeholder art is SVG. These are our own trusted assets; the CSP
    // below sandboxes them so they can't execute scripts when optimized.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
