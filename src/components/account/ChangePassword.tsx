import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { FetchedData } from '../../interfaces/myInterfaces';

export const ChangePassword: React.FC = () => {
    const [password, setPassword] = useState<string>();
    const [newPassword, setNewPassword] = useState<string>();
    const [confirm, setConfirm] = useState<string>();

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
            // error handle
        } else {
            // go back to account page
        }
    }

    return (
        <div>

        </div>
    )
}