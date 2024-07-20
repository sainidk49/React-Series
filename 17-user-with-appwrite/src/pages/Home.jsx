import React, { useEffect, useState } from 'react'
import postServices from "../appwrite-services/databaseConfig"
import PostCard from "../components/postcard/Postcard"
const Home = () => {

    const [posts, setPosts] = useState(null)
    useEffect(()=>{
        postServices.getPostsApi([])
        .then((posts)=>{
          console.log(posts)
            if(posts){
                setPosts(posts)
            }
        })
    },[])
    return (
        <div>
          {posts ? 
          (<div>
            {posts.map((post)=>{
              <div key={post.$id}>
                <PostCard />
              </div>
            })}
          </div>): 
          <h1>No Post</h1>}
        </div>
      )
}

export default Home