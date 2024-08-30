const { default: NextAuth } = require("next-auth/next");
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  pages: {
      signIn: "/"
  },
  providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "email", type: "email", placeholder: "E-mail" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          if(!credentials){
            return null
          }

          if(credentials.email === "junior.ferreira@outlook.com" && credentials.password === "123"){
              return {
                  id: "1",
                  name: "Junior",
                  email: "junior.ferreira@outlook.com"
              }
          }
          // else{
          //   throw new Error("Credential invalid")
          // }
          return null
        }
      })
  ]
})

export { handler as GET, handler as POST }