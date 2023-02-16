export default {
    name: 'quarter',
    title: 'Roadmap',
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
        name: "milestones",
        type: "array",
        of: [{ type: "reference", to: [{ type: "milestone" }] }]
      },
    ]
  }
  