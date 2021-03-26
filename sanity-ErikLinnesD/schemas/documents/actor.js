const actor = {
   title: 'Actor',
   name: 'actor',
   type: 'document',
   fields: [
       {
        name: 'title',
        type: 'string',
        title: 'Skuespiller',
        description: 'Navnet på skuespilleren',
        validation: (Rule) => Rule.required(),
       }
   ]
}

export default actor;