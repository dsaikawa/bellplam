import { Anchor, Text } from '@mantine/core';
import classes from './Header.module.css';

type Props = { href: string; title: string };
const HeaderMenu = ({ href, title }: Props) => {
  return (
    <Anchor href={href} underline="never">
      <Text className={classes.title} size="xl" c="white">
        {title}
      </Text>
    </Anchor>
  );
};

export default HeaderMenu;
