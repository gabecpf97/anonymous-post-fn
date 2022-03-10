import React, { useEffect, useState } from 'react'
import { ErrorDetail, FetchedData } from '../../interfaces/myInterfaces';
import { Error } from '../general/Errors';
import { Comment } from './Comment';

interface props {
    list?: string[]
}

export const CommentList: React.FC<props> = ({ list }) => {
    const [comments, setComments] = useState<string[]>();
    const [errors, setErrors] = useState<ErrorDetail[] | string>();

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response: Response = await fetch(`http://localhost:5000/comments`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                const data: FetchedData = await response.json();
                if (data.err) {
                    setErrors(data.err);
                } else {
                    setComments(data.theComments);
                }
            } catch (err: any) {
                setErrors(err);
            }
        }
        if (!list)
            fetchComments();
        else    
            setComments(list);
    }, [list]);

    return (
        <div>
            {comments && comments.map((comment: string, i: number) => {
                return (
                    <Comment id={comment} key={i} />
                )
            })}
            {errors && <Error errors={errors} />}
        </div>
    )
}