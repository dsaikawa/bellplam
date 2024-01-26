import { Container, Group, Stack, Text } from '@mantine/core';
import classes from '../../components/Header/Header.module.css';

const ProfilePage = () => {
  return (
    <Container mt="xl" size="xxl">
      <Text size="50px" className={classes.title}>
        Profile
      </Text>
      <Group>profile</Group>
      <Stack h={1000}>profile page</Stack>
    </Container>
  );
};

export default ProfilePage;
