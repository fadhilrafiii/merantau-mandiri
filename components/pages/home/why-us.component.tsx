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
          hash: '#why-us',
        },
        undefined,
        { scroll: false, shallow: true },
      );
  }, [inView]);

  return (
    <section ref={ref} id="why-us" className="pt-32 md:pt-36">
      <div className="container flex flex-col gap-12 md:gap-24">
        <h3 className="text-white font-semibold text-[32px] md:text-[40px]">
          Kenapa harus berbelanja melalui kami?
        </h3>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap -mx-[10px] gap-y-5">
            <div className="px-[10px] basis-[340px] flex-grow ">
              <div className="flex-grow rounded-[4px] bg-dark-grey flex flex-col gap-8 lg:p-16 px-4 py-8">
                <div className="lg:text-[52px] text-yellow text-[40px]">01</div>
                <div className="lg:text-[40px] text-white font-semibold text-xl">
                  Proses mudah dan cepat
                </div>
                <div className="lg:text-xl text-base text-grey">
                  Pemesanan yang mudah dan praktis, hanya melalui ponsel anda. Kapanpun,
                  dimanapun.
                </div>
              </div>
            </div>
            <div className="px-[10px] basis-[340px] flex-grow">
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
            <div className="px-[10px] basis-[340px] flex-grow">
              <div className="relative h-full  flex-grow rounded-[4px] bg-dark-grey">
                <Image
                  src={Why2}
                  alt="mengapa merantau mandiri 1"
                  width={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="px-[10px] basis-[340px] flex-grow">
              <div className=" flex-grow rounded-[4px] bg-dark-grey flex flex-col gap-8 lg:p-16 px-4 py-8">
                <div className="lg:text-[52px] text-yellow text-[40px]">02</div>
                <div className="lg:text-[40px] text-white font-semibold text-xl">
                  Terpercaya menjadi mitra anda{' '}
                </div>
                <div className="lg:text-xl text-grey text-base">
                  Menjaga kepercayaan pengguna adalah kunci sukses kami dalam menjalankan
                  bisnis.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-[10px] gap-y-5">
            <div className="px-[10px] basis-[340px] flex-grow">
              <div className=" flex-grow rounded-[4px] bg-dark-grey flex flex-col gap-8 lg:p-16 px-4 py-8">
                <div className="lg:text-[52px] text-yellow text-[40px]">03</div>
                <div className="lg:text-[40px] text-white font-semibold text-xl">
                  Garansi produk berkualitas
                </div>
                <div className="lg:text-xl text-grey text-base">
                  Jaminan produk terbaik sampai ke tnagan anda. Seluruh barang melalui
                  quality control sebelum pengiriman.
                </div>
              </div>
            </div>
            <div className="px-[10px] basis-[340px] flex-grow">
              <div className="relative h-full  flex-grow rounded-[4px] bg-dark-grey">
                <Image
                  src={Why3}
                  alt="mengapa merantau mandiri 1"
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
