import allTags from "./allTags"
import chains from "./chains"


export default {
    title: 'Collections',  // The human-readable label. Used in the studio.
    name: 'collection',   // Required. The field name, and key in the data record.
    type: 'document',
    groups: [
      {
        name: 'info',
        title: 'Info',
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
        title: 'Collection',
        name: 'collection',
      },
    ],
    // Input fields below, as many as you need.
    fields: [ 
      {
        title: 'Collection Title',
        name: 'title',
        type: 'string',
        group: 'info',
      },
      {
        title: 'Subtitle',
        name: 'subTitle',
        type: 'string',
        group: 'info',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        group: 'info',
        options: {
          source: "title",
          maxLength: 96,
        },
    
      },
      {
        title: 'Contract Address',
        name: 'contract',
        fieldset: 'info',
        type: 'string',
        group: 'info',
      },
      {
        title: 'What chain is this collection on?',
        name: 'chain',
        type: 'string',
        fieldset: 'info',
        group: 'info',
        options: {
          list: [
            ...chains
          ]
        }

      },
      {
        name: 'mintStatus',
        title: 'Mint Status',
        type: 'string',
        options: {
          list: [
            {title: 'Active', value: 'active'},
            {title: 'Inactive', value: 'inactive'},
            {title: 'Upcoming', value: 'upcoming'}
          ]
        },
        fieldset: 'info',
        group: 'info'
      },
      {
        title: 'Is Holder Benefit?',
        name: 'holderbenefit',
        type: 'boolean',
        fieldset: 'info',
        group: 'info',

      },
      {
        title: 'CrossMint ID',
        name: 'crossMintId',
        type: 'string',
        fieldset: 'info',
        group: 'info',

      },
      {
        title: 'Banner Image',
        name: 'bannerImage',
        type: 'image',
        group: 'images',

      },
      {
        title: 'Collection Image',
        name: 'collectionImage',
        type: 'image',
        group: 'images',
      },
      {
        title: 'NFT Image',
        name: 'nftImage',
        type: 'image',
        group: 'images',

      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        group: 'info',
      },
      {
        name: 'mintPrice',
        title: 'Mint Price',
        type: 'number',
        fieldset: 'info',
      },
      {
        name: 'abi',
        title: 'ABI',
        type: 'file',
        group: 'info',
      },
      {
        title: 'Tags',
        group: 'tagging',
        name: 'tags',
        fieldset: 'taxonomy',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          list: [
            ...allTags
          ]
        }
      },
      
    ]
  }