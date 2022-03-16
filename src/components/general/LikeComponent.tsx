import React, { useEffect, useState } from 'react'
import { FetchedData } from '../../interfaces/myInterfaces';

interface props {
    id: string
}

export const LikeComponent: React.FC<props> = ({ id }) => {
    const [clickStatus, setClickStatus] = useState<boolean>();

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
                    console.log(data.err);
                } else {
                    // setstatus
                }
            } catch (err) {
                console.log(err);
            }
        }
        checkStatus();
    }, [id]);

    // need to change fetch depends on status
    const handleLike: Function = async () => {
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
            {/* change button depend on status */}
            <button onClick={() => handleLike()}>Like</button>
        </div>
    )
}