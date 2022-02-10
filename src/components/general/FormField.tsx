import React from 'react'
import { TextInput } from 'react-native'

interface props {
    name: string,
    onChnageFn: () => {},
    isRequired?: boolean,
    value?: any
}

export const FormField: React.FC<props> = ({name, isRequired, onChnageFn}) => {

    return (
        <TextInput 
            placeholder={name}
            
        />
    )
}