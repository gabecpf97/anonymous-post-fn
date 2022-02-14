import React from 'react'
import { ErrorDetail } from '../../interfaces/myInterfaces'

interface props {
    errors: string | ErrorDetail[]
}

export const Error: React.FC<props> = ({ errors }) => {

    return (
        <div>
            {typeof(errors) === 'string' && 
                <p>{errors}</p>
            }
            {typeof(errors) !== 'string' && errors.map((err: ErrorDetail, i: number) => {
                return (
                    <p key={i}>{err.msg}</p>
                )
            })}
        </div>
    )
}