import {
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Loader,
} from '@mantine/core';
import CardComp from '../components/CardComp';
import Link from 'next/link';

import { FaArrowLeft } from 'react-icons/fa';
import { getSliderClothes, getSliderWatches } from '../products/products';

export default function Home({ sliderClothes, sliderWatches }) {
  if (!sliderClothes)
    return (
      <>
        <Center mt='xl'>
          <Loader color='gray' variant='dots' />
        </Center>
      </>
    );

  return (
    <div className='main'>
      <h1 style={{ textAlign: 'center' }}>فروشگاه مجازی خلسه</h1>
      <Container>
        <Grid my='xl'>
          {sliderClothes.map((prod) => (
            <Grid.Col sm={12} md={3} key={prod.id}>
              <CardComp {...prod} />
            </Grid.Col>
          ))}
          <Link href='/products/clothes'>
            <Button
              color={'dark'}
              variant='subtle'
              rightIcon={<FaArrowLeft />}
              style={{ marginRight: 'auto', marginLeft: '7px' }}
            >
              مشاهده همه
            </Button>
          </Link>
        </Grid>

        <Divider />

        <Grid mt='3rem'>
          {sliderWatches.map((prod) => (
            <Grid.Col sm={12} md={3} key={prod.id}>
              <CardComp {...prod} />
            </Grid.Col>
          ))}
          <Link href='/products/watches'>
            <Button
              color={'dark'}
              variant='subtle'
              rightIcon={<FaArrowLeft />}
              style={{ marginRight: 'auto', marginLeft: '7px' }}
            >
              مشاهده همه
            </Button>
          </Link>
        </Grid>
      </Container>
    </div>
  );
}

export const getStaticProps = async () => {
  const sliderClothes = getSliderClothes();
  const sliderWatches = getSliderWatches();

  return {
    props: {
      sliderClothes,
      sliderWatches,
    },
  };
};
