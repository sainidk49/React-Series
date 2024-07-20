import React from 'react'
import postServices from '../../appwrite-services/databaseConfig'
import { Link } from "react-router-dom"
const Postcard = ({
    $id,
    title,
    featuredImage
}) => {
    return (
        <Link to= {`/post/${$id}`}>
            <div>
                <img src={postServices.getFilePrevApi(featuredImage)} alt={title} />
                <h2>{title}</h2>
            </div>
        </Link>
  )
}

export default Postcard