import {
  Input,
  FormControl,
  FormHelperText,
  FormErrorMessage
} from '@chakra-ui/react'

import { useState } from 'react'

export default function InputEmail(props) {

  const [input, setInput] = useState('')

  const handleInputChange = (e) => { setInput(e.target.value) }

  const isError = input === ''

  return (
      <FormControl isRequired>
        <Input id='email'
          type='email'
          placeholder='E-mail'
          onChange={handleInputChange}
          m={props.m}
        />
        <FormHelperText></FormHelperText>
      {!isError ? (
        <FormHelperText>
          Enter the email.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
  )
}