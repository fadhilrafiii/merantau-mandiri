import Button from '@/components/common/button/button.component';

import CsIc from '@/public/icons/cs.svg';
import ProductIc from '@/public/icons/product.svg';
import DeliveryIc from '@/public/icons/delivery.svg';
import ServiceCard from '@/components/common/service-card/service-card.component';
import Link from 'next/link';
import { WA_ADMIN } from '@/libs/constants/contact.constant';

const SERVICES = [
  {
    icon: CsIc,
    title: 'Pengiriman',
    subtitle1: 'Butuh kirim barang?',
    subtitle2: 'Kami urus pengirimannya',
  },
  {
    icon: ProductIc,
    title: 'Pengadaan Barang',
    subtitle1: 'Perlu produk dalam jumlah besar?',
    subtitle2: 'Siap kami sediakan',
  },
  {
    icon: DeliveryIc,
    title: 'Pengadaan Jasa',
    subtitle1: 'Cari jasa apapun?',
    subtitle2: 'Konsultasikan dengan kami.',
  },
];

const Service = () => {
  return (
    <section id="service" className="pt-32 md:pt-36 container space-y-12">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold text-[32px] md:text-[40px]">
          Jasa yang kami tawarkan
        </h3>
        <Link href={`https://wa.me/${WA_ADMIN}`}>
          <Button variant={Button.Variant.PrimaryOutlined}>Hubungi Kami</Button>
        </Link>
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
