import PropTypes from 'prop-types'

const Link = ({route}) => {
    return (
        <li className='hover:bg-gray-400 hover:p-2 rounded-md' ><a href={route.path}>{route.name}</a></li>
    );
};

Link.propTypes ={
    route:PropTypes.object.isRequired
}
export default Link;