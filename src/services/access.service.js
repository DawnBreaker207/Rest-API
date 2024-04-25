import shopModel from '../models/shop.model.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import KeyTokenService from './keyToken.service.js';
import { createTokenPair } from '../auth/authUtils.js';
import { token } from 'morgan';
const RoleShop = {
  SHOP: 'SHOP',
  WRITER: 'WRITER',
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN',
};
class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      // Step 1: Check email exist ?
      const holderShop = await shopModel.findOne({ email }).lean();
      if (holderShop) {
        return {
          code: 'xxxx',
          message: 'Shop already registered',
        };
      }

      const passwordHash = bcrypt.hashSync(password, 10);

      const newShop = await shopModel.create({
        name,
        email,
        password: passwordHash,
        roles: [RoleShop.SHOP],
      });
      console.log(newShop);
      if (newShop) {
        // Created privateKey , publicKey
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
          modulusLength: 4096,
          publicKeyEncoding: {
            type: 'pkcs1', //pkcs8
            format: 'pem',
          },
          privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem',
          },
        });
        //? Public key CryptoGraphy Standards !

        // console.log({ privateKey, publicKey }); //Save collection Keystore

        const publicKeyString = await KeyTokenService.createKeyToken({
          userId: newShop._id,
          publicKey,
        });

        if (!publicKeyString) {
          return {
            code: 'xxxx',
            message: 'publicKeyString error',
          };
        }

        console.log('PublicKeyString::', publicKeyString);
        const publicKeyObject = crypto.createPublicKey(publicKeyString);

        console.log('PublicKeyObject::', publicKeyObject);
        // created token pair
        const tokens = await createTokenPair(
          { userId: newShop._id, email },
          publicKeyObject,
          privateKey
        );
        console.log('Created Token Success::', token);

        return {
          code: 201,
          metadata: {
            shop: {
              _id: newShop._id,
              name: newShop.name,
              email: newShop.email,
            },
            tokens,
          },
        };
        // const tokens= await
      }
      return {
        code: 201,
        metadata: null,
      };
    } catch (error) {
      return {
        code: 'xxx',
        message: error.message,
        status: 'error',
      };
    }
  };
}
export default AccessService;
