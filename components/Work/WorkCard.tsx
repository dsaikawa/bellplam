import { Center, Text, Image, Stack, Badge, UnstyledButton, Anchor, Box } from '@mantine/core';
import { useElementSize, useInViewport } from '@mantine/hooks';
import { useEffect, useState } from 'react';

type WorkCardProps = { image: string; link: string; title: string; category: string };
const WorkCard = ({ image, title, category }: WorkCardProps) => {
  const { ref, width } = useElementSize();
  const { ref: viewPortRef, inViewport } = useInViewport();
  return (
    <Box
      w="100%"
      ref={viewPortRef}
      style={{
        display: 'inline-block',
        transition: 'opacity 1s cubic-bezier(0.47, 0, 0.745, 0.715)',
        opacity: inViewport ? '1' : '0',
      }}
    >
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
    </Box>
  );
};

export default WorkCard;
