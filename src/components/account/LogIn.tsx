import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { ErrorDetail } from '../../interfaces/myInterfaces';
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

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const user_info = { email, password };
        // fetch post log in
        console.log(user_info);
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
        </div>
    )
}