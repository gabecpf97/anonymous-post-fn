import React, { ChangeEvent } from 'react'

interface props {
    name: string,
    onChnageFn: (e: ChangeEvent<HTMLInputElement>) => void,
    type: string,
    isRequired?: boolean,
    value?: any
}

export const FormField: React.FC<props> = 
({name, isRequired, type, onChnageFn, value}) => {

    return (
        <div className='flex flex-col mb-5'>
            <label>{name}</label>   
            <input 
                name={name} 
                required={isRequired}
                type={type}
                onChange={(e) => onChnageFn(e)}
                value={value}
            />
        </div>
    )
}