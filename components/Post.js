import React, { Route, Routes, useParams} from "react";
import EditPost from  "./EditPost";
const Post = (props) => {
    const params = useParams();

    
    const selectedPost = props.posts.filter((post) => post.id === params._postId )[0];
    
    if(!selectedPost) {
        return <></>;
    }

    return (
        <div>
            <h1>Title: {selectedPost.title}</h1>
            <p>Description: {selectedPost.description}</p>
            <Routes>
            <Route element={<EditPost post={selectedPost} />} path= "edit" />
            </Routes>
        </div>
    );
};

export default Post;