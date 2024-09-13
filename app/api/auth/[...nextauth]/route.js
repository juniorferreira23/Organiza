const { default: NextAuth } = require("next-auth/next");
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/"
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Seu email" },
        password: { label: "Password", type: "password", placeholder: "Sua senha" },
        database: { label: "Database", type: "hidden" } // Receberemos o localStorage aqui
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const storage = JSON.parse(credentials.database);

        const auth = storage.find(item => item.email === credentials.email);

        if (auth) {

          if (auth.password === credentials.password) {
            return {
              id: auth.id,
              name: auth.name,
              email: auth.email
            };
          }
        }

        return null;
      }
    })
  ]
});

export { handler as GET, handler as POST };
