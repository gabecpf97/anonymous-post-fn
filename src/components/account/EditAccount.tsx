import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { FetchedData } from '../../interfaces/myInterfaces';
import { FormField } from '../general/FormField';
import { SubmitField } from '../general/SubmitField';

export const EditAccount: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit: Function = async (e: SyntheticEvent) => {
        // change account info fetch call
        const response: Response = await fetch(`http://localhost:5000/user/edit`, {
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                "Authorization": `bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            }
        });
        const data: FetchedData = await response.json();
        if (data.err) {
            // hadle error
        } else {
            // reload account page
        }
    }

    return (
        <div>
            <form onSubmit={(e: SyntheticEvent) => handleSubmit(e)}>
                <FormField name='email' type='string' onChnageFn={changeEmail}
                    isRequired={true} />
                <FormField name='email' type='string' onChnageFn={changeEmail}
                    isRequired={true} />
                <SubmitField display='edit' />
            </form>
        </div>
    )
}