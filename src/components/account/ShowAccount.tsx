import React, { useEffect, useState } from 'react'
import { ErrorDetail, UserType } from "../../interfaces/myInterfaces";

export const ShowAccount: React.FC = () => {
    const curUser: UserType = JSON.parse(localStorage.getItem('user') || '');
    const [posts, setPosts] = useState<string[]>();
    const [liked, setLiked] = useState<string[]>();
    const [comments, setComments] = useState<string[]>();
    const [errors, setErrors] = useState<ErrorDetail | string>();

    useEffect(() => {
        const fetchData: Function = async () => {
            try {
                
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