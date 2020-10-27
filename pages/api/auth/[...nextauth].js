import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const options = {
    callbacks: {
        signIn: async (user, account, profile) => {
            if (account.provider === 'google' &&
                profile.verified_email === true
                //&&
                //profile.email.endsWith('@example.com')
            ) {
                return Promise.resolve(true)
            } else {
                return Promise.resolve(false)
            }
        },
    },
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLINENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
}

export default (req, res) => NextAuth(req, res, options);