import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/GitHub'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from '@/db'
import type { Provider } from 'next-auth/providers'

const providers: Provider[] = [GitHub]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === 'function') {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== 'credentials')

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  adapter: DrizzleAdapter(db),
})
