import React from 'react'

interface props {
    errors: string | err_detail[]
}

interface err_detail {
    value: string,
    msg: string,
    param: string,
    location: string
}

export const Error: React.FC<props> = ({ errors }) => {

    return (
        <div>
            {typeof(errors) === 'string' && 
                <p>{errors}</p>
            }
            {typeof(errors) !== 'string' && errors.map((err: err_detail, i: number) => {
                return (
                    <p key={i}>{err.msg}</p>
                )
            })}
        </div>
    )
}