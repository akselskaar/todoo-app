import NextAuth, { User, NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const BASE_PATH = '/api/auth'

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        // email: { label: 'Email', type: 'email', placeholder: 'hh@example.com' },
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<User | null> {
        // This is a set of two local users for testing purposes. Normaly you would use a database.
        const users = [
          {
            id: 'test-user-1',
            userName: 'test1',
            name: 'Test 1',
            password: 'pass',
            email: 'test1@donotreply.com',
          },
          {
            id: 'test-user-2',
            userName: 'test2',
            name: 'Test 2',
            password: 'pass',
            email: 'test2@donotreply.com',
          },
        ]
        // Find the user based on the credentials
        const user = users.find(
          (user) =>
            user.userName === credentials.username &&
            user.password === credentials.password
        )

        // Returns the id, name and email if the user exists. If not, returns null.
        return user ? { id: user.id, name: user.name, email: user.email } : null
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
