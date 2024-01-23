import { Anchor, Group, Text } from '@mantine/core';
import classes from './Header.module.css';

const HeaderTitle = () => {
  return (
    <Anchor href="/" underline="never">
      <Group gap="5px" align="center">
        <Text size="30px" className={classes.title} c="white">
          bellplam
        </Text>
        <Text className={classes.title} size="17px" c="white" mt="auto" mb="4px">
          creative team
        </Text>
      </Group>
    </Anchor>
  );
};

export default HeaderTitle;
