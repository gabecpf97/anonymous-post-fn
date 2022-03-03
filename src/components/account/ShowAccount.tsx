import React, { useState } from 'react'
import { UserType } from "../../interfaces/myInterfaces";

export const ShowAccount: React.FC = () => {
    const curUser: UserType = JSON.parse(localStorage.getItem('user') || '');

    return (
        <div>
            <p>{curUser.username}</p>
            <p>{curUser.date_join}</p>
        </div>
    )
}