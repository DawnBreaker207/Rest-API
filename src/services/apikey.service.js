// import apiKeyModel from '../models/apiKey.model.js';
import crypto from 'crypto';
export const findById = async (key) => {
  // const newKey = await apiKeyModel.create({
  //   key: crypto.randomBytes(64).toString('hex'),
  //   permissions: ['0000'],
  // });
  // console.log(newKey);
  const objKey = await apiKeyModel.findOne({ key, status: true }).lean();
  return objKey;
};
