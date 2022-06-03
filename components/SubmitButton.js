import {
    Button,
    FormControl
} from '@chakra-ui/react'
import { useState } from 'react'

export default function SubmitButton(props) {

    const [input, setInput] = useState(false)

    const HandleClick = (e) => {setInput(e.target.value)}

    return (
        <FormControl>
        <Button
            type='submit'
            colorScheme='messenger'
            id='submit'
            onClick={HandleClick}
            p = {props.p}
            // isLoading={isSubmitting}
        >Sign in</Button>
        </FormControl>
    )
}