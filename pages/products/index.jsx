import { Container, Grid, Card, Text, Image, Center } from '@mantine/core';
import Link from 'next/link';

export default () => {
  return (
    <Container>
      <Center>
        <h1 as='h1' fontSize='xl' fontWeight='bold'>
          محصولات
        </h1>
      </Center>
      <Grid mt='lg'>
        <Grid.Col sm={12} md={6}>
          <Link href='/products/clothes'>
            <Card shadow='sm' p='xl' style={{ cursor: 'pointer' }}>
              <Card.Section>
                <Image src='/images/mainCloth.png' alt='cloth catagory' />
              </Card.Section>

              <Center>
                <Text weight={500} size='lg'>
                  لباس مردانه
                </Text>
              </Center>
            </Card>
          </Link>
        </Grid.Col>

        <Grid.Col sm={12} md={6}>
          <Link href='/products/watches'>
            <Card shadow='sm' p='xl' style={{ cursor: 'pointer' }}>
              <Card.Section>
                <Image src='/images/mainWatch.jpg' alt='watch catagory' />
              </Card.Section>

              <Center>
                <Text weight={500} size='lg'>
                  ساعت مچی
                </Text>
              </Center>
            </Card>
          </Link>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
