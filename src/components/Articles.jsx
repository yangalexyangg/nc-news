// import {  useEffect } from 'react'
// import { fetchArticles } from '../utils/API-Requests'
// import SortBar from './Sort-Bar'

// export default function Articles({articles, setArticles, isLoading, setIsLoading}) {

//     useEffect(() => {
//         fetchArticles().then((articlesData) => {
//             setArticles(articlesData)
//             setIsLoading(false)
//         })
//     }, [setArticles, setIsLoading])

//     if(isLoading) return <p>Loading ...</p>
//     return (
//         <>
//             <SortBar articles={articles} setArticles={setArticles} isLoading={isLoading} setIsLoading={setIsLoading}/>
//         </>
//     )
// }
