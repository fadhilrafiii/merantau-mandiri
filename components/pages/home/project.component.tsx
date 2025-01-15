import NextIc from '@/public/icons/next.svg';
import PrevIc from '@/public/icons/prev.svg';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ISwiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProjectDummyImg1 from '@/public/images/dummy-project-1.jpeg';
import ProjectDummyImg2 from '@/public/images/dummy-project-2.jpeg';
import FemaleImg from '@/public/images/female.png';
import Button from '@/components/common/button/button.component';

const PROJECTS = [
  { image: ProjectDummyImg1, title: 'Nama project', desc: 'Description of project' },
  { image: ProjectDummyImg2, title: 'Nama project', desc: 'Description of project' },
  { image: ProjectDummyImg2, title: 'Nama project', desc: 'Description of project' },
  { image: ProjectDummyImg1, title: 'Nama project', desc: 'Description of project' },
];

const Project = () => {
  const [firstSwiper, setFirstSwiper] = useState<ISwiper>();
  const [secondSwiper, setSecondSwiper] = useState<ISwiper>();
  const router = useRouter();
  const [ref, inView] = useInView({ rootMargin: '-50% 0% -50% 0%' });

  const firstSwiperProjects = PROJECTS.filter((_, idx) => idx % 2 === 0);
  const secondSwiperProjects = PROJECTS.filter((_, idx) => idx % 2 === 1);

  useEffect(() => {
    if (inView)
      router.push(
        {
          query: {
            section: 'project',
          },
        },
        undefined,
        { scroll: false, shallow: true },
      );
  }, [inView]);

  const handlePrev = () => {
    firstSwiper?.slidePrev();
    secondSwiper?.slidePrev();
  };

  const handleNext = () => {
    firstSwiper?.slideNext();
    secondSwiper?.slideNext();
  };

  return (
    <section ref={ref} id="project" className="py-32 md:py-36 container space-y-12">
      <h3 className="text-white font-semibold text-[32px] md:text-[40px]">Project</h3>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="min-w-[240px] aspect-square md:aspect-auto rounded-[4px] bg-dark-grey py-12 px-8 basis-[calc(calc(100%-20px)/3)] flex-grow flex flex-col gap-28">
            <div className="font-medium text-3xl text-white">
              Proyek-proyek <br />
              terbaik kami
            </div>
            <div className="inline-flex items-center gap-4">
              <button
                className="rounded-[4px] bg-[#3f3f3f] w-11 h-11 flex items-center justify-center"
                onClick={handlePrev}
              >
                <Image src={PrevIc} alt="prev" height={16} />
              </button>
              <button
                className="rounded-[4px] bg-[#3f3f3f] w-11 h-11 flex items-center justify-center"
                onClick={handleNext}
              >
                <Image src={NextIc} alt="next" height={16} />
              </button>
            </div>
          </div>
          <div className="min-w-[240px] aspect-square md:aspect-[none] basis-[calc(calc(100%-20px)/3)] flex-grow  rounded-[4px] overflow-hidden">
            <Swiper
              onSwiper={(swiper: ISwiper) => setFirstSwiper(swiper)}
              spaceBetween={16}
              className="!h-full"
              loop
              slidesPerView={1}
            >
              {firstSwiperProjects.map((p, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="relative h-full">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                    <div className="h-full w-full absolute px-8 py-12 flex flex-col gap-4 bg-opacity-30 bg-black">
                      <div className="font-medium text-white text-3xl">{p.title}</div>
                      <p className="text-white">{p.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="min-w-[240px] aspect-square md:aspect-[none] basis-[calc(calc(100%-20px)/3)] flex-grow  rounded-[4px] overflow-hidden">
            <Swiper
              className="!h-full"
              onSwiper={(swiper: ISwiper) => setSecondSwiper(swiper)}
              spaceBetween={16}
              loop
              slidesPerView={1}
            >
              {secondSwiperProjects.map((p, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="relative h-full">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                    <div className="h-full w-full absolute px-8 py-12 flex flex-col gap-4 bg-black bg-opacity-30">
                      <div className="font-medium text-white text-3xl">{p.title}</div>
                      <p className="text-white">{p.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap">
          <div className="min-w-[240px] relative rounded-[4px] bg-dark-grey py-12 px-8 basis-[calc(calc(100%-40px)/3)] aspect-square flex-grow flex flex-col gap-28">
            <Image
              src={FemaleImg}
              alt="female merantau mandiri"
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-[240px] basis-[calc(2*calc(100%-20px)/3)] flex-grow rounded-[4px] overflow-hidden flex items-center justify-center bg-yellow px-4 py-16 md:px-20">
            <div className="flex flex-col gap-8 items-center justify-center">
              <div className="flex flex-col gap-4 md:gap-8">
                <div className="font-semibold text-2xl text-center md:hidden">
                  Memesan barang seperti mengirim uang dalam hitungan menit
                </div>
                <div className="font-semibold text-3xl text-center hidden md:block">
                  Dapatkan layanan terbaik kami, <br />
                  cukup melalui smartphone mu
                </div>
                <p className="text-center hidden md:block">
                  Percayakan segala keperluan anda ke Merantau Mandiri. <br />
                  Satu solusi untuk segala kebutuhan barang dan jasa.
                </p>
                <p className="text-center md:hidden text-sm">
                  memberdayakan keputusan logistik anda kepada merantau mandiri untuk
                  barang dalam jumlah besar
                </p>
              </div>
              <Button variant={Button.Variant.SecondaryFilled}>Hubungi kami</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
