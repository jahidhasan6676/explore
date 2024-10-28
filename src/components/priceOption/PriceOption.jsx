import Price from "../Price/Price";

const PriceOption = () => {

   const priceOptions =  [
    {
        "id": 1,
        "name": "Basic MemberShip",
        "price": 20,
        "currency": "USD",
        "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free 1-hour orientation session"
        ]
    },
    {
        "id": 2,
        "name": "Standard MemberShip",
        "price": 40,
        "currency": "USD",
        "features": [
            "Access to gym equipment",
            "Locker room access",
            "5 group classes per month",
            "Free 1-hour personal training session"
        ]
    },
    {
        "id": 3,
        "name": "Premium MemberShip",
        "price": 60,
        "currency": "USD",
        "features": [
            "24/7 gym access",
            "Unlimited group classes",
            "Personal training sessions twice a month",
            "Nutrition consultation",
            "Access to sauna and steam room"
        ]
    }
]
    
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-center">Membership List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {
                priceOptions.map(price => <Price key={price.id} prices={price}></Price>)
            }
            </div>
        </div>
    );
};

export default PriceOption;