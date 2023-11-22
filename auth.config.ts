import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname=== '/';
      console.log("Dash",isOnDashboard)
      console.log("log",isLoggedIn)
      console.log("nurl",nextUrl.pathname)
      if (isOnDashboard) {
        if (isLoggedIn) return  true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && nextUrl.pathname.trim() != '/login') {
        return true//Response.redirect(new URL("/", nextUrl));
      }
      else if (isLoggedIn && nextUrl.pathname.trim() === '/login' ) {
        console.log("here")
        return Response.redirect(new URL("/", nextUrl));
      }
      return true;
    },
  },
  
} satisfies NextAuthConfig;