import { Button, Container, Stack, Text, TextInput, Textarea } from '@mantine/core';
import classes from '../../components/Header/Header.module.css';

const ContactPage = () => {
  return (
    <Container size="sm" mt="xl">
      <Stack justify="center">
        <Text size="50px" className={classes.title}>
          Contact 🫶
        </Text>
        <TextInput
          size="md"
          label="Name"
          placeholder="Input placeholder"
          required
          styles={{ required: { color: 'black' } }}
        />
        <TextInput
          size="md"
          label="Email"
          withAsterisk
          placeholder="Input placeholder"
          required
          styles={{ required: { color: 'black' } }}
        />
        <Textarea
          size="md"
          label="Message"
          withAsterisk
          placeholder="Input placeholder"
          required
          styles={{ required: { color: 'black' } }}
        />
        <Button variant="outline" color="black" size="md">
          Submit
        </Button>
      </Stack>
    </Container>
  );
};

export default ContactPage;
