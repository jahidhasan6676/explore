import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, } from 'recharts';


const Phones = () => {
    const [phone, setPhone] = useState([]);

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
        })
        

    },[])
   
    return (
        <div>
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