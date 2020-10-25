import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const options = {
    providers: [
        Providers.Google({
            clientId: "30713520212-f7buh1k8tiitoquk6reut1kdku7mo52i.apps.googleusercontent.com",
            clientSecret: "FARA1MgTB9KtYJz9yg_TGBzp"
        })
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
}

export default (req, res) => NextAuth(req, res, options);