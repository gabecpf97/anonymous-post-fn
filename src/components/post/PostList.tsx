import React, { useEffect, useState } from 'react'
import { Error } from '../general/Errors';
import { Post } from './Post';

interface props {
    genreID?: string,
    list?: string[]
}

export const PostList: React.FC<props> = ({ genreID, list }) => {
    const [posts, setPosts] = useState<string[]>();
    const [errors, setErrors] = useState<string>();

    useEffect(() => {
        const fetchPosts: Function = async () => {
            try {
                const response: Response = await fetch(`http://localhost:5000/posts/genre/${genreID}`,{
                    headers: {
                        "Authrization": `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const data: any = await response.json();
                if (data.err) {
                    setErrors(data.err);
                } else {
                    setPosts(data.thePosts);
                }
            } catch (e: any) {
                setErrors(e);
            }
        }
        if (!list)
            fetchPosts();
        else 
            setPosts(list);
    }, [genreID, list]);

    return (
        <div>
            {posts && posts.map((postID: string, i: number) => {
                return (
                    <Post id={postID} key={i}/>
                )
            })}
            {errors && <Error errors={errors} />}
        </div>
    )
}