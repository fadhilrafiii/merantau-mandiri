import Image from 'next/image';
import StarIc from '@/public/icons/star.svg';

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="pt-32 md:pt-36 container !px-0 lg:px-4">
      <div className="py-12 rounded-[4px] bg-dark-grey flex flex-wrap gap-y-24">
        <div className="px-4 md:px-8 lg:px-16 basis-[240px] flex-grow flex flex-col justify-between gap-y-12 lg:gap-y-20">
          <div className="space-y-6 lg:space-y-10">
            <div className="font-medium text-white text-xl lg:text-3xl">
              Akhirnya, cara baru untuk memesan kebutuhanmu telah hadir disini
            </div>
            <p className="lg:hidden text-grey">
              Pilar utama dalam membuat logistic terbaik
            </p>
            <p className="hidden lg:block text-xl text-grey">
              Pilihan utama dalam layanan penyedia FMCG serta pengadaan barang dan jasa
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[23px] h-[23px] flex items-center justify-center lg:w-[42px] lg:h-[42px] rounded-[4px] bg-yellow">
              <Image
                src={StarIc}
                alt="rating"
                width={23}
                className="max-w-[14px] lg:max-w-[23px]"
              />
            </div>
            <div className="text-grey text-base lg:text-xl">
              Rating <span className="font-bold text-white">4.8/5</span> dari{' '}
              <span className="font-bold text-white">600+</span> pesanan
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 lg:px-16 basis-[240px] flex-grow">
          <p className="text-white lg:text-xl pb-8 lg:pb-16 border-b border-dashed border-grey !leading-[2]">
            Mentau Mandiri berdiri tahun 2012 dan terus berinovasi hingga saat ini.
          </p>
          <p className="text-white lg:text-xl pt-8 lg:pt-16 !leading-[2]">
            Salah satu <b>penyedia berbagai barang kebutuhan</b> dalam jumlah besar yang
            mungkin sulit ditemukan di tempat lain dengan kelengkapan terjamin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
