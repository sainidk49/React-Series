import React, { useCallback, useEffect } from 'react'
import { useForm } from "react-hook-form"
import Input from "../input/Input"
import Select from "../input/Select"
import postServices from "../../appwrite-services/databaseConfig"
import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"
const PostFrom = ({ post }) => {
    console.log(post)
    const { register, handleSubmit, watch, setValue, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active"
        }
    })
    const navigate = useNavigate();
    const userData = useSelector((state)=> state.userAuth.userData)

    const submit = async(data) =>{
        if (post) {
            const file = data.image[0] ? await postServices.uploadFileApi(data.image[0]) : null;
            if (file) {
                postServices.deleteFileApi(post.featuredImage)
                const dbPost = await postServices.updatePostApi(post.$id, {
                    ...data,
                    featuredImage: file.$id
                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
        else{
            const file = await postServices.uploadFileApi(data.image[0])
            if(file){
                const dbPost = await postServices.createPostApi({
                    ...data,
                    featuredImage : file.$id,
                    userId : userData.$id
                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransfrom = useCallback((value)=>{
        if(value && typeof value === "String"){
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d]+/g, "-")
        }
        else{
            return ""
        }
    }, []) 
    
    useEffect(()=>{
        const subscription = watch((value, {name})=>{
            if(name === "title"){
                setValue('slug', slugTransfrom(value.title))
            }
        })
        return ()=>{
            subscription.unsubscribe()
        }
    },[watch, slugTransfrom, setValue])

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <Input 
                    label="Title :" 
                    placeholder = "enter the title"
                    {...register("title", {required: true})}
                    />

                    <Input
                        label="slug"
                        placeholder = "slug"
                        {...register("slug",{required: true})}
                        onInput = {(e)=>{
                            setValue("slug", slugTransfrom(e.currentTarget.value), {
                                shouldValidate: true
                            })
                        }}
                    />

                    <Input 
                        label ="Content :"
                        type="text"
                        {...register("content")}
                    />

                    <Input 
                        label="Upload a image"
                        type=" file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", {
                            required: !post
                        })}
                        
                    />
                    {post && (
                        <div>
                            <img src={postServices.getFilePrevApi(post.featuredImage)} alt={post.title} />
                        </div>
                    )}
                    <Select 
                        options = {["active", "inactive"]}
                        label = "status"
                        {...register("status", {required: true})}
                    />
                    <button type='submit'>
                        {post ? "Update": "Submit"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostFrom