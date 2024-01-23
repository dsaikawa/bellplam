import { Group, Title, Text, Stack, Anchor } from '@mantine/core';
import HeaderMenu from './HeaderMenu';
import HeaderTitle from './HeaderTitle';

const Header = () => {
  return (
    <Group my="sm" mx="lg" justify="space-between">
      <HeaderTitle />
      <Group>
        <HeaderMenu href="/profile" title="profile" />
        <HeaderMenu href="/work" title="work" />
        <HeaderMenu href="/contact" title="contact" />
      </Group>
    </Group>
  );
};

export default Header;
