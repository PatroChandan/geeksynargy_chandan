import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import CompanyInfo from "../../Components/CompanyInfo/CompanyInfo";
import Card from "../../Components/Card/Card";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://hoblist.com/api/movieList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          }),
        });
        const data = await response.json();
        setMovieList(data.result);
        console.log("movie list1", data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  console.log("movie list", movieList);
  return (
    <div className="home">
      <Navbar />
      <div className="main">
        {movieList?.map((item) => (
          <Card
            title={item.title}
            director={item.director}
            genre={item.genre}
            starring={item.stars}
            voting={item.voting}
            totalVoting={item.totalVoted}
            runnTime={item.runTime}
            language={item.language}
            release={item.releasedDate}
            poster={item.poster}
          />
        ))}
      </div>
      <CompanyInfo />
    </div>
  );
};

export default Home;
