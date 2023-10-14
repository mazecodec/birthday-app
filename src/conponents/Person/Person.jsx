import PropTypes from 'prop-types';

const Person = ({name, image, age}) => {
  return (
      <article className="self-stretch flex flex-row justify-stretch items-center mb-1 p-2">
        <img src={image}  alt="profile_picture" className="w-16 h-16 flex-shrink-0  object-cover rounded-full mr-3"/>
        <div className="flex flex-col">
          <h3 className="font-light">{name}</h3>
          <small className="font-thin">{age} years old</small>
        </div>
      </article>
  )
};

Person.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  age: PropTypes.number
};
Person.defaultProps = {
  name: 'David K',
  image: 'https://randomuser.me/api/portraits/men/20.jpg',
  age: 40
};

export default Person;
