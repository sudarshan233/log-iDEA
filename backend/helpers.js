import {ideas} from "./ideas.js";

export function fetchIdeaById(ideaId) {
    let idea = ideas.find(currentIdea => ideaId === currentIdea.id);

    if(!idea) {
        idea = { error: "Idea not found" }
    }

    return idea;
}

export function fetchIdeaByAny(ideaQuery) {
    const {id, title, description} = ideaQuery;
    var filteredIdeas = ideas;
    if(id)
    {
        filteredIdeas = ideas.filter(idea => idea.id === JSON.parse(id));
    }
    if(title)
    {
        filteredIdeas = ideas.filter(idea => {
            return idea.title.startsWith(title);
        });
    }
    if(description) {
        filteredIdeas = ideas.filter(idea => idea.description === description);
    }
    return filteredIdeas;
}