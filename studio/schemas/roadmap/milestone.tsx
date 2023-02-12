export default {
    name: 'milestone',
    title: 'Milestone',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'completed',
        title: 'Completed',
        type: 'boolean'
      },
      {
        name: 'quarter',
        title: 'Quarter',
        type: 'reference',
        to: [{ type: 'quarter' }],
        options: {
          disableNew: true,
      },
    }
    ]
  }
  