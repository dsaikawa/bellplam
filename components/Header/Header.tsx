import { Group, Title, Text, Stack } from '@mantine/core';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Group my="sm" mx="lg" justify="space-between">
      <Group gap="5px" align="center">
        <Text size="30px" className={classes.title} c="white">
          bellplam
        </Text>
        <Text className={classes.title} size="17px" c="white" mt="auto" mb="4px">
          creative team
        </Text>
      </Group>
      <Group>
        <Text className={classes.title} size="xl" c="white">
          profile
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
