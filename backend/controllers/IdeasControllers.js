import Idea from "../model/Idea.js";

export const getAllIdeas = async (req, res) => {
    try {
        const ideas = await Idea.find();
        res.status(200).send({
            success: true,
            ideas
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error in fetching all ideas"
        });
    }
};

export const getIdeasById = (req, res) => {

    res.status(200).send();
};

export const getIdeasByAny = async (req, res) => {
    const {id, title} = req.query;
    if(id)
    {
        try{
            const ideas = await Idea.findById(id);
            res.status(200).send({
                success: true,
                ideas
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                success: false,
                message: "Error in fetching all ideas using Id"
            });
        }
    }
    else {
        try {
            const ideas = await Idea.find({title});
            res.status(200).send({
                success: true,
                ideas
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                success: false,
                message: "Error in fetching all ideas using title"
            })
        }
    }
};

export const createIdea = (req, res) => {
    try{
        const { title, description} = req.body;
        const newIdea = new Idea({title, description});
        newIdea.save();
        res.status(201).send({
            success: true,
            message: "Idea created successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error in creating idea"
        });
    }
};

export const updateIdea = async (req, res) => {
    const {title, description} = req.body;
    try {
        const updatedIdea = await Idea.findByIdAndUpdate(req.params.id, {title, description});
        res.status(200).send({
            success: true,
            message: updatedIdea
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error in updating idea"
        });
    }
};

export const deleteIdea = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteIdea = await Idea.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: deleteIdea
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error in deleting idea"
        })
    }
};