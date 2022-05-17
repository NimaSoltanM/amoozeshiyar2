import {
  Button,
  Center,
  Container,
  Paper,
  Stack,
  Text,
  Textarea,
  Alert,
} from '@mantine/core';
import { TextInput } from '@mantine/core';
import { useState } from 'react';

export default () => {
  const [show, setShow] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <div
      className='contactHeader'
      as='h1'
      fontSize='3rem'
      fontWeight='bold'
      style={{ paddingTop: '2rem' }}
    >
      <Center>
        <Text>نظرات خود را با ما در میان بگذارید</Text>
      </Center>

      <Container>
        <Paper p='2rem' my='2rem'>
          <form onSubmit={submitHandler}>
            <Stack>
              <TextInput
                placeholder='رضا رضایی'
                label='نام و نام خانوداگی'
                required
              />
              <TextInput
                placeholder='reza@gmail.com'
                label='آدرس ایمیل'
                required
              />
              <Textarea label='نظر خود را بنویسید' required />
            </Stack>

            <Center>
              <Button type='submit' mt='4rem' style={{ width: '50%' }}>
                ارسال
              </Button>
            </Center>
          </form>
        </Paper>

        {show && (
          <Center>
            <Alert
              style={{ width: '50%' }}
              title='با تشکر از شما'
              color='teal'
              variant='filled'
            >
              نظر شما با موفقیت ارسال شد
            </Alert>
          </Center>
        )}
      </Container>
    </div>
  );
};
