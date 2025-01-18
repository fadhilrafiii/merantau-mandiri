import { Swiper, SwiperSlide } from 'swiper/react';

import MinyakImg from '@/public/images/minyak.png';
import BerasImg from '@/public/images/beras.png';
import TelurImg from '@/public/images/telur.png';
import SardenImg from '@/public/images/sarden.png';
import ProductCard from '@/components/common/product-card/product-card.component';
import NextIc from '@/public/icons/next.svg';
import PrevIc from '@/public/icons/prev.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ISwiper from 'swiper';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

const PRODUCTS = [
  { name: 'Telur ayam kampung', img: TelurImg },
  { name: 'Beras ekonomi super', img: BerasImg },
  { name: 'Minyak goreng', img: MinyakImg },
  { name: 'Ikan sarden', img: SardenImg },
];

const Product = () => {
  const [swiper, setSwiper] = useState<ISwiper>();
  const router = useRouter();
  const [ref, inView] = useInView({ rootMargin: '-50% 0% -50% 0%' });

  useEffect(() => {
    if (inView)
      router.push(
        {
          query: {
            section: 'product',
          },
        },
        undefined,
        { scroll: false, shallow: true },
      );
  }, [inView]);

  return (
    <section ref={ref} id="product" className="py-32 md:py-36 container space-y-12">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-white font-semibold text-[32px] md:text-[40px]">
          Produk kami
        </h3>
        <div className="inline-flex items-center gap-4">
          <button
            className="rounded-[4px] bg-dark-grey w-11 h-11 flex items-center justify-center"
            onClick={() => swiper?.slidePrev()}
            disabled={!swiper?.allowSlidePrev}
          >
            <Image src={PrevIc} alt="prev" height={16} />
          </button>
          <button
            className="rounded-[4px] bg-dark-grey w-11 h-11 flex items-center justify-center"
            onClick={() => swiper?.slideNext()}
            disabled={!swiper?.allowSlideNext}
          >
            <Image src={NextIc} alt="next" height={16} />
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={16}
        loop
        breakpoints={{
          0: { slidesPerView: 1.25 },
          540: { slidesPerView: 1.75 },
          768: { slidesPerView: 2.25 },
          1200: { slidesPerView: 3 },
          1440: { slidesPerView: 4, spaceBetween: 40 },
        }}
      >
        {PRODUCTS.map((p) => (
          <SwiperSlide key={p.name} className="relative !h-auto">
            <ProductCard product={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;
