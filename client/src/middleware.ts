export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/search", "/search/military", "/profile", "/saved"],
  // matcher: [],
};
