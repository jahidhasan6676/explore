import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentMarksData = [
        { student: "Student 1", math: 75, physics: 82, economics: 78 },
        { student: "Student 2", math: 88, physics: 90, economics: 85 },
        { student: "Student 3", math: 92, physics: 88, economics: 91 },
        { student: "Student 4", math: 67, physics: 72, economics: 70 },
        { student: "Student 5", math: 80, physics: 85, economics: 83 },
        { student: "Student 6", math: 85, physics: 89, economics: 87 },
        { student: "Student 7", math: 90, physics: 93, economics: 89 },
        { student: "Student 8", math: 72, physics: 76, economics: 75 },
        { student: "Student 9", math: 95, physics: 94, economics: 93 },
        { student: "Student 10", math: 78, physics: 80, economics: 79 },
      ];
      
      
    return (
        <div>
           <LChart width={1200} height={400} data={studentMarksData}>
                <Line dataKey={"math"} stroke="red"></Line>
                <Line dataKey={"physics"} stroke="purple"></Line>
                <Line dataKey={"economics"}></Line>
                <XAxis dataKey={'student'}></XAxis>
                <YAxis></YAxis>
           </LChart>
        </div>
    );
};

export default LineChart;