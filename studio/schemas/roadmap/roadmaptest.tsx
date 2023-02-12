export default [  
    {    
        name: 'roadmap',    
        title: 'Roadmap',    
        type: 'document',    
        fields: [      
            { name: 'title',        
              title: 'Title',        
              type: 'string'      
            },      
            { name: 'quarters',        
              title: 'Quarters',        
              type: 'array',        
              of: 
              [
                { type: 'reference',            
                     to: [{type: 'quarter'}]
                }
              ]
      }
    ]
  },
  {
    name: 'quarter',
    title: 'Quarter',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'date'
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'date'
      },
      {
        name: 'milestones',
        title: 'Milestones',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'milestone'}]
          }
        ]
      }
    ]
  },
  {
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
        name: 'dueDate',
        title: 'Due Date',
        type: 'date'
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            {title: 'In Progress', value: 'inProgress'},
            {title: 'Completed', value: 'completed'},
            {title: 'In Queue', value: 'inQueue'}
          ],
          layout: 'radio'
        }
      }
    ]
  }
]
