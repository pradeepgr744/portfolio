import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './blog.css'
import { Helmet } from 'react-helmet';


const Css = () => {
    const codeString = `CSS element Selector you can select element through class name, id or Tags.
    p {
        text-align: center;
        color: red;
      }`
    const typescss = `<!DOCTYPE html>
      <html>
      <head>
<style>
body {
    background: -webkit-linear-gradient(#2E3192, #1BFFFF);
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
<link rel="stylesheet" href="style.css">
</head>
      <body>
      
      <h2 style="color:blue;text-align:center;">heading</h2>
      <p style="color:red;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis accusantium expedita ab rerum, voluptate deserunt voluptatem excepturi dignissimos nulla esse libero vitae dolorem itaque asperiores ducimus obcaecati dolore repudiandae dolorum!    </p>
      
      </body>
      </html>`

    const css_Selector = `body{
    color:red;
    background:black;
    }
    (body-selector,declaration(propery:value))
    
    Element Selector
    h1{
        color: red;
    }
    id Selector(# is used to target an id)
    #codered{
        color:white;
        background:black;
    }
    class selector
    .red{
        background:red;
    }
    
    To apply design to multiple block of code
    h1,h2,div{
        color:red;
    }
    * is used as a universal selector to select all the elements
    *{
        margin:0;
        padding:0;
    }
    `
    const Color_Property = `
    color:red
    Types of color values

    RGB-red,green,blue
    HEX code-#00ff00
    HSL-huemsaturation,lightness
    we also have an RGBA and HSLA extra a stands for alpha-transparency
    `
    const background = `
    Background-color
    .main_block{
        background-color:brown;
    }

    Background-Image
    body{
        background-image:url("xyz.jpg")
    }

    background-repeat
    repeat-x
    repeat-y
    no-repeat

    background-size
    cover->fits & no empty space remains
    contain->fits & image is fully visible
    auto->Display is original size
    {{width}}
    {{width}} {{hight}}

    background-position
    .container1{
        background-position:left top;
    }

    background shortend
    .containter1{
        background:red url('xyz.png') no-repeat fixed right top;
    }
    `
    const box = `
    .box{
        height:100px
        width:100px
    }
    Total height=height+y-padding(top,bottom)+y-margin(top,bottom)+y-margin(top,bottom)
    
    .box{
        margin:5px;
        padding:5px;
    }

    .box{
        margin:5px 0px 5px 2px;
        (top right bottom left)
    }
    .box{
        margin:5px 3px;
        (y-axis x-axis)
    }
    .box{
        margin-top:5px;
        margin-bottom:5px;
        margin-left:5px;
        margin-right:5px;
    }
    .box{
        border-width:2px;
        border-style:solid;
        border-color:red;   !prefer(border:2px solid red)
    }
    
    Border Radius(to create rounded borders)
    .box{
        border-radius:5px
    }
    `
    const font = `
display:inline(Takes only the space required by the element setting width/height not allowed)

display:block(Takes full space availabe in width and leaves a newline befor and after)

display:inline-block(same has inline allow to set height,w,m&p)

display:none(removes element from document flow )

display:hidden(the element will be hidden)

.text{
    text-algin:center(set the horizontal alignment)
    text-decoration:none(none,overline,line-through,underline)
    text-transform:uppercase;
    line-height:1.5;
    font-family:"open sans";
    font-size:20px;
    font-weight:600;
}
`

    const position = `
Static(Default position-top,bottom,left,right,z-index has no effect)

relative(it is same has static it is in the flow of document you can use position-top,bottom,left,right,z-index)

absolute(elemetn is removed from flow document)

fixed(just like absolut except the element is positioned relative to the browser window)

sticky(the ELement is position based on user scroll position)

Z-index property
`
    return (
        <>
            <Helmet>
                <title>CSS Notes</title>
            </Helmet>
            <div className='max-w-[80%] m-auto text-2xl'>
                <div className='flex h-[100dvh] items-center text-9xl animate__animated animate__slideInLeft'>
                    <div>
                        <h2 className='head_text font-semibold'>
                            CSS
                        </h2>
                        <h1 className='font-extralight'>
                            Cascading Style Sheets
                        </h1>
                    </div>
                </div>
                <div>
                    <p>Markup Lanaguage</p>
                    <p>HTML forms the design part of web content</p>
                </div>
                <div className='flex justify-center'>
                    <img src="https://www.mixamo.com/api/v1/characters/7f3f4e32-2b70-4c69-9a3d-0bdac6188241/assets/thumbnails/static.png" alt="" />

                </div>
                <div>
                    <SyntaxHighlighter language="javascript" style={solarizedlight} >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <br />
                    <h3><b>Three Ways to Insert CSS</b></h3>
                    There are three ways of inserting a style sheet:

                    <li>External CSS</li>
                    <li>Internal CSS</li>
                    <li>Inline CSS</li>

                    <SyntaxHighlighter language="javascript" style={solarizedlight} >
                        {typescss}
                    </SyntaxHighlighter>
                </div>
                <br />
                <h2>CSS Selectors</h2>
                <SyntaxHighlighter language="javascript" style={solarizedlight} >
                    {css_Selector}
                </SyntaxHighlighter>
                <h2>Color Property</h2>
                <SyntaxHighlighter language="javascript" style={solarizedlight} >
                    {Color_Property}
                </SyntaxHighlighter>
                <br />
                <h2>Background</h2>
                <SyntaxHighlighter language="javascript" style={solarizedlight} >
                    {background}
                </SyntaxHighlighter>
                <br />
                <h2>CSS Box Model</h2>
                <div className='flex justify-center'>
                    <img src="/images/box_model.png" alt="" className='w-64' />
                </div>
                <SyntaxHighlighter language="javascript" style={solarizedlight} >
                    {box}
                </SyntaxHighlighter>
                <h2>Fonts</h2>
                <SyntaxHighlighter language="javascript" style={solarizedlight} >
                    {font}
                </SyntaxHighlighter>
                <br />
                <h2>Size</h2>
                <h2>Position</h2>
                <SyntaxHighlighter language="javascript" style={solarizedlight} >
                    {position}
                </SyntaxHighlighter>
                <h2>Flex Box</h2>
                <h2>Grid</h2>
                <h2>Media Queries</h2>
                <h2>Transforms</h2>
                <h2>Transitions</h2>
                <h2>Animations</h2>
            </div>
        </>
    )
}

export default Css