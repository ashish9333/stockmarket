import React, { useEffect, useState } from "react";
import axios from "axios";
import "./News.css";

const News: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage = 6; // Show 9 articles per page

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=a387d4e8ad33472ba94bdbed9682a3bc`
        );

        if (response.data.articles.length === 0) {
          setError("No news articles found.");
        } else {
          // Filter out news articles without images
          const filteredArticles = response.data.articles.filter(
            (article: any) => article.urlToImage && article.urlToImage.startsWith("http")
          );

          setArticles(filteredArticles);
        }
      } catch (error) {
        console.error("Error fetching business news:", error);
        setError("Failed to fetch news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Pagination logic
  const startIndex = (currentPage - 1) * articlesPerPage;
  const selectedArticles = articles.slice(startIndex, startIndex + articlesPerPage);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="news-container">
      <h2 className="news-heading">Top Business News</h2>

      {/* Loader in the middle of the page */}
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      {error && <p className="error">{error}</p>}

      {!loading && (
        <>
          <div className="news-list">
            {selectedArticles.map((article, index) => (
              <div key={index} className="news-item">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="news-image"
                />
                <div className="news-content">
                  <h3>{article.title}</h3>
                  <p>{article.description || "No description available."}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span> Page {currentPage} of {totalPages} </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default News;
