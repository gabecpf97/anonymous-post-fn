import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Error } from '../general/Errors';
import { FormField } from '../general/FormField'
import { SubmitField } from '../general/SubmitField'

export const ConfirmCode: React.FC = () => {
    const id: string | null = localStorage.getItem('userID');
    const navigator: NavigateFunction = useNavigate();
    const [code, setCode] = useState<string>();
    const [errors, setErrors] = useState<string>();

    const onCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value);
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const respone: Response = await fetch(`http://localhost:5000/user/verify/${id}`, {
            method: "POST",
            body: JSON.stringify({code}),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data: any = await respone.json();
        if (data.err) {
            setErrors(data.err);
        } else {
            localStorage.setItem('user', JSON.stringify(data.theUser));
            localStorage.setItem('token', data.token);
            navigator('/');
        }
    }

    return (
        <div>
            <h1>Please check you email for confirm code</h1>
            <form onSubmit={(e: SyntheticEvent) => handleSubmit(e)}>
                <FormField name='Code' onChnageFn={onCodeChange} 
                    type='text' isRequired={true} />
                <SubmitField display='Submit' />
            </form>
            {errors && <Error errors={errors} />}
        </div>
    )
}