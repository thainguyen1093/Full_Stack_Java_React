import React from 'react';

import PropertySearch from "./PropertySearch";
import Footer from "../Footer";
import HomeRecentPropertiesContainer from "../../containers/home/HomeRecentPropertiesContainer";

const Home = () => (
    <div>
      <PropertySearch/>
      <HomeRecentPropertiesContainer/>
      <Footer/>
    </div>
)

export default Home;