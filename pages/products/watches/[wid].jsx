import ProdDescComp from '../../../components/ProdDescComp';
import { getWatchById } from '../../../products/products';

export default ({ watch }) => {
  if (!watch) {
    return (
      <Center mt='xl'>
        <Loader />
      </Center>
    );
  }

  return <ProdDescComp item={watch} />;
};

export const getServerSideProps = async ({ params }) => {
  const id = params.wid;

  const watch = getWatchById(id);

  return {
    props: {
      watch,
    },
  };
};
