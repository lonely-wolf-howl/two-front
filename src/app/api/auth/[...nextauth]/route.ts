import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dotenv from 'dotenv';

dotenv.config();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Google',
      credentials: {},
      async authorize(credentials, req) {
        try {
          const res = await fetch('http://localhost:4000/api/auth/google')
          if (res.ok) {
            return res;
          }
          return null;
        } catch (error) {
          console.error(error);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || '',
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
