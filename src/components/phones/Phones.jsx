import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, } from 'recharts';
import { Audio } from 'react-loader-spinner'
import DatePicker from "react-datepicker";

const Phones = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [phone, setPhone] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(data => {
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map(phone =>{
                const obj = {
                    name: phone.phone_name,
                    slug: parseInt(phone.slug.split('-')[1])
                }
                return obj
            })
         
            setPhone(phoneWithFakeData)
            setLoading(false)
        })
        

    },[])
   
    return (
        <div>
            <DatePicker></DatePicker>
             {loading && <div className="flex justify-center">
                <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            /></div>}
            <h2 className="text-2xl font-bold"> Phones: {phone.length}</h2>
            <BarChart width={1200} height={500} data={phone}>
                <Bar dataKey={"slug"} fill="red"></Bar>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>

            </BarChart>
        </div>
    );
};

export default Phones;