import MainPage from "../pages/mainPage/MainPage";
import UpcomingNftPage from "../pages/UpcomingNftPage/UpcomingNftPage";
import { Routes, Route} from "react-router-dom";
import HeaderSolanaInformation from "../features/headerSolanaInformation/HeaderSolanaInformation";
import NavigationBar from "../features/navigationBar/NavigationBar";
import AllNftPage from '../pages/allNftPage/AllNftPage'
import Nft from "../pages/nft/Nft";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <HeaderSolanaInformation />
      <NavigationBar />
      <Routes>
      <Route path="/" element={<MainPage />} />
        <Route path="/upcoming" element={<UpcomingNftPage />} />
        <Route path="/nfts" element={<AllNftPage />} />
        <Route path="/nfts/:id" element={<Nft />} />
      </Routes>
    </div>
  );
};

export default App;
