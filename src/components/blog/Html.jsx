import React, { useEffect, useRef } from "react"
import { Application } from '@splinetool/runtime';
import './blog.css'
import { Helmet } from 'react-helmet';

const Html = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const app = new Application(canvas);

        // Load the Spline scene when the component mounts
        app.load('https://prod.spline.design/RGOEyZs80NyOGRAh/scene.splinecode');

        // Clean up resources when the component unmounts
        return () => {
            // Perform any necessary cleanup here, e.g., stopping animations or releasing resources
        };
    }, []); // Empty dependency array to ensure the effect runs only once on mount

    return (
        <>
            <Helmet>
                <title>HTML Notes</title>
                <link rel="icon" type="image/svg+xml" href="https://assets.materialup.com/uploads/a8b481f3-cb72-43e1-88b0-ebc47fb9010c/attachment.png" />
            </Helmet>
            <div className='w-[80%] mobile:w-[90%] m-auto text-2xl'>
                <div className='flex h-[100dvh] items-center text-9xl animate__animated animate__slideInLeft'>
                    <div>
                        <h2 className='head_text font-semibold'>
                            HTML
                        </h2>
                        <h1 className='font-extralight'>
                            HyperText Markup Language
                        </h1>
                    </div>
                </div>
                <div className="intro">
                    <p>Markup Lanaguage</p>
                    <p>HTML (HyperText Markup Language) was created by Tim Berners-Lee in 1991 as a standard for creating web pages</p>
                    <p>HTML forms the backbone of web content</p>
                    <p className='text-center'>installation of VS</p>
                    <p className='text-center'>HTMl structure</p>
                </div>

                <section className='mt-10 content_section'>
                    <h1 className='mt-7 mb-2 font-semibold'>Document Structure Tags</h1>
                    <ol className='list-decimal'>
                        <li><code>&lt;!DOCTYPE html&gt;</code>: Specifies the document type.</li>
                        <li><code>&lt;html&gt;</code>: Encloses the entire HTML document.</li>
                        <li><code>&lt;head&gt;</code>: Contains meta-information and links to scripts and stylesheets.</li>
                        <li><code>&lt;body&gt;</code>: Contains the content of the web page.</li>
                    </ol>
                    <h1 className='mt-7 mb-2 font-semibold'>Metadata Tags</h1>
                    <ol className='list-decimal'>
                        <li><code>&lt;title&gt;</code>: Sets the title of the web page.</li>
                        <li><code>&lt;meta&gt;</code>: Provides metadata such as character set, author, and viewport settings.</li>
                        <li><code>&lt;link&gt;</code>: Links external resources like stylesheets.</li>
                    </ol>
                    <h1 className='mt-7 mb-2 font-semibold'>Text Formatting Tags</h1>
                    <ol className='list-decimal'>
                        <li><code>&lt;p&gt;</code>: Paragraph.</li>
                        <li><code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code>, <code>&lt;h6&gt;</code>: Headings.</li>
                        <li><code>&lt;strong&gt;</code>: Strong emphasis (typically bold).</li>
                        <li><code>&lt;em&gt;</code>: Emphasis (typically italic).</li>
                        <li><code>&lt;br&gt;</code>: Line break.</li>
                        <li><code>&lt;hr&gt;</code>: Horizontal rule.</li>
                    </ol>
                    <h1 className='mt-7 mb-2 font-semibold'>List Tags</h1>
                    <ol className='list-decimal'>
                        <li><code>&lt;ul&gt; </code>: Unordered list.</li>
                        <li><code>&lt;ol&gt;</code>: Ordered list.</li>
                        <li><code>&lt;li&gt;</code>: List item.</li>
                    </ol>
                    <h1 className='mt-7 mb-2 font-semibold'>Hyperlink and Media Tags</h1>
                    <ol className='list-decimal'>
                        <li><code>&lt;a&gt;</code>: Anchor (used for links).</li>
                        <li><code>&lt;img&gt;</code>: Image.</li>
                        <li><code>&lt;audio&gt;</code>: Audio content.</li>
                        <li><code>&lt;video&gt;</code>: Video content.</li>
                    </ol>
                    <h1 className='mt-7 mb-2 font-semibold'>Form Tags</h1>
                    <ol className='list-decimal'>
                        <li><code>&lt;form&gt;</code>: Form.</li>
                        <li><code>&lt;input&gt;</code>: Input field.</li>
                        <li><code>&lt;textarea&gt;</code>: Text area.</li>
                        <li><code>&lt;button&gt;</code>: Button.</li>
                        <li><code>&lt;select&gt;</code>: Dropdown list.</li>
                        <li><code>&lt;option&gt;</code>: Options within a <code>&lt;select&gt;</code> or <code>&lt;datalist&gt;</code>.</li>
                    </ol>
                    <h1 className='mt-7 mb-2 font-semibold'>Table Tags</h1>
                    <ol className='list-decimal'>
                        <li><code>&lt;table&gt;</code>: Table.</li>
                        <li><code>&lt;tr&gt;</code>: Table row.</li>
                        <li><code>&lt;td&gt;</code>: Table data cell.</li>
                        <li><code>&lt;th&gt;</code>: Table header cell.</li>
                        <li><code>&lt;thead&gt;</code>: Table header group.</li>
                        <li><code>&lt;tbody&gt;</code>: Table body group.</li>
                        <li><code>&lt;tfoot&gt;</code>: Table footer group.</li>
                    </ol >
                    <h1 className='mt-7 mb-2 font-semibold'>Semantic Tags</h1>
                    < ol className='list-decimal'>
                        <li><code>&lt;header&gt;</code>: Header section.</li>
                        <li><code>&lt;footer&gt;</code>: Footer section.</li>
                        <li><code>&lt;article&gt;</code>: Article.</li>
                        <li><code>&lt;section&gt;</code>: Section.</li>
                        <li><code>&lt;nav&gt;</code>: Navigation.</li>
                        <li><code>&lt;aside&gt;</code>: Sidebar content.</li>
            <img src="https://media.licdn.com/dms/image/D4E12AQGuR3Fo5vHW9A/article-cover_image-shrink_720_1280/0/1691429662154?e=2147483647&v=beta&t=_vo7AXuXOCAsDO_Y4BikTZtORNJoL9zbTd9WeiLCZz4"alt=""/>
            
                    </ol >
                    <h1 className='mt-7 mb-2 font-semibold'>Pared and Unpared Tags</h1>
                    starting tag and ending tag
                    <h1 className='mt-7 mb-2 font-semibold'>Html Elements</h1>

                    <h1 className='mt-7 mb-2 font-semibold'>Types of HTML Attributes</h1>
                    <h1 className='mt-7 mb-2 font-semibold'>Core Attributes:</h1>
                    <ol>
                        <li>id</li>
                        <li>class</li>
                        <li>title</li>
                        <li>style</li>
                    </ol>
                    <h1 className='mt-7 mb-2 font-semibold'>Internationalization Attributes: </h1>
                    <p>These attributes help adapt the document to different languages and regions.</p>

                    <h1 className='mt-7 mb-2 font-semibold'>Comment</h1>
                    <p>comment out unused code or to specify</p>

                    <h1 className='mt-7 mb-2 font-semibold'>!Important</h1>
                    <p>Use alt,lazy in image,rel='noopener noreferrer' in Anchor tag</p>
                </section >

            </div >
            <div className="flex justify-center mobile:flex-col">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR6DE6ETblMjlNqG7EB7hsSNITN1KgKgcn7zb04DP1mcUaDCwhJ" alt=""
                />
                <img src="https://www.mixamo.com/api/v1/characters/7f3f4e32-2b70-4c69-9a3d-0bdac6188241/assets/thumbnails/static.png" alt="" />
            </div>
            <div className='bg-gray-950'>

                <canvas ref={canvasRef} id="canvas3d" height={420}/>
            </div>
        </>
    )
}

export default Html