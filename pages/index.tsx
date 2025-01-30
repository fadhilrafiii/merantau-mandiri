import Footer from '@/components/layouts/footer.component';
import Clients from '@/components/pages/home/clients.component';
import Faq from '@/components/pages/home/faq.component';
import Landing from '@/components/pages/home/landing.component';
import OrderStep from '@/components/pages/home/order-step.component';
import Product from '@/components/pages/home/product.component';
import Project from '@/components/pages/home/project.component';
import Review from '@/components/pages/home/review.component';
import Service from '@/components/pages/home/service.component';
import WhoWeAre from '@/components/pages/home/who-we-are.component';
import WhyUs from '@/components/pages/home/why-us.component';

export default function Home() {
  return (
    <>
      <Landing />
      {/* <Clients /> */}
      <WhoWeAre />
      <WhyUs />
      <Product />
      <OrderStep />
      <Service />
      <Project />
      <Review />
      <Faq />
      <Footer />
    </>
  );
}
