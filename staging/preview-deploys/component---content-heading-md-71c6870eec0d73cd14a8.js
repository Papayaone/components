(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Dxgf:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),l=n("NC8T");var o={},r={_frontmatter:o},i=l.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(i,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Heading component will render an html ",Object(a.b)("inlineCode",{parentName:"p"},"h2")," tag without any default styling. Other heading level elements ",Object(a.b)("inlineCode",{parentName:"p"},"h1-h6")," are available through use of the ",Object(a.b)("inlineCode",{parentName:"p"},"as")," prop (see ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/preview-deploys/system-props"}),"System Props")," for additional explanation). Please reference the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.w3.org/WAI/tutorials/page-structure/headings/"}),"w3 recommendations for headings")," to ensure your headings provide an accessible experience for screen reader users."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Attention:")," Make sure to include a valid heading element to render a Heading component other than ",Object(a.b)("inlineCode",{parentName:"p"},"h2")," (",Object(a.b)("inlineCode",{parentName:"p"},'<Heading as="h1">H1 Element</Heading>'),")."),Object(a.b)("h2",null,"Default example"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Heading fontSize={1} mb={2}>H2 heading with fontSize={1}</Heading>\n")),Object(a.b)("h2",null,"System props"),Object(a.b)("p",null,"Heading components get ",Object(a.b)("inlineCode",{parentName:"p"},"TYPOGRAPHY")," and ",Object(a.b)("inlineCode",{parentName:"p"},"COMMON")," system props. Read our ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/preview-deploys/system-props"}),"System Props")," doc page for a full list of available props."),Object(a.b)("h2",null,"Component props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Prop name"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"as"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String or React element"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"sets the HTML tag for the component")))))}c.isMDXComponent=!0},NC8T:function(e,t,n){"use strict";var a=n("UutA"),l=n("oXiK"),o=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("8gyx"),s=n("VhsB"),m=n("nkI/"),p=n("bWhc"),b=n("og4h"),d=n("sqpL"),u=Object(a.f)(l.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,n=e.depth;return i.a.createElement(u,{as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.Box,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(g,{items:e.items,depth:n+1}):null)})))}g.defaultProps={depth:0};var f=g,h=Object(a.f)(l.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),O=Object(a.f)(l.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),j=Object(a.f)(l.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),y=Object(a.f)(l.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),x=Object(a.f)(l.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,u=a.description,g=a.status,N=a.source,E=a.additionalContributors,C=void 0===E?[]:E;return i.a.createElement(l.Flex,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:r,description:u}),i.a.createElement(s.b,null),i.a.createElement(h,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.Box,{display:["none",null,null,"block"]},i.a.createElement(p.a,null)),i.a.createElement(O,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(j,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.Heading,null,r)),n.tableOfContents.items?i.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(l.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(f,{items:n.tableOfContents.items})):null,i.a.createElement(x,null,g||N?i.a.createElement(l.Flex,{mb:3,alignItems:"center"},g?i.a.createElement(d.a,{status:g}):null,i.a.createElement(l.Box,{mx:"auto"}),N?i.a.createElement(b.a,{href:N}):null):null,n.tableOfContents.items?i.a.createElement(l.Box,{display:["block",null,"none"],mb:3},i.a.createElement(l.Details,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Text,{as:"summary",fontWeight:"bold"},i.a.createElement(l.StyledOcticon,{icon:t?o.b:o.c,mr:2}),"Table of contents"),i.a.createElement(l.Box,{pt:1},i.a.createElement(f,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(C.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-heading-md-71c6870eec0d73cd14a8.js.map