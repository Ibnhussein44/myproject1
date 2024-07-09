import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerInf = () => {
    const [data, setData] = useState ([]);
    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);

    const fetchData = async ()  =>{
        try{
            const response = await axios.get('http://localhost:8080/api/customers');
            setData(response.data);
        }
        catch(error){
            console.log('Dat not foud',error);
        }
    };
return(
    <table>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>password</th>

        </thead>
        
        <tbody>
            {data.map((item,index) =>(
                <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                </tr>
            ))}
        </tbody>
    </table>
)
}

export default CustomerInf;