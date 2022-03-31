import React, { useState } from 'react'
import { ErrorDetail, FetchedData } from '../../interfaces/myInterfaces';
import { Error } from '../general/Errors';

interface props {
    id: string
}

export const RemoveComment: React.FC<props> = ({ id }) => {
    const [buttStatus, setButtStatus] = useState<boolean>(false);
    const [errors, setErrors] = useState<ErrorDetail[] | string>();

    const handleRemove = async () => {
        try {
            const resposne: Response = await fetch(`http://localhost:5000/comment/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data: FetchedData = await resposne.json();
            if (data.err) {
                setErrors(data.err);
            } else {
                // reload post page
            }
        } catch (err: any) {
            setErrors(err);
        }
    }

    return (
        <div>
            <button onClick={() => setButtStatus(!buttStatus)}>{
                buttStatus ? 'Cancel' : 'Remove Comment'
            }</button>
            {buttStatus && 
                <div>
                    <h2>Remove comment?</h2>
                    <button onClick={() => handleRemove()}>Yes</button>
                </div>
            }
            {errors && <Error errors={errors} />}
        </div>
    )
}