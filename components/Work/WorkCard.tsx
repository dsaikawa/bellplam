import { Center, Text, Image, Stack, Badge, UnstyledButton, Anchor } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

type WorkCardProps = { image: string; link: string; title: string; category: string };
const WorkCard = ({ image, link, title, category }: WorkCardProps) => {
  const { ref, width, height } = useElementSize();
  return (
    <Anchor href="/work/1">
      <Image src={image} fit="cover" ref={ref} h={width / 1.618} />
      <UnstyledButton mt={'3'}>
        <Badge variant="outline" color="black" size="sm" radius="xl">
          {category}
        </Badge>
      </UnstyledButton>
      <Text tt="capitalize" mt={'3'} c="black">
        {title}
      </Text>
    </Anchor>
  );
};

export default WorkCard;
