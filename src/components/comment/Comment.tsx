import React, { useEffect, useState } from 'react'
import { CommentType, ErrorDetail, FetchedData } from '../../interfaces/myInterfaces'
import { Error } from '../general/Errors';

interface props {
    id: string
}

export const Comment: React.FC<props> = ({ id }) => {
    const [comment, setComment] = useState<CommentType>();
    const [errors, setErrors] = useState<ErrorDetail[] | string>();

    useEffect(() => {
        const fetchComment: Function = async () => {
            try {
                const response: Response = await fetch(`http://localhost:5000/comment/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const data: FetchedData = await response.json();
                if (data.err) {
                    setErrors(data.err);
                } else {
                    setComment(data.theComment);
                }
            } catch (err: any) {
                setErrors(err);
            }
        }
        fetchComment();
    }, [id]);

    return (
        <div>
            {comment &&
                <div>
                    <p>{comment.op_name}</p>
                    <p>{comment.message}</p>
                    <p>{comment.likes}</p>
                    <p>{comment.date}</p>
                </div>
            }
            {errors && <Error errors={errors} />}
        </div>
    )
}