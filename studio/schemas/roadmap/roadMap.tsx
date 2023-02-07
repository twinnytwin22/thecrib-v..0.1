


export default {
  name: 'roadmap',
  title: 'Roadmap',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'milestones',
      title: 'Milestones',
      type: 'array',
      of: [
        {
          type: 'object',
          components: {
            preview: '' // Add custom preview component
          }, 
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'status',
              title: 'Status',
              type: 'string',
              

              options: {
                list: [
                  { title: 'Completed', value: 'completed' },
                  { title: 'In Progress', value: 'inProgress' },
                  { title: 'In Queue', value: 'inQueue' }
                ],
                layout: 'radio'
              }
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            },
            {
              name: 'date',
              title: 'Date',
              type: 'date'
            },
            
          ]
        }
      ]
    }
  ]
}
