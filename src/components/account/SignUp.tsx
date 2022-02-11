import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Error } from '../general/Errors';
import { FormField } from '../general/FormField';
import { SubmitField } from '../general/SubmitField';

interface err_detail {
    value: string,
    msg: string,
    param: string,
    location: string
}


export const SignUp: React.FC = () => {
    const [username, setUsername] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirm_password, setConfirm] = useState<string>();
    const [errors, setErrors] = useState<string | err_detail[]>();

    const onUsernameChnage = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirm(e.target.value);
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        // fetch post data to backend
        //nav to home page
        const user_info = {
            username,
            email,
            password,
            confirm_password
        }
        const response: Response = await fetch(`http://localhost:5000/user/create`, {
            method: "POST",
            body: JSON.stringify(user_info),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data: any = await response.json();
        if (data.err) {
            setErrors(data.err);
        } else {
            console.log(data);
        }
    }

    return (
        <div>
            <form onSubmit={(e: SyntheticEvent) => handleSubmit(e)}>
                <FormField name='username' isRequired={true} 
                    type='text' onChnageFn={onUsernameChnage}/>
                <FormField name='email' isRequired={true} 
                    type='text' onChnageFn={onEmailChange}/>
                <FormField name='password' isRequired={true} 
                    type='text' onChnageFn={onPasswordChange}/>
                <FormField name='confirm_password' isRequired={true} 
                    type='text' onChnageFn={onConfirmChange}/>
                <SubmitField display="Sign Up" />
            </form>
            {errors && <Error errors={errors} />}
        </div>
    )
}