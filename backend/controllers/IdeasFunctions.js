import {ideas} from "../ideas.js";
import {fetchIdeaByAny, fetchIdeaById} from "../helpers.js";

export const getAllIdeas = (req, res) => {
    res.status(200).send(ideas);
};

export const getIdeasById = (req, res) => {
    const idea = fetchIdeaById(JSON.parse(req.params.id));
    res.status(200).send(idea);
};

export const getIdeasByAny = (req, res) => {
    console.log(req.query);
    const idea = fetchIdeaByAny(req.query);
    if(idea.length < 1)
        return res.status(404).send('No idea matches your search');
    res.status(200).send(idea );
};

export const createIdea = (req, res) => {
    res.status(201).send({
        success: true,
        message: 'Idea is created successfully'
    });
};

export const updateIdea = (req, res) => {
    res.status(200).send({
        success: true,
        message: 'Idea of given id has been updated successfully'
    });
};

export const deleteIdea = (req, res) => {
    res.status(200).send({
        success: true,
        message: 'Idea of given id has been deleted successfully'
    })
};