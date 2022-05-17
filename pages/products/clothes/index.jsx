import { Center, Container, Grid, Loader } from '@mantine/core';
import CardComp from '../../../components/CardComp';
import { getAllClothes } from '../../../products/products';

export default ({ clothes }) => {
  if (!clothes) {
    return (
      <Center mt='xl'>
        <Loader />
      </Center>
    );
  }

  return (
    <Container>
      <Grid mt='md'>
        {clothes.map((Menswear) => (
          <Grid.Col sm={12} md={3} key={Menswear.id}>
            <CardComp item={Menswear} {...Menswear} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export const getStaticProps = async () => {
  const clothes = getAllClothes();

  return {
    props: {
      clothes,
    },
  };
};
