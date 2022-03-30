import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ErrorDetail, FetchedData } from '../../interfaces/myInterfaces';
import { Error } from '../general/Errors';

export const RemoveAccount: React.FC = () => {
    const [buttStatus, setButStatus] = useState<boolean>(false);
    const [errors, setErrors] = useState<ErrorDetail[] | string>();
    const navigator = useNavigate();

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
            setErrors(data.err);
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigator('/');
        }
    }

    return (
        <div>
            {buttStatus && 
                <div>
                    <h2>Remove account?</h2>
                    <button onClick={() => changeStatus()}>Cancel</button>
                    <button onClick={() => handleRemove()}>Yes</button>
                </div>
            }
            {!buttStatus &&
                <button onClick={() => changeStatus()}>Remove Account</button>
            }
            {errors && <Error errors={errors} />}
        </div>
    )
}