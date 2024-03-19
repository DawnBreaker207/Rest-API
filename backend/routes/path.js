import { Router } from 'express';
import { controlPath } from '../controllers/control.js';

const path = Router();

path.get('/', controlPath.getAll);

path.get('/:id', controlPath.getOne);

path.post('/', controlPath.add);

path.put('/update/:id', controlPath.update);

path.put('/hide/:id', controlPath.hide);

path.delete('/:id', controlPath.delete);

export default path;
