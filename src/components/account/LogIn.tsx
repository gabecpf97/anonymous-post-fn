import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { ErrorDetail, FetchedData } from '../../interfaces/myInterfaces';
import { Error } from '../general/Errors';
import { FormField } from '../general/FormField';
import { SubmitField } from '../general/SubmitField';

export const LogIn: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [errors, setErrors] = useState<string | ErrorDetail[]>();

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const user_info = { email, password };
        const respone: Response = await fetch(`http://localhost:5000/user/log_in`, {
            method: "POST",
            body: JSON.stringify(user_info),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data: FetchedData = await respone.json();
        if (data.err) {
            setErrors(data.err);
        } else {
            localStorage.setItem('token', data.token as string);
            localStorage.setItem('user', JSON.stringify(data.theUser));
            // nav to home page
        }
    }
    
    return (
        <div>
            <form onSubmit={(e: SyntheticEvent) => handleSubmit(e)}>
                <FormField name='email' isRequired={true} type='text'
                    onChnageFn={onEmailChange} />
                <FormField name='password' isRequired={true} type='password'
                    onChnageFn={onPasswordChange} />
                <SubmitField display='Log In' />
            </form>
            {errors && <Error errors={errors} />}
        </div>
    )
}