import Image from 'next/image';
import DummyClient from '@/public/images/client.png';

const Clients = () => {
  return (
    <section id="clients" className="pt-32 md:pt-36">
      <div className="relative overflow-x-hidden">
        <div className="inline-flex animate-marquee">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-5 ml-10 md:ml-24">
              <Image
                src={DummyClient}
                alt="Dummy Client"
                width={38}
                className="max-w-[26px] md:max-w-[38px]"
              />
              <span className="font-extrabold text-white text-sm md:text-xl">
                FeatherDev
              </span>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 animate-marquee2 inline-flex">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-5 ml-10 md:ml-24">
              <Image
                src={DummyClient}
                alt="Dummy Client"
                width={38}
                className="max-w-[26px] md:max-w-[38px]"
              />
              <span className="font-extrabold text-white text-sm md:text-xl">
                FeatherDev
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
