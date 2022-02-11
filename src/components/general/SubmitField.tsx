import React from 'react'

interface props {
    display: string
}

export const SubmitField: React.FC<props> = ({ display }) => {

    return (
        <input className='pages' type="submit" value={display} />
    )
}