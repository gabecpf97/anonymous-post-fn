import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
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