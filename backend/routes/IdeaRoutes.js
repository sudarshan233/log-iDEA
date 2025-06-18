import express from 'express';

import {
    getAllIdeas,
    getIdeasById,
    getIdeasByAny,
    createIdea,
    updateIdea,
    deleteIdea,
} from "../controllers/IdeasControllers.js";

const router = express.Router();

router.get('/', getAllIdeas);

router.get('/search', getIdeasByAny);

// router.get('/api/ideas/:id', getIdeasById)

router.post('/', createIdea);

router.put('/:id', updateIdea);

router.delete('/:id', deleteIdea);

export default router;