import { Form, Input, SubmitButton } from './Searchbar.styled';
import propTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="query" autocomplete="off" />
      <SubmitButton type="submit">Search</SubmitButton>
    </Form>
  );
};

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
