import NextAuth from 'next-auth';
import dotenv from 'dotenv';

dotenv.config();

export const authOptions = {
  providers: [],
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
