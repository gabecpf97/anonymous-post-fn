import React from 'react'
import { FetchedData } from '../../interfaces/myInterfaces';

interface props {
    id: string
}

export const LikeComponent: React.FC<props> = ({ id }) => {

    const handleLike: Function = async() => {
        const resposne: Response = await fetch(`http://localhost:5000/post/like/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data: FetchedData = await resposne.json();
        if (data.err) {
            console.log(data.err);
        } else {
            // fetch liked number again
        }
    }

    return (
        <div>
            <button onClick={() => handleLike()}>Like</button>
        </div>
    )
}