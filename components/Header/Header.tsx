import { Group, Title, Text } from '@mantine/core';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Group my="sm" mx="md" justify="space-between">
      <Title className={classes.title} c="white">
        bellplam
      </Title>
      <Group>
        <Text className={classes.title} size="xl" c="white">
          about us
        </Text>
        <Text className={classes.title} size="xl" c="white">
          work
        </Text>
        <Text className={classes.title} size="xl" c="white">
          contact
        </Text>
      </Group>
    </Group>
  );
};

export default Header;
