import { Group, Title, Text, Stack, Anchor } from '@mantine/core';
import HeaderMenu from './HeaderMenu';
import HeaderTitle from './HeaderTitle';

type Props = { color: string };
const Header = ({ color }: Props) => {
  return (
    <Group my="sm" mx="lg" justify="space-between">
      <HeaderTitle color={color} />
      <Group>
        <HeaderMenu href="/profile" title="profile" color={color} />
        <HeaderMenu href="/work" title="work" color={color} />
        <HeaderMenu href="/contact" title="contact" color={color} />
      </Group>
    </Group>
  );
};

export default Header;
