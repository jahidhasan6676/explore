import { AreaChart as Areas, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const AreaChart = () => {
    
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (

        <div>
            
            <ResponsiveContainer width={1000} height={800}>
                <Areas width={800} height={500} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Area type={'monotone'} dataKey={'uv'} stroke="#8884d8"></Area>
                </Areas>
            </ResponsiveContainer>
           
        </div>
    );
  
};

export default AreaChart;