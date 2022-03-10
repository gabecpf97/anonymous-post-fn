import React, { useEffect, useState } from 'react'
import { ErrorDetail, FetchedData, UserDetails, UserType } from "../../interfaces/myInterfaces";
import { CommentList } from '../comment/CommentList';
import { PostList } from "../post/PostList";

export const ShowAccount: React.FC = () => {
    const curUser: UserType = JSON.parse(localStorage.getItem('user') || '');
    const [userInfo, setUserInfo] = useState<UserDetails>();
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
                    setUserInfo((data.theUser as UserDetails));
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
            <PostList list={userInfo?.posts} />
        </div>
    )
}