import React, { useEffect, useState } from 'react'
import { PostType } from '../../interfaces/myInterfaces';
import { Error } from '../general/Errors';

interface props {
    id: string
}

export const Post: React.FC<props> = ({ id }) => {
    const [post, setPost] = useState<PostType>();
    const [errors, setErrors] = useState<string>();

    useEffect(() => {
        const fetchPost: Function = async () => {
            try {
                const response: Response = await fetch (`http://localhost:5000/post/${id}`, {
                    headers: {
                        "Authrization": `Bearer ${localStorage.getItem('token')}`
                    }
                });
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