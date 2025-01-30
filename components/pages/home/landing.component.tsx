import Button from '@/components/common/button/button.component';
import { WA_ADMIN } from '@/libs/constants/contact.constant';
import LandingImg from '@/public/images/landing.webp';
import Image from 'next/image';
import Link from 'next/link';
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
      <div className="space-y-12 md:space-y-20 min-h-[560px] pt-8 md:pt-0 h-[calc(100vh-40px)] flex flex-col justify-center items-start backdrop-blur-sm">
        <div className="container space-y-8">
          <h1 className="font-semibold text-white lg:text-6xl text-4xl leading-tight">
            Saya sedang <br /> mencari <span className="text-yellow typewriter"></span>
          </h1>
          <p className="text-white text-lg tracking-tight md:text-xl">
            Kami menyediakan kebutuhan sehari-hari,
            <br /> termurah dan termudah!
          </p>
        </div>
        <div className="container">
          <Link href={`https://wa.me/${WA_ADMIN}`} target="_blank">
            <Button variant={Button.Variant.PrimaryFilled}>Hubungi Kami</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
