import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as A from "./redux/towns/towns.actions";
import Search from "./components/Search";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const { towns } = useSelector((state) => state.towns);
  //const {towns}= useSelector(state=>state.towns);

  useEffect(() => {
    if (!towns.length > 0) {
      dispatch(A.townsRequest());
    }
  }, []);

  return (
    <>
      <Header title='El tiempo en Barcelona' />

      {towns.length > 0 && <Search />}

      <Card />
    </>
  );
}

export default App;
