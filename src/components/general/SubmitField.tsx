import React from 'react'

interface props {
    display: string
}

export const SubmitField: React.FC<props> = ({ display }) => {

    return (
        <input className='submit' type="submit" value={display} />
    )
}