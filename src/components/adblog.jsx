import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBlogg } from '../redux/reducers/blogSlice'


const Adblog = () => {
    const [Data, setData] = useState({ title: "", author: "", article: "" })
    const dispatch = useDispatch()

    const addData = (e) =>{
        e.preventDefault();
        dispatch(addBlogg(Data))
    }

    const enterData = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form className='addBlog-Form'>
                <h3>Add New Blog</h3>
                <div className='inputSec'>
                    <label>Title:</label>
                    <input type='text' name='title' className='inputFiled' onChange={enterData}/>
                </div>
                <div className='inputSec'>
                    <label>Author:</label>
                    <input type='text' name='author' className='inputFiled' onChange={enterData}/>
                </div>
                <div className='inputSec'>
                    <label>Article:</label>
                    <input type='text' name='article' className='inputFiled' onChange={enterData}/>
                </div>
                <button className='add-Btn' onClick={addData}>Add Blog</button>
            </form>
        </>
    )
}

export default Adblog