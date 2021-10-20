import prisma from '@lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handle(req, res) {
  const { username } = req.body;
  const session = await getSession({ req });

  const usernameSearch = await prisma.user.findMany({
    where: {
      username,
    },
    select: {
      username: true,
    },
  });

  if (usernameSearch.length === 0) {
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        username,
      },
    });
    res
      .status(200)
      .json({ message: 'Your username has been changed successfully.' });
  } else if (usernameSearch.some((account) => account.username === username)) {
    res
      .status(400)
      .json({ reason: 'The username you have entered in is yours.' });
  } else {
    res
      .status(400)
      .json({ reason: 'The username has been taken by another user.' });
  }
}
