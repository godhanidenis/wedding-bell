import React, { useEffect } from "react";
import LandingPage from "../components/sections/LandingPage";
import SubHeader from "../components/Layout/SubHeader";
import { useDispatch } from "react-redux";
import { loadCategoriesStart } from "../redux/ducks/categories";
import { loadAreaListsStart } from "../redux/ducks/areaLists";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategoriesStart());
    dispatch(loadAreaListsStart());
  }, [dispatch]);
  return (
    <>
      <SubHeader />
      <LandingPage />
    </>
  );
}
