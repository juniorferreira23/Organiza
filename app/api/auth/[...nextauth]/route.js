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

          const storage = JSON.parse(credentials.database)

          const auth = storage.find( item => item.email === credentials.email)
          
          if(auth){
            return {
              id: auth.id,
              name: auth.name,
              email: auth.email
            }
          }

          //OLD
          // if(credentials.email === "teste" && credentials.password === "123"){
          //     return {
          //         id: "1",
          //         name: "Junior",
          //         email: "teste"
          //     }
          // }
          return null
        }
      })
  ]
})

export { handler as GET, handler as POST }