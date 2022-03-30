import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ErrorDetail, FetchedData } from '../../interfaces/myInterfaces';
import { Error } from '../general/Errors';
import { FormField } from '../general/FormField';
import { SubmitField } from '../general/SubmitField';

export const EditAccount: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [errors, setErrors] = useState<ErrorDetail[] | string>();
    const navigator = useNavigate();


    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit: Function = async (e: SyntheticEvent) => {
        const response: Response = await fetch(`http://localhost:5000/user/edit`, {
            body: JSON.stringify({
                email,
            }),
            headers: {
                "Authorization": `bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            }
        });
        const data: FetchedData = await response.json();
        if (data.err) {
            setErrors(data.err);
        } else {
            navigator('/account');
        }
    }

    return (
        <div>
            <form onSubmit={(e: SyntheticEvent) => handleSubmit(e)}>
                <FormField name='email' type='string' onChnageFn={changeEmail}
                    isRequired={true} />
                <SubmitField display='edit' />
            </form>
            {errors && <Error errors={errors} />}
        </div>
    )
}