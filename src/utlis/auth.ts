import { getSession } from '@auth0/nextjs-auth0';

export const getUser = async (req) => {
  const session = await getSession(req);
  if (session?.user) {
    return session.user;
  }
  return null;
};
