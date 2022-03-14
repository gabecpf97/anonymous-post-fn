import React, { useEffect, useState } from 'react'
import { ErrorDetail, FetchedData, UserDisplayType } from '../../interfaces/myInterfaces'
import { ShowMedia } from '../post/ShowMedia';
import { Error } from './Errors';

interface props {
    id: string
}

export const UserInfo: React.FC<props> = ({ id }) => {
    const [user, setUser] = useState<UserDisplayType>();
    const [errors, setErrors] = useState<ErrorDetail[] | string>();

    useEffect(() => {
        const fetchData: Function = async () => {
            try {
                const response: Response = await fetch(`http://localhost:5000/user/info/${id}`,{
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const data: FetchedData = await response.json();
                if (data.err) {
                    setErrors(data.err);
                } else {
                    setUser(data.theUser as UserDisplayType);
                }
            } catch (err: any) {
                setErrors(err);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div>
            {user &&
                <div>
                    <ShowMedia fileName={user.icon} />
                    <p>{user.op_name}</p>
                </div>
            }
            {errors && <Error errors={errors} />}
        </div>
    )
}