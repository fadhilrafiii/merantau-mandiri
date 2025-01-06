import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface Review {
  flag: string | StaticImport;
  author: string;
  message: string;
  logo: string | StaticImport;
  bg: string | StaticImport;
}

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="relative rounded-lg overflow-hidden h-full p-7 md:p-11">
      <Image
        src={review.bg}
        className="object-cover absolute -z-10"
        alt={review.author}
        fill
      />
      <div className="flex flex-col gap-12 md:gap-24">
        <div className="inline-flex">
          <Image
            src={review.flag}
            alt="INA"
            width={72}
            className="z-10 -mr-4 max-w-12 md:max-w-full object-contain"
          />
          <Image
            src={review.logo}
            alt="INA"
            width={68}
            className="max-w-11 md:max-w-full object-contain"
          />
        </div>
        <div className="flex-grow flex flex-col gap-1 md:gap-3">
          <div className="text-white font-bold text-base md:text-2xl">
            {review.message}
          </div>
          <div className="text-white text-sm md:text-xl">{review.author}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
