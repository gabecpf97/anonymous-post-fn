import React from 'react'
import { Link } from 'react-router-dom'

export const Nav: React.FC = () => {

    return (
        <div>
            <Link to="/">
                <h2>Anon</h2>
            </Link>
            <Link to='/sign-up'>Sign Up</Link>
        </div>
    )
}