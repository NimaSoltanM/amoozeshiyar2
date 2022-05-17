import { Center, Container, Grid, Loader } from '@mantine/core';
import CardComp from '../../../components/CardComp';

import { getAllWatches } from '../../../products/products';

export default ({ watches }) => {
  if (!watches) {
    return (
      <Center mt='xl'>
        <Loader />
      </Center>
    );
  }

  return (
    <Container>
      <Grid mt='md'>
        {watches.map((watch) => (
          <Grid.Col sm={12} md={3} key={watch.id}>
            <CardComp item={watch} {...watch} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export const getStaticProps = async () => {
  const watches = getAllWatches();

  return {
    props: {
      watches,
    },
  };
};
