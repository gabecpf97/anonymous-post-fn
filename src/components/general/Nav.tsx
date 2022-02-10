import React from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'

export const Nav: React.FC = () => {

    return (
        <View>
            <Link to="/">
                <Text>Anon</Text>
            </Link>
            <Link to='/sign-up'>
                <Text>Sign Up</Text>
            </Link>
        </View>
    )
}