import { Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import './styles/Font.css';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import SendingLetterPage from './pages/SendingLetterPage';
import SendingNFTPage from './pages/SendingNFTPage';
import GeneratedPage from './pages/GeneratedPage';
import MintedPage from './pages/MintedPage';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/letter" element={<SendingLetterPage />} />
          <Route path="/send" element={<SendingNFTPage />} />
          <Route path="/generated" element={<GeneratedPage />} />
          <Route path="/minted" element={<MintedPage />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  height: calc(100vh - 140px);
`;
