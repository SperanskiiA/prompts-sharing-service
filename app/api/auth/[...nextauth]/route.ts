import { rejects } from 'assert';
import NextAuth, {
  Awaitable,
  DefaultSession,
  DefaultUser,
  NextAuthOptions,
  Profile,
  Session,
  SessionOptions,
} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@/utils/database';

import User from '@/models/user';

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      session.user.id = sessionUser._id.toString();
      session.user.image = sessionUser.image;

      return sessionUser;
    },
    async signIn({ profile }) {
      console.log(profile);
      try {
        await connectToDB();

        const userExist = await User.findOne({
          email: profile?.email,
        });

        if (!userExist) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(' ', '').toLowerCase(),
            image: profile?.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

const Handler = NextAuth(authOptions);

export { Handler as GET, Handler as POST };

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//  callbacks: {
//     async session({ session }: { session: Session }) {
//         const sessionUser = await User.findOne({
//           email: session.user?.email,
//         });

//         // session.user.id = sessionUser._id.toString()
//       },
//       async signIn({ profile }: { profile: any }) {
//         try {
//           await connectToDB();

//           const userExist = await User.findOne({
//             email: profile.email,
//           });

//           if (!userExist) {
//             await User.create({
//               email: profile.email,
//               username: profile.name?.replace(' ', '').toLowerCase(),
//               image: profile.image,
//             });
//           }

//           return true;
//         } catch (error) {
//           console.log(error);
//           return false;
//         }
//       },
//  }
// });

// export { handler as GET, handler as POST };
