import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
    
    const [news, setNews] = useState([])

    const apikey = import.meta.env.VITE_NEWS_API_KEY

    const fetchData = async()=>{
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-05-19&sortBy=publishedAt&apiKey=${apikey}`)

            setNews(response.data.articles)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])
    
  return (
    <div>
      
    </div>
  )
}
