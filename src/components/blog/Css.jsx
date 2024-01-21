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
    return (
        <>
            <Helmet>
                <title>CSS Notes</title>
            </Helmet>
            <div className='max-w-[80%] m-auto text-2xl'>
                <div className='flex h-[100dvh] items-center text-9xl'>
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
                    <h3><b>Three Ways to Insert CSS</b></h3>
                    There are three ways of inserting a style sheet:

                    <li>External CSS</li>
                    <li>Internal CSS</li>
                    <li>Inline CSS</li>

                    <SyntaxHighlighter language="javascript" style={solarizedlight} >
                        {typescss}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    )
}

export default Css