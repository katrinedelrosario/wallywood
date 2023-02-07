import { useEffect, useState } from "react"
import { PostersStyle } from "./posters.styled"
import axios from "axios"
import { Link, Outlet, useParams } from "react-router-dom"
import { ContentWrapper } from "../../components/app/contentwrapper/contentwrapper"
import { PosterListStyle } from "./posterList.styled"

const Posters = () => {
  return (
    <ContentWrapper title="Plakater" description="Se vores udvalg af plakater">
      <PostersStyle>
        <div>
          <h2>filtre</h2>
          <GenreList />
        </div>
        <div>
          <Outlet />
        </div>
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
  }, [setData]);

  return (
    <ul>
      {data && data.map(genre => {
        return (
          <li key={genre.id}>
            <Link to={`/posters/${genre.slug}`}>{genre.title}</Link>

          </li>
        )
      })}
    </ul>
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
  }, [slug]);

  return (
    <PosterListStyle>
      <div>
        <ul>
          {data && data.map(poster => {
            return (
              <li key={poster.id}>
                <Link to={`/posters/${slug}/${poster.slug}`}>
                  <div>
                    <figure key={poster.id}>
                      <img src={poster.image} alt="Poster" />
                      <figcaption>
                        <h2>{poster.name}</h2>
                        <p>kr. {poster.price},00</p>
                        <button type='button'>læg i kurv</button>
                      </figcaption>
                    </figure>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </PosterListStyle>
  )

}

const PosterDetails = () => {
  const [data, setData] = useState({})
  const { poster } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`http://localhost:4000/poster/details/${poster}`)
      setData(result.data);
    }
    getData()
  }, [poster]);

  return (
    <ul>
      {data && (
        <img src={data.image} alt={data.name} />
      )
      }
    </ul>
  )


}


export { Posters, PosterList, PosterDetails }