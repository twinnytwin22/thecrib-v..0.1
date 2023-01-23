export default {
	title: 'Tag',
	name: 'tag',
	type: 'object',
	fields: [
		{
      name: "value",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "label",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }
	],
}