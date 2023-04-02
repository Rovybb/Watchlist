import { HomeStyled } from "./styles/Home.styled";
import { useEffect, useContext } from "react";
import Banner from "./Banner";
import Footer from "../body/Footer"
import FeedHandler from "./FeedHandler";
import DataContext from "../../context/DataContext";

function Home() {
  const { setQuery, setSearchText, autoScrollRef } = useContext(DataContext);

  useEffect(() => {
    setSearchText('');
    setQuery('');
  }, []);

  return (
    <HomeStyled>
      <Banner />
      <div ref={autoScrollRef} style={{height: '0', position: "absolute", top: "calc(100% - 3.5rem)"}}/>
      <FeedHandler />
      <Footer />
    </HomeStyled>
  )
}

export default Home