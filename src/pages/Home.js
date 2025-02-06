import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className={`page ${theme}`}>
      <h1>{language === "en" ? "Home Page - List of blog posts" : "მთავარი გვერდი - პოსტები"}</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <Link to={`/posts`}>{language === "en" ? "Read More" : "კითხვის გაგრძელება"}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
