import React, { useState } from 'react'
import { ErrorDetail } from '../../interfaces/myInterfaces';

export const CreateComment: React.FC = () => {
    const [message, setMessage] = useState<string>();
    const [medias, setMedias] = useState<FileList>();
    const [errors, setErros] = useState<ErrorDetail[] | string>();

    return (
        <div>

        </div>
    )
}