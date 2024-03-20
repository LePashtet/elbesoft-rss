const isStaticPath = (path: string) => {
  const staticPaths = [
    "/_next",
    "/images",
    "/favicon.ico",
    "/robots.txt",
    "/webmanifest.json",
  ];
  for (const staticPath of staticPaths) {
    if (path.startsWith(staticPath)) {
      return true;
    }
  }

  return false;
};


// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/:path*"],
};
