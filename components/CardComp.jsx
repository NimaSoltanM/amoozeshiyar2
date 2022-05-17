import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import Link from 'next/link';

const CardComp = ({ id, title, description, image, prodCatagory }) => {
  return (
    <div>
      <Card shadow='sm' p='lg'>
        <Card.Section>
          <Image src={image} height={160} alt={title} />
        </Card.Section>

        <Group position='apart' style={{ marginBottom: 5 }}>
          <Text weight={500}>{title.substring(0, 17)}</Text>
          <Badge color='green' variant='light'>
            موجود
          </Badge>
        </Group>

        <Text size='sm' style={{ lineHeight: 1.5 }}>
          {description.substring(0, 70)} ...
        </Text>

        <Link href={`/products/${prodCatagory}/${id}`}>
          <Button
            variant='light'
            color='dark'
            fullWidth
            style={{ marginTop: 14 }}
          >
            اطلاعات بیشتر
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default CardComp;
