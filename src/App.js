import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/sign-up/Signup";
import Signin from "./pages/sign-in/Signin";
import Home from "./pages/home/Home";
import Sustainable from "./pages/sustainable/Sustainable";
import Dashboard from "./pages/dashboard/Dashboard";
import Recyclingcentre from "./pages/reycling-centres/Recyclingcentre";
import Badge from "./pages/badge/Badge";
import VerificationBoard from "./pages/verification-board/VerificationBoard";
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
    polygon,
    //polygonMumbai,
    // optimism,
    // arbitrum,
    // goerli,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});






function App() {
  return (
    
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}
    theme={darkTheme({
      accentColor: 'rgb(139,195,74)'
    })}>


        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sustainable-milestones" element={<Sustainable />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/recycling-centres" element={<Recyclingcentre />} />
            <Route path='/badge' element={<Badge />} />
            <Route path='/verification-board' element={<VerificationBoard />} />


          </Routes>
        </BrowserRouter>

        </RainbowKitProvider>
    </WagmiConfig> 

        

     
  );
}

export default App;

