import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function getUser(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession(req, res);
  if (session?.user) {
    return session.user;
  }
  return null;
}
