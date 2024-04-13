// // utils/auth.js

// import jwt from 'jsonwebtoken';

// const verifyToken = (token) => {
//   if (!token) {
//     throw new Error('No token provided');
//   }
//   return jwt.verify(token, process.env.JWT_SECRET, {
//     audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
//     issuer: process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL,
//     algorithms: ['RS256']
//   });
// };

// export default verifyToken;
