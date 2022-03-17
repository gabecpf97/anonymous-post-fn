import React, { useEffect, useState } from 'react'
import { ErrorDetail, FetchedData } from '../../interfaces/myInterfaces';
import { Error } from './Errors';

interface props {
    id: string
}

export const LikeComponent: React.FC<props> = ({ id }) => {
    const [clickStatus, setClickStatus] = useState<boolean>();
    const [callType, setCallType] = useState<string>();
    const [errors, setErrors] = useState<ErrorDetail[] | string>();

    useEffect(() => {
        const checkStatus = async () => {
            try {
                const response: Response = await fetch(`http://localhost:5000/post/checkLiked/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const data: FetchedData = await response.json();
                if (data.err) {
                    setErrors(data.err);
                } else {
                    // setstatus and set call type
                }
            } catch (err: any) {
                setErrors(err);
            }
        }
        checkStatus();
    }, [id]);

    // need to change fetch depends on status
    const handleLike: Function = async () => {
        const resposne: Response = await fetch(`http://localhost:5000/post/${id}/${callType}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data: FetchedData = await resposne.json();
        if (data.err) {
            setErrors(data.err);
        } else {
            setClickStatus(!clickStatus);
        }
    }

    return (
        <div>
            {/* change button depend on status */}
            <button onClick={() => handleLike()}>{clickStatus ? 'like' : 'unlike'}</button>
            {errors && <Error errors={errors} />}
        </div>
    )
}