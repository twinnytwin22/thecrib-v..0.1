export default {
    title: 'Roadmap',  // The human-readable label. Used in the studio.
    name: 'roadmap',   // Required. The field name, and key in the data record.
    type: 'document',
    // Input fields below, as many as you need.
    fields: [ 
      {
        title: 'Title',
        name: 'title',
        type: 'string',
     
      },
  
      {
        title: 'Is Completed?',
        name: 'completed',
        type: 'boolean',

      },
      {
        title: 'Image',
        name: 'Image',
        type: 'image', 
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',

      },
  

      
      
    ]
  };