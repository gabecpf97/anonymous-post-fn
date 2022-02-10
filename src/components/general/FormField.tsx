import React, { ChangeEvent } from 'react'
import { View } from 'react-native'

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
        <View>
            <label>{name}</label>   
            <input 
                name={name} 
                required={isRequired}
                type={type}
                onChange={(e) => onChnageFn(e)}
                value={value}
            />
        </View>
    )
}