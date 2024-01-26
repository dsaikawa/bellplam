import { Button, Container, Stack, Text, TextInput, Textarea } from '@mantine/core';
import classes from '../../components/Header/Header.module.css';
import { useForm } from '@mantine/form';

const ContactPage = () => {
  type ContactForm = { name: string; email: string; message: string };
  const form = useForm<ContactForm>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : '正しいメールアドレスを入力してください。',
    },
  });
  return (
    <Container size="sm" mt="xl">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack justify="center">
          <Text size="50px" className={classes.title}>
            Contact
          </Text>
          <TextInput
            size="md"
            label="Name"
            placeholder="your name..."
            withAsterisk
            required
            styles={{ required: { color: 'black' } }}
            {...form.getInputProps('name')}
          />
          <TextInput
            size="md"
            label="Email"
            type="email"
            withAsterisk
            placeholder="your email address"
            required
            styles={{ required: { color: 'black' } }}
            {...form.getInputProps('email')}
          />
          <Textarea
            size="md"
            label="Message"
            withAsterisk
            placeholder="your message..."
            required
            styles={{ required: { color: 'black' } }}
            {...form.getInputProps('message')}
          />
          <Button variant="outline" color="black" size="md" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default ContactPage;
