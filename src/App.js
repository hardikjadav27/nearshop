import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OfferBazaarMain from "./components/OfferBazaarMain/OfferBazaarMain.tsx";
import ContentPage from "./components/ContentPage/ContentPage.tsx";
import PopularStores from "./components/TrendingShops/PopularStores.tsx";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts.tsx";
import PerfectDealsTemplate from "./components/PerfectDealsTemplate/PerfectDealsTemplate.tsx";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents.tsx";
import TopCategory from "./components/TopCategory/TopCategory.tsx";
import AllEvents from "./components/AllEvents/AllEvents.tsx";
import Header from "./components/Header/Header.tsx";
import CategoryPage from "./components/CategoryPage/CategoryPage.tsx";
import LimitedOffer from "./components/LimitedOffer/LimitedOffer.tsx";

function HomePage() {
  return (
    <>
      <OfferBazaarMain />
      <TopCategory />
      {/* <PopularStores /> */}
      <UpcomingEvents />
      <TrendingProducts />
      <LimitedOffer />
      <ContentPage />
      {/* <PerfectDealsTemplate /> */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-events" element={<AllEvents />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
