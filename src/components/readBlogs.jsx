import React from 'react'
import { useSelector } from 'react-redux'

const ReadBlogs = () => {
    const Blogs = useSelector(state => state.blogs)

    console.log(Blogs)
    return (
        <section className='readBlogs'>
            <h2>Articles</h2>
            <div className='articleBlog'>
            {
                Blogs.map((element) => (
                    <div className='blogCard' key={element.id}>
                        <h3>{element.title}</h3>
                        <p>{element.article}</p>
                        <p>{element.author}</p>
                    </div>
                ))
            }
            </div>
        </section>
    )
}

export default ReadBlogs