import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface IProps {
  svc: {
    title: string;
    icon: StaticImport;
    subtitle1: string;
    subtitle2: string;
  };
}

const ServiceCard = ({ svc }: IProps) => {
  const { inView, ref } = useInView({
    threshold: 1,
  });

  return (
    <div
      ref={ref}
      key={svc.title}
      className={`basis-[240px] flex-grow group rounded-lg py-28 px-6 flex flex-col gap-10 bg-dark-grey hover:lg:bg-yellow ${inView && 'bg-yellow lg:bg-dark-grey'}`}
    >
      <span className="w-[88px] h-[88px] inline-flex items-center justify-center bg-white/30 group-hover:lg:bg-med-yellow rounded-xl backdrop-blur-sm">
        <Image src={svc.icon} alt="icon" width={50} />
      </span>
      <div className="space-y-5">
        <div
          className={`font-bold text-white text-[26px] group-hover:lg:!text-black ${inView && '!text-black lg:!text-white'}`}
        >
          {svc.title}
        </div>
        <div
          className={`font-medium text-white/50 group-hover:lg:!text-dark-yellow ${inView && '!text-dark-yellow lg:!text-white/50'}`}
        >
          <p>{svc.subtitle1}</p>
          <p>{svc.subtitle2}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
