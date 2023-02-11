export default {
    name: 'quarter',
    title: 'Quarter',
    type: 'document',
    fields: [
      {
        name: 'quarter',
        title: 'Quarter',
        type: 'string'
      },
      {
        name: 'year',
        title: 'Year',
        type: 'number'
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
        name: 'milestone',
        title: 'Milestone',
        type: 'reference',
        weak: true,
        to: [{ type: 'milestone' }]
      },
    ]
  }
  