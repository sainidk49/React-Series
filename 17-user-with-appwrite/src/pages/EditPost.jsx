import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import postServices from '../appwrite-services/databaseConfig'
import PostFrom from '../components/post-from/PostFrom'

const EditPost = () => {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            postServices.getPostApi(slug)
            .then((post)=>{
                if(post){
                    setPost(post)
                }
                else{
                    navigate("/")
                }
            })
        }
    }, [slug, navigate])

    return post ? (
        <div>
            <PostFrom post={post} />
        </div>
    ): null
}

export default EditPost