import { CREATE } from '../core/success.response.js';
import AccessService from '../services/access.service.js';

class AccessController {
  signUp = async (req, res, next) => {
    // console.log(`[P]::signUp::`, req.body);
    new CREATE({
      message: 'Registered OK!',
      metadata: await AccessService.signUp(req.body),
      options: {
        limit: 10,
      },
    }).send(res);
    // return res.status(201).json(await AccessService.signUp(req.body));
  };
}
export default new AccessController();
