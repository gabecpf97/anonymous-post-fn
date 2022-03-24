import React, { useState } from 'react'
import { FetchedData } from '../../interfaces/myInterfaces';

export const RemoveAccount: React.FC = () => {
    const [buttStatus, setButStatus] = useState<boolean>();

    const changeStatus = () => {
        setButStatus(!buttStatus);
    }

    const handleRemove = async () => {
        const response: Response = await fetch(`http://locahost:5000/user/remove`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data: FetchedData = await response.json();
        if (data.err) {
            // error handle
        } else {
            // log out and go to login / sign up page
        }
    }

    return (
        <div>

        </div>
    )
}