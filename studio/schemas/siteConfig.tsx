export default {
    name: "siteconfig",
    type: "document",
    title: "Site Settings",
    __experimental_actions: [
      "create", /*"delete", */ "update", "publish"
    ],
    fields: [
      {
        name: "title",
        type: "string",
        title: "Site title"
      },
      {
        title: 'Site Logo',
        name: 'siteLogo',
        type: 'image',
      },
      {
        name: "homeHeadLine",
        type: "string",
        title: "Home Headline"
      },
      {
        name: "homeSubLine",
        type: "string",
        title: "Home Subtext"
      },
      {
        title: 'Home Banner Image',
        name: 'homeBannerImmage',
        type: 'image',
      },
      {
        name: "secondSectionHeaderText",
        type: "text",
        title: "Second Section Head text"
      },
      {
        title: 'Second Section Image',
        name: 'secondSectionImmage',
        type: 'image',
      },
     
   
      
      // other fields
      // ...
    ]
  }