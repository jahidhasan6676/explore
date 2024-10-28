import PropTypes from 'prop-types'
import Feature from '../features/Feature';
const Price = ({prices}) => {
    const {name,price,features} = prices
    console.log(price)
   
    return (
        <div className='border-2  bg-green-400 rounded-lg p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-4xl font-bold'>{price}</span>
                <span className='font-bold'>/mon</span>
            </h2>
            <h3 className='text-2xl font-semibold text-center mt-3'>{name}</h3>
          
            <div className='pl-6 mt-3 flex-grow'>
            {
                features.map((feature,index) => <Feature key={index} feature={feature} ></Feature>)
            }
            </div>
           <div className='bg-blue-400 hover:bg-blue-600  p-2 rounded-md text-center mt-5'>
           <button className='font-medium text-white'>Buy package</button>
           </div>
            
        </div>
    );
};

Price.propTypes ={
    prices:PropTypes.object
}

export default Price;