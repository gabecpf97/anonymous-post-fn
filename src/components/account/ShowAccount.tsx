import React, { useEffect, useState } from 'react'
import { ErrorDetail, FetchedData, UserType } from "../../interfaces/myInterfaces";

export const ShowAccount: React.FC = () => {
    const curUser: UserType = JSON.parse(localStorage.getItem('user') || '');
    const [posts, setPosts] = useState<string[]>();
    const [liked, setLiked] = useState<string[]>();
    const [comments, setComments] = useState<string[]>();
    const [errors, setErrors] = useState<ErrorDetail[] | string>();

    useEffect(() => {
        const fetchData: Function = async () => {
            try {
                const response: Response = await fetch(`http://localhost:5000/user`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                });
                const data: FetchedData = await response.json();
                if (data.err) {
                    setErrors(data.err);
                } else {
                    setPosts(data.thePosts);
                    // setLiked(data.thePosts);
                    setComments(data.theComments);
                }
            } catch (err: any) {
                setErrors(err);
            }
        };
        fetchData();
    }, [curUser]);

    return (
        <div>
            <p>{curUser.username}</p>
            <p>{curUser.date_join}</p>
        </div>
    )
}