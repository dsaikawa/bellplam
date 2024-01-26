import { Center, Text, Image, Stack, Badge, UnstyledButton } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

type WorkCardProps = { image: string; link: string; title: string; category: string };
const WorkCard = ({ image, link, title, category }: WorkCardProps) => {
  const { ref, width, height } = useElementSize();
  return (
    <>
      <Image src={image} fit="cover" ref={ref} h={width / 1.618} />
      <UnstyledButton mt={'3'}>
        <Badge variant="outline" color="black" size="sm" radius="xl">
          {category}
        </Badge>
      </UnstyledButton>
      <Text tt="capitalize" mt={'3'}>
        {title}
      </Text>
    </>
    // <Text>{title}</Text>
  );
};

export default WorkCard;
