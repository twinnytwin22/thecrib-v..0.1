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
      name: 'quarter1',
      title: 'Quarter 1',
      type: 'reference',
      to: [{ type: 'quarter' }]
    },
    {
      name: 'milestones1',
      title: 'Milestones Quarter 1',
      type: 'array',
      of: [{ type: 'milestone' }]
    },
    {
      name: 'quarter2',
      title: 'Quarter 2',
      type: 'reference',
      to: [{ type: 'quarter' }]
    },
    {
      name: 'milestones2',
      title: 'Milestones Quarter 2',
      type: 'array',
      of: [{ type: 'milestone' }]
    },
    // Repeat this pattern for each quarter
  ]
}
