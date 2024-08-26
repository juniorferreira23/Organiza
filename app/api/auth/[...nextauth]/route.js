const { default: NextAuth } = require("next-auth/next");
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
    pages: {
        signIn: "/login"
    },
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "email", type: "email", placeholder: "E-mail" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            // console.log(credentials)
            if(!credentials) return null

            if(credentials.email === "junior.ferreira@outlook.com" && credentials.password === "123"){
                return {
                    id: "1",
                    name: "Junior",
                    email: "junior.ferreira@outlook.com"
                }
            }
            // const res = await fetch("/your/endpoint", {
            //   method: 'POST',
            //   body: JSON.stringify(credentials),
            //   headers: { "Content-Type": "application/json" }
            // })
            // const user = await res.json()
      
            // if (res.ok && user) {
            //   return user
            // }
            // return null
          }
        })
      ]
})

export { handler as GET, handler as POST }