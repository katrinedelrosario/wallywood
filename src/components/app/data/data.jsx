import { useState, useEffect } from "react"
import axios from 'axios'
import { ContentWrapper } from "../contentwrapper/contentwrapper"
// import { NavLink } from 'react-router-dom'

const Data = () => {
    return(
        <ContentWrapper
            title="" description="">
                <section><DataList /></section>
        </ContentWrapper>
    )
}

const DataList = () => {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const url = `http://localhost:4000/poster`

        const getData = async () => {
        try{ 
            const result = await axios.get(url)
            setApiData(result.data)
        }
        catch(err) {
            console.error(err)
        }
        }
        getData()
    }, [setApiData])

    
    return(
        <div>
            {apiData && apiData.map(item => {
                return(
                    <figure key={item.id}>
                        <img src={item.image} alt="Posters" />
                            <figcaption>
                                <p>{item.name}</p>
                                <p>{item.description}</p>
                            </figcaption>
                    </figure>
                    
                )
                 
            })}
        </div>
       
    )
}

export default Data