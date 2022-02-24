import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { ErrorDetail, FetchedData } from '../../interfaces/myInterfaces';

interface props {
    id: string
}

export const CreateComment: React.FC<props> = ({ id }) => {
    const [msg, setMsg] = useState<string>();
    const [medias, setMedias] = useState<FileList | null>();
    const [errors, setErrors] = useState<ErrorDetail[] | string>();

    const onMsgChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value);
    }

    const onMediasChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMedias(e.target.files);
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const post_data: FormData = new FormData();
            post_data.append('message', msg as string);
            post_data.append('belong', id);
            if (medias) {
                for (let i: number = 0; i < medias.length; i++)
                    post_data.append('medias', medias.item(i) as File);
            }
            const respone: Response = await fetch(`http://localhost:5000/comment/${id}`, {
                method: "POST",
                body: post_data,
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                }
            });
            const data: FetchedData = await respone.json();
            if (data.err) {
                setErrors(data.err);
            } else {
                // go to id page
                console.log(data.post_id);
            }
        } catch (err: any) {
            setErrors(err);
        }
    }

    return (
        <div>
            
        </div>
    )
}