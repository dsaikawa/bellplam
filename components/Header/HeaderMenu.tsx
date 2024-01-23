import { Anchor, Text } from '@mantine/core';
import classes from './Header.module.css';

type Props = { href: string; title: string; color: string };
const HeaderMenu = ({ href, title, color }: Props) => {
  return (
    <Anchor href={href} underline="never">
      <Text className={classes.title} size="xl" c={color}>
        {title}
      </Text>
    </Anchor>
  );
};

export default HeaderMenu;
