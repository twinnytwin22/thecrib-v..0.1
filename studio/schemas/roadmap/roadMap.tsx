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
      name: 'q1',
      title: 'Quarter 1',
      type: 'reference',
      to: [{ type: 'quarter' }]
    },
    {
      name: 'm1',
      title: 'Milestones Quarter 1',
      type: 'array',
      of: [
        { 
          weak: true,
          type: 'reference',
          to: [
            {type: 'milestone'},
        
          ]
        }
      ]
    },
    {
      name: 'q2',
      title: 'Quarter 2',
      type: 'reference',
      to: [{ type: 'quarter' }]
    },
    {
      name: 'm2',
      title: 'Milestones Quarter 2',
      type: 'array',
      of: [{ type: 'milestone' }]
    },
    {
      name: 'q3',
      title: 'Quarter 3',
      type: 'reference',
      to: [{ type: 'quarter' }]
    },
    {
      name: 'm3',
      title: 'Milestones Quarter 3',
      type: 'array',
      of: [{ type: 'milestone' }]
    },
    {
      name: 'q4',
      title: 'Quarter 4',
      type: 'reference',
      to: [{ type: 'quarter' }]
    },
    {
      name: 'm4',
      title: 'Milestones Quarter 4',
      type: 'array',
      of: [{ type: 'milestone' }]
    },
    // Repeat this pattern for each quarter
  ]
}
