import{d as o,E as l,r as s,_ as m,a as r,b as g,c as p,e as u}from"./desk-eb7b3548-efd72794.js";const c=o(e=>{const{name:t,title:i,icon:n,...a}=e||{};return{name:"@sanity/vision",tools:[{name:t||"vision",title:i||"Vision",icon:n||l,component:s.lazy(()=>m(()=>import("./SanityVision-8a519187-4db5846a.js"),["static/SanityVision-8a519187-4db5846a.js","static/desk-eb7b3548-efd72794.js","static/json-inspector-8c3dd3c1.js"])),options:a,router:r.create("/*")}]}}),d=[{title:"Music",value:"Music"},{title:"Custom Contract",value:"Custom Contract"},{title:"Collaboration",value:"Collab"},{title:"Visual Art",value:"Visual Art"},{title:"Sound.xyz",value:"Sound.xyz"},{title:"Manifold",value:"Manifold"},{title:"OneofOne",value:"1/1"},{title:"AR/VR",value:"AR/VR"}],y=[{title:"Ethereum",value:"eth"},{title:"Solana",value:"solana"},{title:"Polygon",value:"polygon"}],f={title:"Collections",name:"collection",type:"document",groups:[{name:"info",title:"Info"},{name:"images",title:"Images"},{name:"tagging",title:"Tagging"}],fieldsets:[{title:"Taxonomy",name:"taxonomy"},{title:"Info",name:"info",options:{columns:2}},{title:"Collection",name:"collection"}],fields:[{title:"Collection Title",name:"title",type:"string",group:"info"},{title:"Slug",name:"slug",type:"slug",group:"info",options:{source:"title",maxLength:96}},{title:"Contract Address",name:"contract",fieldset:"info",type:"string",group:"info"},{title:"What chain is this collection on?",name:"chain",type:"string",fieldset:"info",group:"info",options:{list:[...y]}},{title:"Is Mint Active?",name:"mintactive",type:"boolean",fieldset:"info",group:"info"},{title:"Is Holder Benefit?",name:"holderbenefit",type:"boolean",fieldset:"info",group:"info"},{title:"Banner Image",name:"bannerImage",type:"image",group:"images"},{title:"Collection Image",name:"collectionImage",type:"image",group:"images"},{title:"NFT Image",name:"nftImage",type:"image",group:"images"},{name:"description",title:"Description",type:"text",group:"info"},{name:"mintPrice",title:"Mint Price",type:"number",fieldset:"info"},{name:"abi",title:"ABI",type:"file",group:"info"},{title:"Tags",group:"tagging",name:"tags",fieldset:"taxonomy",type:"array",of:[{type:"string"}],options:{list:[...d]}}]},v={name:"song",title:"Song",type:"document",fields:[{name:"title",title:"Title",type:"string",validation:e=>e.required()},{name:"artist",title:"Artist",type:"string",validation:e=>e.required()},{name:"album",title:"Album",type:"string",description:"If this is a single leave blank",validation:e=>e.required()},{name:"featuring",title:"Featuring",type:"string"},{name:"cover",title:"Cover",type:"image",validation:e=>e.required()},{name:"audio",title:"Audio",type:"file",description:"We're using only MP3s here. It helps with storage and bandwidth",validation:e=>e.required()}]},b={title:"Tag",name:"tag",type:"object",fields:[{name:"value",type:"string",validation:e=>e.required()},{name:"label",type:"string",validation:e=>e.required()}]},x={title:"Block Content",name:"blockContent",type:"array",of:[{title:"Block",type:"block",styles:[{title:"Normal",value:"normal"},{title:"H2",value:"h2"},{title:"H3",value:"h3"},{title:"H4",value:"h4"},{title:"Quote",value:"blockquote"}],lists:[{title:"Bullet",value:"bullet"}],marks:{decorators:[{title:"Strong",value:"strong"},{title:"Emphasis",value:"em"}],annotations:[{title:"URL",name:"link",type:"object",fields:[{title:"URL",name:"href",type:"url"}]}]}},{type:"image",options:{hotspot:!0}}]},h={name:"siteconfig",type:"document",title:"Site Settings",__experimental_actions:["create","update","publish"],fields:[{name:"title",type:"string",title:"Site title"},{title:"Site Logo",name:"siteLogo",type:"image"},{name:"homeHeadLine",type:"string",title:"Home Headline"},{name:"homeSubLine",type:"string",title:"Home Subtext"},{title:"Home Banner Image",name:"homeBannerImmage",type:"image"},{name:"secondSectionHeaderText",type:"text",title:"Second Section Head text"},{title:"Second Section Image",name:"secondSectionImmage",type:"image"}]},I={name:"milestone",title:"Milestone",type:"document",fields:[{name:"title",title:"Title",type:"string"},{name:"description",title:"Description",type:"text"},{name:"url",title:"Related URL",type:"url"},{name:"completed",title:"Completed",type:"boolean"},{name:"quarter",title:"Quarter",type:"reference",to:[{type:"quarter"}],options:{disableNew:!0}}]},S={name:"quarter",title:"Roadmap",type:"document",fields:[{name:"quarter",title:"Quarter",type:"string"},{name:"year",title:"Year",type:"number"},{name:"startDate",title:"Start Date",type:"date"},{name:"endDate",title:"End Date",type:"date"},{name:"milestones",type:"array",of:[{type:"reference",to:[{type:"milestone"}]}]}]},T={name:"pageSettings",type:"document",title:"Page Settings",__experimental_actions:["create","update","publish"],groups:[{name:"text",title:"Text"},{name:"images",title:"Images"},{name:"tagging",title:"Tagging"}],fieldsets:[{title:"Taxonomy",name:"taxonomy"},{title:"Info",name:"info",options:{columns:2}},{title:"Page",name:"Page"}],fields:[{name:"title",type:"string",title:"Page title"},{name:"pageHeadLine",type:"string",title:"Page Headline",group:"text"},{name:"pageSubLine",type:"string",group:"text",title:"Page Subtext"},{title:"Page Image 1",name:"page1Immage1",type:"image",group:"images"},{title:"Page Image 2",name:"page1Immage2",type:"image",group:"images"},{title:"Page Image 3",name:"page1Immage3",type:"image",group:"images"},{name:"pageText1",type:"text",title:"Page Text 1"},{name:"pageText2",type:"text",title:"Page Text 2"},{name:"pageText3",type:"text",title:"Page Text 3"}]},C=[f,b,v,x,I,S,T,h],P="2021-10-21",_=g({name:"thecrib",title:"The Crib | Collections",basePath:"/studio",projectId:"7cz92znn",dataset:"production",apiVersion:P,plugins:[p(),c()],schema:{types:C}});u(document.getElementById("sanity"),_,!1);
