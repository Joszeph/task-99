import React from 'react'
import {Card, Form, Input, Button} from './form'

const LoginForm = () => {
  return (
    <Card>
        <Form>
            <Input type="email"/>
            <Input type="password"/>
           <Button>Sign in</Button>
        </Form>
    </Card>
  )
}

export default LoginForm