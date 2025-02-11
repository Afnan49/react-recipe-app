import { useState } from "react";
import Search from "./components/search";
import Foodlist from "./components/foodlist";
import Nav from "./components/nav";
import "./app.css";
import Container from "./components/container";
import InnerContainer from "./components/innerContainer";
import FoodDetails from "./components/foodDetails";
function App() {
  let [listOfFood, SetListOfFood] = useState([]);
  let [id, setId] = useState(715415);
  return (
    <>
      <Nav />
      <Search SetListOfFood={SetListOfFood} />
      <Container>
        <InnerContainer>
          <Foodlist listOfFood={listOfFood} setId={setId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails id={id} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
