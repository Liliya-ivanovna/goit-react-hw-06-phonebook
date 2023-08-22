import PropTypes from 'prop-types';
import {Li,Button,Span} from './ContactItem.styled';

export const ContactItem = ({ contact,deleteContact }) => {
  const { id, name, number } = contact;

  return (
    <Li>
      <Span>{name}</Span>
      <Span> {number}</Span>
      <Button onClick={() => deleteContact(id)}>Delete</Button>
    </Li>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};