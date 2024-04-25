import JWT from 'jsonwebtoken';
export const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    //accessToken
    const accessToken = await JWT.sign(payload, publicKey, {
      // algorithm: 'RS256',
      expiresIn: '2 days',
    });
    // refreshToken
    const refreshToken = await JWT.sign(payload, privateKey, {
      // algorithm: 'RS256',
      expiresIn: '7 days',
    });
    // verifyToken
    JWT.verify(accessToken, publicKey, (err, decode) => {
      if (err) {
        console.log('Error verify::', err);
      } else {
        console.log('decode verify::', decode);
      }
    });
    return { accessToken, refreshToken };
  } catch (error) {}
};
