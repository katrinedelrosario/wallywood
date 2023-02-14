import { useEffect, useState } from "react"
import { ContentWrapper } from "../../app/elements/contentwrapper/contentwrapper"
import { PostersStyle } from "./posters.styled"
import axios from "axios"
import { Link, Outlet, useParams } from "react-router-dom"
import AddToCartButton from "../../app/cart/addtocartbutton"


const Posters = () => {

    return (
        <ContentWrapper title="Plakater" description="Se vores udvalg af plakater">
            <PostersStyle>
                <div><GenreList /></div>
                <div><Outlet /></div>
            </PostersStyle>
        </ContentWrapper>
    )
}

const GenreList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get('http://localhost:4000/genre')
            setData(result.data);
        }
        getData()
    }, [setData])

    return (
        <div className="genre">
            <h2>Filtre</h2>
            <p>Genre</p>
            <ul>
                {data && data.map(genre => {
                    return (
                        <li key={genre.id}>
                            <Link to={`/posters/${genre.slug}`}>{genre.title}</Link></li>
                    )
                })}
            </ul>
        </div>
    )

}

const PosterList = () => {
    const [data, setData] = useState([])
    const { slug } = useParams();

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`http://localhost:4000/poster/list/${slug}`)
            setData(result.data);
        }
        getData()
    }, [slug])

    return (
        <div className="box">
            {data && data.slice(0, 9).map(poster => {
                return (
                    <div key={poster.id}>
                        <Link to={`/posters/${slug}/${poster.slug}`}></Link>
                        <div className="images">
                            <img src={poster.image} alt={poster.name} />
                            <h2>{poster.name}</h2>
                            <h3>Kr. {poster.price}</h3>
                            <p>
                                <AddToCartButton id={poster.id}>Læg i kurv</AddToCartButton>
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}


const PosterDetails = () => {
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
export { Posters, PosterList, PosterDetails }