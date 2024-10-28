import PropTypes from 'prop-types'
import { FaCircleCheck } from "react-icons/fa6";
const Feature = ({feature}) => {
    
    return (
        

        <div className='flex items-center gap-3'>
            <FaCircleCheck></FaCircleCheck>
            <p className='font-medium'>{feature}</p>
           
        </div>
        
       
    );
};

Feature.propTypes ={
    feature:PropTypes.string
}

export default Feature;