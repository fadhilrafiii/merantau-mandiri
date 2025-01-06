import Button from '@/components/common/button/button.component';

import CsIc from '@/public/icons/cs.svg';
import ProductIc from '@/public/icons/product.svg';
import DeliveryIc from '@/public/icons/delivery.svg';
import Image from 'next/image';

const SERVICES = [
  {
    icon: CsIc,
    title: 'Pengiriman',
    subtitle: 'Butuh kirim barang? Kami bisa urus pengirimannya',
  },
  {
    icon: ProductIc,
    title: 'Pengadaan Barang',
    subtitle: 'Perlu stok dalam jumlah besar? Kami siap sediakan',
  },
  {
    icon: DeliveryIc,
    title: 'Pengadaan Jasa',
    subtitle: 'Coba bilang butuh jasa apa, nanti kita cari',
  },
];

const Service = () => {
  return (
    <section id="service" className="pt-32 md:pt-36 container space-y-12">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold text-[32px] md:text-[40px]">
          Jasa <span className="hidden md:inline">yang kami tawarkan</span>
        </h3>
        <Button variant={Button.Variant.PrimaryOutlined}>Hubungi Kami</Button>
      </div>
      <div className="flex flex-wrap gap-6">
        {SERVICES.map((svc) => (
          <div
            key={svc.title}
            className="basis-[240px] flex-grow group rounded-lg py-28 px-6 flex flex-col gap-10 bg-dark-grey hover:bg-yellow"
          >
            <span className="w-[88px] h-[88px] inline-flex items-center justify-center bg-white/30 group-hover:bg-med-yellow rounded-xl backdrop-blur-sm">
              <Image src={svc.icon} alt="icon" />
            </span>
            <div className="space-y-5">
              <div className="font-bold text-white text-[26px] group-hover:text-black">
                {svc.title}
              </div>
              <p className="font-medium text-white/50 group-hover:text-dark-yellow">
                {svc.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
