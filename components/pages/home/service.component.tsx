import Button from '@/components/common/button/button.component';

import CsIc from '@/public/icons/cs.svg';
import ProductIc from '@/public/icons/product.svg';
import DeliveryIc from '@/public/icons/delivery.svg';
import Image from 'next/image';
import ServiceCard from '@/components/common/service-card/service-card.component';

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
        {SERVICES.map((svc, idx) => (
          <ServiceCard svc={svc} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Service;
