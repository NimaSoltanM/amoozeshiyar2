import {
  Avatar,
  Button,
  Center,
  Container,
  Group,
  Loader,
  Stack,
  Text,
} from '@mantine/core';
import { useEffect } from 'react';
import { buildFeedbackPath, extractFeedback } from './api/shoppingCart';
import { useState } from 'react';

export default ({ cartItems }) => {
  const [finalPrice, setFinalPrice] = useState('');

  if (!cartItems) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  useEffect(() => {
    const checkFinalPrice = () => {
      //extract all the prices from the cartItems and turn them to numbers
      const prices = cartItems.map((item) => Number(item.price));
      //sum all the prices
      const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
      //set the final price
      setFinalPrice(totalPrice);
    };

    checkFinalPrice();
  }, []);

  const payHandler = async () => {};

  return (
    <Container>
      <Stack>
        {cartItems.map((cartItem) => (
          <Group className='itemList' position='apart'>
            <Avatar src={cartItem.image} color='indigo' />
            <h2>{cartItem.title}</h2>
            <h2>{cartItem.price}</h2>
          </Group>
        ))}
      </Stack>

      <Center>
        <h2>
          قیمت نهایی
          <Text component='h1' size='lg' color='teal'>
            {finalPrice > 0 &&
              finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
        </h2>
      </Center>

      <Center>
        <Button
          onClick={payHandler}
          variant='gradient'
          size='lg'
          gradient={{ from: 'indigo', to: 'cyan' }}
        >
          تایید و پرداخت
        </Button>
      </Center>
    </Container>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      cartItems: data,
    },
  };
};
