import React from "react";
import OfferBazaarMain from "./components/OfferBazaarMain/OfferBazaarMain.tsx";
import ContentPage from "./components/ContentPage/ContentPage.tsx";
import PopularStores from "./components/TrendingShops/PopularStores.tsx";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts.tsx";
import PerfectDealsTemplate from "./components/PerfectDealsTemplate/PerfectDealsTemplate.tsx";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents.jsx";

function App() {
  return (
    <div className="App">
      <OfferBazaarMain />
      <ContentPage />
      {/* <PopularStores /> */}
      <UpcomingEvents />
      <TrendingProducts />
      <PerfectDealsTemplate />
    </div>
  );
}

export default App;
