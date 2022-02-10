import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { View } from 'react-native'
import { FormField } from '../general/FormField';
import { SubmitField } from '../general/SubmitField';

export const SignUp: React.FC = () => {
    const [username, setUsername] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirm_password, setConfirm] = useState<string>();

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

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        // fetch post data to backend
        //nav to home page
        const user_info = {
            username,
            email,
            password,
            confirm_password
        }
        console.log(user_info);
    }

    return (
        <View>
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
        </View>
    )
}