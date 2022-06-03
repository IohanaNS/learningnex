import {
    Input,
    FormControl,
    FormHelperText,
    FormErrorMessage
} from '@chakra-ui/react'
import { useState } from 'react'


export default function InputPassword(props) {

    const [input, setInput] = useState('')

    const handleInputChange = (e) => { setInput(e.target.value) }

    const isError = input === ''

    return (
        <FormControl isRequired>
            <Input id='password'
                type='password'
                placeholder='Password'
                onChange={handleInputChange}
                m={props.m}
            />
            <FormHelperText></FormHelperText>
            {!isError ? (
                <FormHelperText>
                    Enter the password.
                </FormHelperText>
            ) : (
                <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
        </FormControl>
    )
}