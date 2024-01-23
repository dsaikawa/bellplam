import { Anchor, Group, Text } from '@mantine/core';
import classes from './Header.module.css';

type Props = { color: string };
const HeaderTitle = ({ color }: Props) => {
  return (
    <Anchor href="/" underline="never">
      <Group gap="5px" align="center">
        <Text size="30px" className={classes.title} c={color}>
          bellplam
        </Text>
        <Text className={classes.title} size="17px" c={color} mt="auto" mb="4px">
          creative team
        </Text>
      </Group>
    </Anchor>
  );
};

export default HeaderTitle;
