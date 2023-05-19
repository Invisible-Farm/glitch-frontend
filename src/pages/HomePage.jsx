import FarmingProcess from '../components/FarmingProcess';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import IncenseList from '../components/IncenseList';
import WhyUse from '../components/WhyUse';

export default function HomePage() {
  return (
    <>
      <Hero />
      <IncenseList />
      <WhyUse />
      <FarmingProcess />
      <Footer />
    </>
  );
}
