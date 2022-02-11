import React from 'react'
import { Link } from 'react-router-dom'

export const Nav: React.FC = () => {

    return (
        <div className='flex px-10 pt-5'>
            <Link to="/" className='flex-1'>
                <h2>Anon</h2>
            </Link>
            <div className='flex'>
                <Link to='/sign-up' className='pages'>
                    Sign Up
                </Link>
            </div>
        </div>
    )
}