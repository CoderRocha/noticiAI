import React, { useEffect, useState } from 'react'
import noImg from '../assets/images/no-img.png'
import './News.css'
import axios from 'axios'
import NewsModal from './NewsModal'

const categories = [
  'general',
  'world',
  'business',
  'technology',
  'entertainment',
  'sports',
  'science',
  'health',
  'nation',
]

const News = () => {
  const [headline, setHeadline] = useState(null)
  const [news, setNews] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [showModal, setShowModal] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState(null)

  useEffect(() => {
    const fetchNews = async () => {
      // mude os params de 'lang' e 'country' para 'en' e 'us', ou 'pt' e 'br'
      const url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=pt&country=br&apikey=${import.meta.env.VITE_NEWS_API_KEY}`
      const response = await axios.get(url)

      const fetchedNews = response.data.articles

      fetchedNews.forEach((article) => {
        if (!article.image) {
          article.image = noImg
        }
      })

      setHeadline(fetchedNews[0])
      setNews(fetchedNews.slice(1, 7))

      // console.log(fetchedNews)
    }

    fetchNews()
  }, [selectedCategory])

  const handleCategoryClick = (e, category) => {
    e.preventDefault()
    setSelectedCategory(category)
  }

  const handleArticleClick = (article) => {
    setSelectedArticle(article)
    setShowModal(true)

    // console.log(article)
  }

  return (
    <div className="news-app">
      <div className="news-header">
        <h1 className="logo">NoticiAI</h1>
      </div>
      <div className="news-content">
        <nav className="navbar">
          <h1 className="nav-heading">Categories</h1>
          <div className="categories">
            {categories.map((category) => (
              <a
                href="#"
                className="nav-link"
                key={category}
                onClick={(e) => handleCategoryClick(e, category)}
              >
                {category}
              </a>
            ))}
          </div>
        </nav>
        <div className="news-section">
          {headline && (
            <div className="headline" onClick={() => handleArticleClick(headline)}>
              <img src={headline.image || noImg} alt={headline.title} />
              <h2 className="headline-title">{headline.title}</h2>
            </div>
          )}

          <div className="news-grid">
            {news.map((article, index) => (
              <div
                className="news-grid-item"
                key={index}
                onClick={() => handleArticleClick(article)}
              >
                <img src={article.image || noImg} alt={article.title} />
                <h3>{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <NewsModal show={showModal} article={selectedArticle} onClose={() => setShowModal(false)} />
      </div>
      <footer>
        <p className="copyright">
          <span>NoticiAI</span>
        </p>
        <p>&copy; All Rights Reserved. By <a href="https://github.com/coderrocha" target="_blank" rel="noopener noreferrer">Guilherme Rocha</a></p>
      </footer>
    </div>
  )
}

export default News
