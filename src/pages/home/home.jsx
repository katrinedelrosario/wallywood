import { ContentWrapper } from "../../components/app/contentwrapper/contentwrapper";
import { usePosterData } from "../../components/app/posterlist/posterlist";
import SlideWrapper from "../../components/app/slidewrapper/slidewrapper";
import HomeStyle from "./home.styled";


const Home = () => {
	const { posterList } = usePosterData()
	console.log(posterList);

  return (
	<>
		<SlideWrapper />
		<ContentWrapper 
		title="sidste nyt..."
		description="Her finder du nye og gamle film plakater">
			{posterList && posterList.slice(0,2).map(poster => {
				return (
					<HomeStyle>
						<div>
						<figure key={poster.id}>
						<img src={poster.image} alt="Poster" />
						<figcaption>
							<h2>{poster.name}</h2>
							<p>Abernes Planet: Revolutionen&#8217;, foregår i en fremtid, hvor den hyperintelligente chimpanse, Caesar, leder en voksende nation af genetisk udviklede abekatte.</p>
							{poster.genres && poster.genres.map(genre => {
                                    return(
                                        <p>Genre: {genre.title}</p>
                                    )
                                })}
							<button type='button'>læs mere</button>
							</figcaption>
                        </figure>
						</div>
					</HomeStyle>
				)
			})}
		</ContentWrapper>
	</>
  )
}

export default Home
