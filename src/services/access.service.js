import shopModel from '../models/shop.model.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import KeyTokenService from './keyToken.service.js';
import { createTokenPair } from '../auth/authUtils.js';
import { token } from 'morgan';
import { getInfoData } from '../utils/index.js';
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
        // // RSA
        // const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        //   modulusLength: 4096,
        //? Public key CryptoGraphy Standards !
        //   publicKeyEncoding: {
        //     type: 'pkcs1', //pkcs8
        //     format: 'pem',
        //   },
        //   privateKeyEncoding: {
        //     type: 'pkcs1',
        //     format: 'pem',
        //   },
        // });

        // Simple way
        const privateKey = crypto.randomBytes(64).toString('hex');
        const publicKey = crypto.randomBytes(64).toString('hex');

        console.log({ privateKey, publicKey }); //Save collection Keystore

        const keyStore = await KeyTokenService.createKeyToken({
          userId: newShop._id,
          publicKey,
          privateKey,
        });

        if (!keyStore) {
          return {
            code: 'xxxx',
            message: 'keyStore error',
          };
        }

        // created token pair
        const tokens = await createTokenPair(
          { userId: newShop._id, email },
          publicKey,
          privateKey
        );
        console.log('Created Token Success::', tokens);

        return {
          code: 201,
          metadata: {
            shop: getInfoData({
              fields: ['_id', 'name', 'email'],
              object: newShop,
            }),
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
