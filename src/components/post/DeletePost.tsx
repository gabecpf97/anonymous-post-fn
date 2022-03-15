import React, { SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ErrorDetail, FetchedData } from '../../interfaces/myInterfaces';

interface props {
    id: string
}

export const DeletePost: React.FC<props> = ({ id }) => {
    const [errors, setErrors] = useState<ErrorDetail[] | string>();
    const navigator = useNavigate();
    
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response: Response = await fetch(`http://localhost:5000/post/${id}`, {
            method: "DELETE",
            headers: {
                "Authurization": `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data: FetchedData = await response.json();
        if (data.err) {
            setErrors(data.err);
        } else {
            navigator('/');
        }
    }

    return (
        <div>

        </div>
    )
}