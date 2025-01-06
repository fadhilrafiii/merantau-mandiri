import Image from 'next/image';
import { useEffect, useState } from 'react';

import Plus from '@/public/icons/plus.svg';
import Minus from '@/public/icons/minus.svg';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

const FAQS = [
  {
    question: 'Berapa lama biasanya pengiriman?',
    answer:
      'MHM menggunakan pengiriman internal perusahaan yang memungkinkan kamu tidak perlu khawatir dengan keamanan dalam perjalanan :)',
  },
  {
    question: 'Pengiriman menggunakan ekspedisi apa?',
    answer:
      'MHM menggunakan pengiriman internal perusahaan yang memungkinkan kamu tidak perlu khawatir dengan keamanan dalam perjalanan :)',
  },
  {
    question: 'MHM melayani jasa hingga hari apa?',
    answer:
      'MHM menggunakan pengiriman internal perusahaan yang memungkinkan kamu tidak perlu khawatir dengan keamanan dalam perjalanan :)',
  },
  {
    question: 'Menerima pengadaan jumlah besar?',
    answer:
      'MHM menggunakan pengiriman internal perusahaan yang memungkinkan kamu tidak perlu khawatir dengan keamanan dalam perjalanan :)',
  },
  {
    question: 'Kemana saya harus menghubungi MHM?',
    answer:
      'MHM menggunakan pengiriman internal perusahaan yang memungkinkan kamu tidak perlu khawatir dengan keamanan dalam perjalanan :)',
  },
  {
    question: 'Apakah ada tingkatan harga pemesanan?',
    answer:
      'MHM menggunakan pengiriman internal perusahaan yang memungkinkan kamu tidak perlu khawatir dengan keamanan dalam perjalanan :)',
  },
];

const Faq = () => {
  const router = useRouter();
  const [ref, inView] = useInView({ rootMargin: '-50% 0% -50% 0%' });

  useEffect(() => {
    if (inView)
      router.push(
        {
          hash: '#faq',
        },
        undefined,
        { scroll: false, shallow: true },
      );
  }, [inView]);

  const [active, setActive] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" className="bg-dark-grey py-32 md:py-36">
      <div className="flex flex-col container gap-12 md:gap-24">
        <h3 className="text-white font-semibold text-[32px] md:text-[40px] text-center">
          FAQ
        </h3>
        <div className="flex flex-col gap-3 md:gap-6">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="flex items-start pb-3 md:pb-6 border-b border-grey/50"
            >
              <div className="space-y-3 md:space-y-6 flex-grow">
                <div
                  className={`text-white text-sm md:text-2xl ${active === i && 'text-yellow'}`}
                >
                  {f.question}
                </div>
                <div
                  className={`text-white text-[10px] md:text-base ${active !== i && 'hidden'}`}
                >
                  {f.answer}
                </div>
              </div>
              <button
                className="flex items-center justify-end"
                onClick={() => setActive(active === i ? null : i)}
              >
                <Image
                  src={Plus}
                  alt="toggle"
                  width={32}
                  className={`max-w-4 md:max-w-8 transition-all ${active === i && 'hidden'}`}
                />
                <Image
                  src={Minus}
                  alt="toggle"
                  width={32}
                  className={`max-w-4 md:max-w-8 transition-all ${active !== i && 'hidden'}`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;