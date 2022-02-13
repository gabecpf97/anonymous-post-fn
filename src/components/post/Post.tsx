import React, { useEffect, useState } from 'react'
import { Error } from '../general/Errors';

interface props {
    id: string
}

interface PostType {
    op_name: string,
    message: string,
    date: Date,
    medias: string,
    genre: string,
    likes: number,
    comments: string
}

export const Post: React.FC<props> = ({ id }) => {
    const [post, setPost] = useState<PostType>();
    const [errors, setErrors] = useState<string>();

    useEffect(() => {
        const fetchPost: Function = async () => {
            try {
                const response: Response = await fetch (`http://localhost:5000/post/${id}`);
                const data: any = await response.json();
                if (data.err) {
                    setErrors(data.err);
                } else {
                    setPost(data.thePost);
                }
            } catch (e: any) {
                setErrors(e);
            }
        }
        fetchPost();
    }, [id]);

    return (
        <div>
            {post && 
                <div>
                    <p>{post.message}</p>
                    <p>{post.op_name}</p>
                    <p>{post.genre}</p>
                    <p>{post.date}</p>
                    <p>{post.likes}</p>
                    {/* get media */}
                </div>
            }
            {errors && <Error errors={errors} />}
        </div>
    )
}