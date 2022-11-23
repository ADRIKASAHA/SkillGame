import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Home.css";
import image from "../images/quiz2.jpg";
const Home = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <h2>Test your knowledge by answering  our best online quiz questions.</h2>
      <img src={image} alt="quiz"/>
      <div className="home-container">
        {data.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
    
  );
};

export default Home;

// handleQuizDetails={handleQuizDetails}
