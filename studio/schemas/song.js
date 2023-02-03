export default {
  name: "song",
  title: "Song",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "artist",
      title: "Artist",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "featuring",
      title: "Featuring",
      type: "string",
    },
    {
      name: "cover",
      title: "Cover",
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      name: "audio",
      title: "Audio",
      type: "file",
      description: "We're using only MP3s here. It helps with storage and bandwidth",
      validation: Rule => Rule.required()
    },

    
   
  ],
}
  