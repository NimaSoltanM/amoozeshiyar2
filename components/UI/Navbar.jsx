import { Container, Group, Button, ActionIcon } from '@mantine/core';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <Container>
        <Group position='apart'>
          <h1>خلسه</h1>
          <Group>
            <Button color='dark' variant='subtle'>
              <Link href='/'>خانه</Link>
            </Button>
            <Button color='dark' variant='subtle'>
              <Link href='/products'>محصولات</Link>
            </Button>
            <Button color='dark' variant='subtle'>
              <Link href='/contact'>تماس با ما</Link>
            </Button>
          </Group>
          <Link href='/cart'>
            <ActionIcon color='cyan' size='lg' variant='outline'>
              <FaShoppingCart size={17} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </nav>
  );
};

export default Navbar;
