import {
  Box,
  Center,
  VStack
} from '@chakra-ui/react'
import InputEmail from '../components/InputEmail'
import InputPassword from '../components/InputPassword'
import SubmitButton from '../components/SubmitButton'


export default function Login() {
  return (
    <Center m={20} p={2}>
      <Box boxShadow='dark-lg' rounded='md' bg='gray.50' m={12} p={3}>
        <VStack m={8}>
            <InputEmail m={1} />
            <InputPassword m={1} />
            <SubmitButton p={5} />
        </VStack>
      </Box>
    </Center>
  )
}