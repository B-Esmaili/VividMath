import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const options = {
    callbacks: {
        signIn: async (user, account, profile) => {
            console.log('Authenticated');
            console.log(JSON.stringify(user));
            console.log(JSON.stringify(account));
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
            clientId: "30713520212-f7buh1k8tiitoquk6reut1kdku7mo52i.apps.googleusercontent.com",
            clientSecret: "FARA1MgTB9KtYJz9yg_TGBzp"
        })
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
}

export default (req, res) => NextAuth(req, res, options);