import {
  Badge,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';
import classes from '../../components/Header/Header.module.css';
import WorkCard from '@/components/Work/WorkCard';

const WorkPage = () => {
  return (
    <Container mt="xl" size="xxl">
      <Stack gap="xl">
        <Text size="50px" className={classes.title}>
          Work
        </Text>
        <div>
          <Text size="xl" className={classes.title}>
            Category
          </Text>
          <Divider color="black" />
          <Group gap="5">
            <UnstyledButton>
              <Badge variant="outline" color="black" size="sm" radius="xl">
                CLIENT WORK
              </Badge>
            </UnstyledButton>
            <UnstyledButton>
              <Badge variant="outline" color="black" size="sm" radius="xl">
                MUSIC VIDEO
              </Badge>
            </UnstyledButton>
            <UnstyledButton>
              <Badge variant="outline" color="black" size="sm" radius="xl">
                LIVE
              </Badge>
            </UnstyledButton>
            <UnstyledButton>
              <Badge variant="outline" color="black" size="sm" radius="xl">
                DOCUMENTARY
              </Badge>
            </UnstyledButton>
          </Group>
        </div>
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <WorkCard
              image={`/sample${Math.floor(Math.random() * 3) + 1}.jpg`}
              link={''}
              title={'香港の風景'}
              category="CLIENT WORK"
            />
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
};

export default WorkPage;
