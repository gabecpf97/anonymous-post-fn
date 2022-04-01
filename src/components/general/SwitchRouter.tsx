import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { EditAccount } from '../account/EditAccount'
import { LogIn } from '../account/LogIn'
import { ShowAccount } from '../account/ShowAccount'
import { SignUp } from '../account/SignUp'
import { CreatePost } from '../post/CreatePost'
import { Home } from './Home'
import { Nav } from './Nav'

export const SwitchRouter: React.FC = () => {

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/log-in' element={<LogIn />} />
                <Route path='/account' element={<ShowAccount />} />
                <Route path='/account/edit' element={<EditAccount />} />
                <Route path='/create/post' element={<CreatePost />} />
            </Routes>
        </BrowserRouter>
    )
}
