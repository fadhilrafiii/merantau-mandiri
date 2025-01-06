import { Swiper, SwiperSlide } from 'swiper/react';

import CompanyLogo from '@/public/icons/company-logo.svg';
import CompanyLogo1 from '@/public/icons/company-logo-1.svg';
import ReviewBg1 from '@/public/images/review-bg-1.png';
import ReviewBg2 from '@/public/images/review-bg-2.png';
import INAFlag from '@/public/icons/ina-flag.svg';
import ReviewCard from '@/components/common/review-card/review-card.component';
import NextIc from '@/public/icons/next-2.svg';
import PrevIc from '@/public/icons/prev-2.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ISwiper from 'swiper';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

const REVIEWS = [
  {
    flag: INAFlag,
    author: 'Nisa Hamida',
    message: '“MHM sangat cepat dan tanggap dalam menyediakan barang yang dibutuhkan”',
    logo: CompanyLogo,
    bg: ReviewBg1,
  },
  {
    flag: INAFlag,
    author: 'Rahmawati',
    message:
      '“Singkat dan amanah pengiriman MHM dalam memenuhi kebutuhan pabrik kita sebagai partner”',
    logo: CompanyLogo1,
    bg: ReviewBg2,
  },
];

const Review = () => {
  const [swiper, setSwiper] = useState<ISwiper>();
  const router = useRouter();
  const [ref, inView] = useInView({ rootMargin: '-50% 0% -50% 0%' });

  useEffect(() => {
    if (inView)
      router.push(
        {
          hash: '#review',
        },
        undefined,
        { scroll: false },
      );
  }, [inView]);

  return (
    <section ref={ref} id="review" className="py-32 md:py-36 container space-y-12">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-white font-semibold text-[32px] md:text-[40px]">
          Pesan <span className="hidden md:inline">hangat dari</span> mereka
        </h3>
        <div className="inline-flex items-center gap-4">
          <button onClick={() => swiper?.slidePrev()}>
            <Image src={PrevIc} alt="prev" height={40} />
          </button>
          <button onClick={() => swiper?.slideNext()}>
            <Image src={NextIc} alt="next" height={40} />
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={16}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 1.75 },
          1280: { slidesPerView: 2 },
        }}
      >
        {REVIEWS.map((p, idx) => (
          <SwiperSlide key={idx} className="relative !h-auto">
            <ReviewCard review={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
