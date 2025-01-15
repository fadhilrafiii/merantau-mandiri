import Button from '@/components/common/button/button.component';
import LandingImg from '@/public/images/landing.webp';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Landing = () => {
  const router = useRouter();
  const [ref, inView] = useInView({ rootMargin: '-50% 0% -50% 0%' });

  useEffect(() => {
    if (inView)
      router.push(
        {
          query: {
            section: 'landing',
          },
        },
        undefined,
        { scroll: false, shallow: true },
      );
  }, [inView]);

  return (
    <section
      ref={ref}
      id="landing"
      className="relative overflow-hidden bg-black bg-opacity-65"
    >
      <Image
        src={LandingImg}
        alt="Merantau mandiri landing"
        fill
        priority
        className="object-cover absolute -z-10 backdrop-blur-sm"
      />
      <div className="space-y-20 min-h-[720px] h-[calc(100vh-40px)] flex flex-col justify-center items-start backdrop-blur-sm">
        <div className="container space-y-8">
          <h1 className="font-semibold text-white lg:text-6xl text-4xl leading-tight">
            Saya sedang <br /> mencari <span className="text-yellow">beras</span>
          </h1>
          <p className="text-white text-xl">
            Kami menyediakan kebutuhan sehari-hari,
            <br /> termurah dan termudah!
          </p>
        </div>
        <div className="container">
          <Button variant={Button.Variant.PrimaryFilled}>Hubungi Kami</Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
