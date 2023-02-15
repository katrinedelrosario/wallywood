import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


export const PostersDetails = () => {
    const [data, setData] = useState([])
    const { poster } = useParams();
    console.log(poster);

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`http://localhost:4000/poster/details/${poster}`)
            setData(result.data);
        }
        getData()
    }, [poster])

    return (
        <ul>
            {data && (
                <img src={data.image} alt={data.name} />
            )}
        </ul>
    )

}