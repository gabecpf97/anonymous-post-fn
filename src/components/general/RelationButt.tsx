import React, { useState } from 'react'
import { FetchedData } from '../../interfaces/myInterfaces';

interface props {
    id: string
}

export const RelationButt: React.FC<props> = ({ id }) => {
    const [buttStatus, setButtStatus] = useState<boolean>();

    const handleChagnes = async () => {
        const response: Response = await fetch(`http://localhost:5000/post/${id}/${buttStatus ? 'unlike' : 'like'}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data: FetchedData = await response.json();
        if (data.err) {
            // error handle
        } else {
            setButtStatus(!buttStatus);
        }
    }

    return (
        <div>
            <button onChange={() => handleChagnes()}>
                {buttStatus? 'unlike' : 'like'}
            </button>
        </div>
    )
}