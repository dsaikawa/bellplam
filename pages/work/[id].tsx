import { Badge, Container, Grid, Image, Stack, Text, Title, UnstyledButton } from '@mantine/core';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const imageSrc = ['/sample1.jpg', '/sample2.jpg', '/sample3.jpg'];

const WorkDetail = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <>
      <Container size="xl" mt="xl">
        <Stack>
          <UnstyledButton>
            <Badge variant="outline" color="black" size="sm" radius="xl">
              MUSIC VIDEO
            </Badge>
          </UnstyledButton>
          <Title order={2}>ふうりん。「1億分の1」official music video</Title>
          <Stack gap="0">
            <Text c="gray">@furin_2005</Text>
            <Text c="gray">Starring : @__am.06_</Text>
            <Text c="gray">Shot by Moriaki Suzuki (BELLPLAM)</Text>
            <Text c="gray">Photographer : Yohei Umeki (BELLPLAM)</Text>
          </Stack>
          {imageSrc.map((i, index) => {
            return (
              <Image
                src={i}
                key={index}
                onClick={() => {
                  setOpen(true), setIndex(index);
                }}
              />
            );
          })}
        </Stack>
      </Container>
      {open && (
        <Lightbox
          mainSrc={imageSrc[index]}
          nextSrc={imageSrc[(index + 1) % imageSrc.length]}
          prevSrc={imageSrc[(index + imageSrc.length - 1) % imageSrc.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() => setIndex((index + imageSrc.length - 1) % imageSrc.length)}
          onMoveNextRequest={() => setIndex((index + 1) % imageSrc.length)}
        />
      )}
    </>
  );
};
export default WorkDetail;
