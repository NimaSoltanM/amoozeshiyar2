import { getClothById } from '../../../products/products';

import ProdDescComp from '../../../components/ProdDescComp';

export default ({ cloth }) => {
  if (!cloth) {
    return (
      <Center mt='xl'>
        <Loader />
      </Center>
    );
  }

  return <ProdDescComp item={cloth} />;
};

export const getServerSideProps = async ({ params }) => {
  const id = params.cid;
  const cloth = getClothById(id);

  return {
    props: {
      cloth,
    },
  };
};
