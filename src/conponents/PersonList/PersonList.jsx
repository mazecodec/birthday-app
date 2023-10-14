import PropTypes from 'prop-types';
import Person from '../Person/Person.jsx';

const PersonList = ({persons}) => {
  return (
      <>
        {
          persons?.map(({name, image}) => (
              <Person key={name} name={name} image={image}/>
          ))
        }
      </>
  )
};

PersonList.propTypes = {
  persons: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string,
        image: PropTypes.string,
        age: PropTypes.number
      })
  ),
};
PersonList.defaultProps = {
  persons: [
    {
      name: 'David K',
      image: 'https://randomuser.me/api/portraits/men/20.jpg',
      age: 50
    }
  ]
};

export default PersonList;
