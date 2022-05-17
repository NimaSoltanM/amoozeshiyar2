import {
  Center,
  Container,
  Grid,
  Card,
  Button,
  Image,
  Text,
  Progress,
  Alert,
} from '@mantine/core';

import { FaAngellist } from 'react-icons/fa';
import { useState } from 'react';

const ProdDescComp = ({ item }) => {
  const [show, setShow] = useState(false);

  const shoppingCartHandler = () => {
    fetch('/api/shoppingcart', {
      method: 'POST',
      body: JSON.stringify({ item }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  const labelGenerator = (rating) => {
    if (rating < 30) {
      return '😡';
    } else if (rating < 60) {
      return '🤨';
    } else {
      return '🥳';
    }
  };

  return (
    <Container mt='xl'>
      <Grid>
        <Grid.Col sm={12} md={6}>
          <div>
            <Card p='lg'>
              <Card.Section>
                <Image src={item.image} alt={item.title} />
              </Card.Section>

              <Text
                style={{ textAlign: 'center', marginBottom: '1rem' }}
                weight={500}
              >
                {item.title}
              </Text>

              <Center>
                <h3>قیمت : {item.price}</h3>
              </Center>
              <Center>
                <Button
                  variant='gradient'
                  gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                  mt='xl'
                  size='lg'
                  onClick={shoppingCartHandler}
                >
                  اضافه کردن به سبد خرید
                </Button>
              </Center>
            </Card>
          </div>
        </Grid.Col>
        <Grid.Col sm={12} md={6}>
          <Center mb='xl'>
            <h1>توضیحات تکمیلی</h1>
          </Center>
          <p style={{ direction: 'rtl', marginBottom: '2rem' }}>
            {item.description}
          </p>

          <p>رضایت کاربران از این محصول {item.rating} از 100 است</p>
          <Progress
            value={item.rating}
            label={labelGenerator(item.rating)}
            size='xl'
            radius='xl'
            style={{ fontSize: '2rem' }}
          />

          {show && (
            <Center mt='5rem'>
              <Alert
                style={{ width: '50%' }}
                title='با تشکر از شما'
                color='teal'
                variant='filled'
              >
                کالا به سبد خرید اضافه شد ✌
              </Alert>
            </Center>
          )}
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ProdDescComp;
