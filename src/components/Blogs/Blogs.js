import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <h1 className='text-5xl'>Question and Answer</h1>
            <div>
                <h1 className='text-3xl my-3'>What is Context API ?</h1>
                <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.In React application, data is passed top-down via props, but such usage can be for certain types of props that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. In a React App</p>
            </div>
            <div>
                <h2 className='text-3xl my-3'>Semantic Tag</h2>
                <p>
                    Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on. By adding semantic HTML tags in a pages, its provide additional information that helps Google and Bing understand the roles and relative importance of the different parts of that page.
                </p>
            </div>
            <div>
                <h1 className='text-3xl my-3'>Inline Vs Inline Block Elements</h1>
                <p>
                    inline The element doesn’t start on a new line and only occupy just the width it requires. We can’t set the width or height. <br />
                    inline-block It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, We can set width and height values.
                </p>
            </div>
        </div>
    );
};

export default Blogs;