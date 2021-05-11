import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe rooms starting at $299"
        >
          <Link className="btn-primary" to="/rooms">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      <FeaturedRooms />
    </>
  );
}
