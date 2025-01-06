import OrderStep1Bg from '@/public/images/order-step-1.png';
import OrderStep2Bg from '@/public/images/order-step-2.png';
import OrderStep3Bg from '@/public/images/order-step-3.png';
import OrderStep4Bg from '@/public/images/order-step-4.png';
import WaIc from '@/public/icons/wa.svg';
import CsIc from '@/public/icons/cs.svg';
import PaymentIc from '@/public/icons/payment.svg';
import DeliveryIc from '@/public/icons/delivery.svg';
import Image from 'next/image';

const ORDER_STEPS = [
  {
    bg: OrderStep1Bg,
    title: 'Hubungi kami',
    subtitle: 'Hubungi kami kapan saja jika kamu memiliki pertanyaan',
    icon: WaIc,
  },
  {
    bg: OrderStep2Bg,
    title: 'Konsultasi',
    subtitle: 'Diskusikan kebutuhanmu kepada kami untuk solusi terbaik',
    icon: CsIc,
  },
  {
    bg: OrderStep3Bg,
    title: 'Bayar',
    subtitle: 'Lakukan pembayaran yang mudah dan aman setelah semuanya siap',
    icon: PaymentIc,
  },
  {
    bg: OrderStep4Bg,
    title: 'Kirim',
    subtitle: 'Barang yang kamu pesan siap untuk langsung diantar',
    icon: DeliveryIc,
  },
];

const OrderStep = () => {
  return (
    <section className="py-32 md:py-36 bg-dark-grey">
      <div className="container space-y-12">
        <h3 className="text-white md:text-center font-semibold text-[32px] md:text-[40px]">
          Rute pemesanan
        </h3>
        <div className="flex flex-wrap gap-5">
          {ORDER_STEPS.map((st) => (
            <div
              key={st.title}
              className="relative basis-[320px] [@media(min-width:1440px)]:basis-[268px] flex-grow overflow-hidden md:rounded-lg"
            >
              <Image src={st.bg} alt={st.title} fill className="object-cover" />
              <div className="h-full bg-gradient-to-br from-transparent to-black/40 md:to-black/25 md:backdrop-blur-sm py-36 px-16 md:px-8 flex flex-col gap-6 relative z-10">
                <span className="w-[67px] h-[67px] inline-flex items-center justify-center bg-white/30 rounded-xl backdrop-blur-sm">
                  <Image src={st.icon} alt="icon" />
                </span>
                <div className="text-[32px] font-semibold text-white !leading-6">
                  {st.title}
                </div>
                <p className="text-white font-medium">{st.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderStep;
