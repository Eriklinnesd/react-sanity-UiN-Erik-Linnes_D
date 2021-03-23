const movie = {
title: 'Movie',
name: 'movie',
type: 'document',
fields: [
    {
        name: 'title',
        type: 'string',
        title: 'Tittel',
        description: 'Dette er filmens tittel',
    },
    {
        title: 'Actor',
        name: 'actor',
        type: 'reference',
        to: [{type: 'actor'}]
    }
],
preview: {
    select: {
        title: 'title',
        actor: 'actor.title'
    },
    prepare(selection) {
        const {title, actor} = selection;
        return {
            title,
            subtitle: `Actor: ${actor}`
        }
    }

}
}

export default movie;