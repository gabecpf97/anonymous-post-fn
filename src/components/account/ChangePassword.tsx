import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ErrorDetail, FetchedData } from '../../interfaces/myInterfaces';
import { Error } from '../general/Errors';
import { FormField } from '../general/FormField';
import { SubmitField } from '../general/SubmitField';

export const ChangePassword: React.FC = () => {
    const [password, setPassword] = useState<string>();
    const [newPassword, setNewPassword] = useState<string>();
    const [confirm, setConfirm] = useState<string>();
    const [errors, setErrors] = useState<ErrorDetail[] | string>();
    const navigator = useNavigate();

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onNewChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    }

    const onConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirm(e.target.value);
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const resposne: Response = await fetch(`http://localhost:5000/user/change_password`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                password,
                new_password: newPassword,
                confirm_password: confirm
            })
        });
        const data: FetchedData = await resposne.json();
        if (data.err) {
            setErrors(data.err);
        } else {
            navigator('/account');
        }
    }

    return (
        <div>
            <form onSubmit={(e: SyntheticEvent) => handleSubmit(e)}>
                <FormField name='password' type='password' isRequired={true}
                    onChnageFn={onPasswordChange} />
                <FormField name='new_password' type='text' isRequired={true}
                    onChnageFn={onNewChange} />
                <FormField name='confirm_password' type='text' isRequired={true}
                    onChnageFn={onConfirmChange} />
                <SubmitField display='save' />
            </form>
            {errors && <Error errors={errors} />}
        </div>
    )
}