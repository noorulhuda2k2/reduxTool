import { createSlice, nanoid } from "@reduxjs/toolkit";


const blogSlice = createSlice({
    name: "blog",
    initialState: ({
        blogs: [{
            id: "001",
            title: "This is The Title",
            author: "author",
            article: "This is the content of the article",
        }]
    }),
    reducers:{
        addBlogg: (state, actions)=>{
            const blog = {
                id: nanoid(),
                title: actions.payload.title,
                author: actions.payload.author,
                article: actions.payload.article,
            }
            state.blogs.push(blog)
        }
    }
})


export const {addBlogg, removeBlog} = blogSlice.actions

export default blogSlice.reducer