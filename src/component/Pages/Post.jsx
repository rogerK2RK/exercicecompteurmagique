import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios"; 

export function Post() {
    const { id } = useParams()
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);



    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.org/posts/${id}`);
                console.log(response)

                if (response.data) {
                    setData(response.data);

                    setLoading(false);
                    console.log('API call success');
                }
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [id])

    if (loading)
        return (<p>Chargement en cours...</p>)

    return (
        <div>
            <h1>{ data.title }</h1>
            <p>{data.content}</p>
        </div>
    )
}