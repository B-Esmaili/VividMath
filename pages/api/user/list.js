import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const List = async (req, res) => {

    let users = await prisma.user.findMany();

    res.status(200).json({ success: true, users });

}

export default List;