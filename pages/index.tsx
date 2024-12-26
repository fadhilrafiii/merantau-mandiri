import Clients from '@/components/pages/home/clients.component';
import Landing from '@/components/pages/home/landing.component';
import WhoWeAre from '@/components/pages/home/who-we-are.component';

export default function Home() {
  return (
    <>
      <Landing />
      <Clients />
      <WhoWeAre />
    </>
  );
}
