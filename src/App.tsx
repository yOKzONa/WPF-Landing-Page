import { useState } from 'react';
import HomePage from './components/HomePage';
import UpsellPage from './components/UpsellPage';
import CheckoutPage from './components/CheckoutPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'upsell' | 'checkout'>('home');
  const [includeLaunchAccelerator, setIncludeLaunchAccelerator] = useState(false);

  const handleJoinClick = () => {
    setCurrentPage('upsell');
  };

  const handleUpsellAccept = () => {
    setIncludeLaunchAccelerator(true);
    setCurrentPage('checkout');
  };

  const handleUpsellDecline = () => {
    setIncludeLaunchAccelerator(false);
    setCurrentPage('checkout');
  };

  if (currentPage === 'upsell') {
    return <UpsellPage onAccept={handleUpsellAccept} onDecline={handleUpsellDecline} />;
  }

  if (currentPage === 'checkout') {
    return <CheckoutPage includeLaunchAccelerator={includeLaunchAccelerator} />;
  }

  return <HomePage onJoinClick={handleJoinClick} />;
}

export default App;
