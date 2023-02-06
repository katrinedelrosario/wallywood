// import { useState, useEffect } from "react"
// import axios from 'axios'
// // import { NavLink } from 'react-router-dom'

// const Data = () => {
//     return (
//         <section><DataList /></section>
//     )
// }

// const DataList = () => {
//     const [apiData, setApiData] = useState([])

//     useEffect(() => {
//         const url = `http://localhost:4000/poster`

//         const getData = async () => {
//             try {
//                 const result = await axios.get(url)
//                 setApiData(result.data)
//             }
//             catch (err) {
//                 console.error(err)
//             }
//         }
//         getData()
//     }, [setApiData])


//     return (
//         <div>
//             {apiData && apiData.map(item => {
//                 return (
//                     <figure key={item.id}>
//                         <img src={item.image} alt="Posters" />
//                         <figcaption>
//                             <h2>{item.name}</h2>
//                             <p>{item.description}</p>
//                             {item.genres && item.genres.map(genre => {
//                                 return (
//                                     <p>{genre.title}</p>
//                                 )
//                             })}
//                         </figcaption>
//                     </figure>

//                 )

//             })}
//         </div>

//     )
// }

// export default Data