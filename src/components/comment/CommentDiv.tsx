import React from 'react'
import { CreateComment } from './CreateComment'

interface props {
    id: string
}

export const CommentDiv: React.FC<props> = ({ id }) => {

    return (
        <div>
            <CreateComment id={id} />
        </div>
    )
}