import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropsTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>Per Night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.PropsTypes = {
  room: PropsTypes.shape({
    name: PropsTypes.string.isRequired,
    slug: PropsTypes.string.isRequired,
    images: PropsTypes.arrayOf(PropsTypes.string).isRequired,
    price: PropsTypes.string.isRequired,
  }),
};
