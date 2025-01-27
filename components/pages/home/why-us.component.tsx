import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Why1 from '@/public/images/why-1.png';
import Why2 from '@/public/images/why-2.png';
import Why3 from '@/public/images/why-3.png';
import Image from 'next/image';

const WhyUs = () => {
  const router = useRouter();
  const [ref, inView] = useInView({ rootMargin: '-50% 0% -50% 0%' });

  useEffect(() => {
    if (inView)
      router.push(
        {
          query: {
            section: 'why-us',
          },
        },
        undefined,
        { scroll: false, shallow: true },
      );
  }, [inView]);

  return (
    <section ref={ref} id="why-us" className="pt-32 md:pt-36">
      <div className="container flex flex-col gap-12 md:gap-24">
        <h3 className="text-white font-semibold text-[32px] md:text-[40px]">
          Kenapa harus belanja melalui kami?
        </h3>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap -mx-[10px] gap-y-5">
            <div className="relative px-[10px] basis-[340px] flex-grow">
              <div className="z-10 relative flex-grow rounded-[4px] bg-dark-grey overflow-hidden h-full">
                <Image
                  src={Why1}
                  alt="mengapa merantau mandiri 1"
                  fill
                  className="-z-10 absolute w-full h-full object-cover blur-sm md:hidden"
                />
                <div className="flex flex-col gap-4 pt-28 md:pt-16 pb-10 md:pb-16 px-4 md:px-6 xl:px-16 justify-end h-full why-us-box md:bg-none">
                  <div className="lg:text-[52px] text-yellow text-[40px]">01</div>
                  <div className="lg:text-[40px] text-white font-semibold text-xl">
                    Proses mudah dan cepat
                  </div>
                  <div className="lg:text-xl text-base text-grey !leading-[28px]">
                    Pemesanan yang mudah dan praktis, hanya melalui ponsel anda. Kapanpun,
                    dimanapun.
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[10px] basis-[340px] flex-grow hidden md:block">
              <div className="relative h-full flex-grow rounded-[4px] bg-dark-grey">
                <Image
                  src={Why1}
                  alt="mengapa merantau mandiri 1"
                  width={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap-reverse -mx-[10px] gap-y-5">
            <div className="px-[10px] basis-[340px] flex-grow hidden md:block">
              <div className="relative h-full flex-grow rounded-[4px] bg-dark-grey">
                <Image
                  src={Why2}
                  alt="mengapa merantau mandiri 2"
                  width={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative px-[10px] basis-[340px] flex-grow">
              <div className="z-10 relative flex-grow rounded-[4px] bg-dark-grey overflow-hidden h-full">
                <Image
                  src={Why2}
                  alt="mengapa merantau mandiri 2"
                  fill
                  className="-z-10 absolute w-full h-full object-cover blur-sm md:hidden"
                />
                <div className="flex flex-col gap-4 pt-28 md:pt-16 pb-10 md:pb-16 px-4 md:px-6 xl:px-16 md:px-6 xl:px-16 justify-end h-full why-us-box md:bg-none">
                  <div className="lg:text-[52px] text-yellow text-[40px]">02</div>
                  <div className="lg:text-[40px] text-white font-semibold text-xl">
                    Terpercaya menjadi mitra anda{' '}
                  </div>
                  <div className="lg:text-xl text-base text-grey !leading-[28px]">
                    Menjaga kepercayaan pengguna adalah kunci sukses kami dalam
                    menjalankan bisnis.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-[10px] gap-y-5">
            <div className="relative px-[10px] basis-[340px] flex-grow">
              <div className="z-10 relative flex-grow rounded-[4px] bg-dark-grey overflow-hidden h-full">
                <Image
                  src={Why3}
                  alt="mengapa merantau mandiri 3"
                  fill
                  className="-z-10 absolute w-full h-full object-cover blur-sm md:hidden"
                />
                <div className="flex flex-col gap-4 pt-28 md:pt-16 pb-10 md:pb-16 px-4 md:px-6 xl:px-16 justify-end h-full why-us-box md:bg-none">
                  <div className="lg:text-[52px] text-yellow text-[40px]">03</div>
                  <div className="lg:text-[40px] text-white font-semibold text-xl">
                    Garansi produk berkualitas{' '}
                  </div>
                  <div className="lg:text-xl text-base text-grey !leading-[28px]">
                    Jaminan produk terbaik sampai ke tangan anda. Seluruh barang melalui
                    quality control sebelum pengiriman.
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[10px] basis-[340px] flex-grow hidden md:block">
              <div className="relative h-full flex-grow rounded-[4px] bg-dark-grey">
                <Image
                  src={Why3}
                  alt="mengapa merantau mandiri 3"
                  width={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
