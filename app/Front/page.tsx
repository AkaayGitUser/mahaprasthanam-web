import Footer from '@/components/layout/Footer';
import Hero from '../../components/Home/Hero';
import Ourblogs from '@/components/Home/ourblogs';
import Testimonals from '@/components/Home/testimonals';
import Gallery from '@/components/Home/Gallery';
import Facilities from '@/components/Home/Facilities';
import Ourdesign from '@/components/Home/Ourdesign';
import Aboutus from '@/components/Home/Aboutus';

export default function Home() {
  return (
    <><main>
      <Hero />
      <Aboutus />
      <Ourdesign />
      <Facilities />
      <Gallery />
      <Testimonals />
      <Ourblogs />
    </main><Footer /></>  
    
  );
}