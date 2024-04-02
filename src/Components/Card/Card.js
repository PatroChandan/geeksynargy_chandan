import React from "react";
import "./Card.css";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import doreimg from "../../images/declan-sun-nrKRes_F36s-unsplash.jpg";
import { Icon } from "@iconify/react";

const Card = ({
  director,
  genre,
  starring,
  voting,
  totalVoting,
  runnTime,
  language,
  release,
  poster,
  title,
}) => {
  const timestamp = release;
  const date = new Date(timestamp * 1000);
  const dateString = date.toLocaleDateString();
  console.log(dateString);
  return (
    <div className="card">
      <div className="card-up">
        <div className="cardup-left">
          <div className="cardup-vote">
            <ul>
              <li>
                <BiSolidUpArrow />
              </li>
              <li>{voting}</li>
              <li>
                <BiSolidDownArrow />
              </li>
              <li>Votes</li>
            </ul>
          </div>
          <div className="cardup-img">
            <img src={poster} alt="" />
          </div>
        </div>
        <div className="cardup-right">
          <ul>
            <li>
              <h1>{title}</h1>
            </li>
            <li>
              <h3>Genre: </h3> {genre}
            </li>
            <li>
              <h3>Director: </h3> {director}
            </li>
            <li>
              <h3>Starring: </h3> {starring}
            </li>
            <li>
              {runnTime} mins | {language} | {dateString}
            </li>
            <li className="li-blu">
              137 views | Voted by {totalVoting} People
            </li>
          </ul>
        </div>
      </div>
      <div className="card-down">
        <button className="btn">Watch Trailer</button>
      </div>
    </div>
  );
};

export default Card;
