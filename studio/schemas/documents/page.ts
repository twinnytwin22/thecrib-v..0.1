export default {
  name: "pageSettings",
  type: "document",
  title: "Page Settings",
  __experimental_actions: [
    "create", /*"delete", */ "update", "publish"
  ],
  groups: [
    {
      name: 'text',
      title: 'Text',
    },
    {
      name: 'images',
      title: 'Images',
    },
    {
      name: 'tagging',
      title: 'Tagging',
    },
    
  ],
  fieldsets: [
    {
      title: 'Taxonomy',
      name: 'taxonomy',
    },
    {
      title: 'Info',
      name: 'info',
      options: {
        columns: 2,
      },
    },
    {
      title: 'Page',
      name: 'Page',
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page title"
    },
    {
      name: "pageHeadLine",
      type: "string",
      title: "Page Headline",
      group: "text",
      
    },
    {
      name: "pageSubLine",
      type: "string",
      group: "text",
      title: "Page Subtext"
    },
    {
      title: 'Page Image 1',
      name: 'page1Immage1',
      type: 'image',
      group: "images",

    },
    {
      title: 'Page Image 2',
      name: 'page1Immage2',
      type: 'image',
      group: "images",

    },
    {
      title: 'Page Image 3',
      name: 'page1Immage3',
      type: 'image',
      group: "images",

    },
    {
      name: "pageText1",
      type: "text",
      title: "Page Text 1"
    },
    {
      name: "pageText2",
      type: "text",
      title: "Page Text 2"
    },
    {
      name: "pageText3",
      type: "text",
      title: "Page Text 3"
    },
    
   
 
    
    // other fields
    // ...
  ]
}