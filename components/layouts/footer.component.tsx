import Logo from '@/public/images/logo.png';
import Wa from '@/public/icons/wa.svg';
import Image from 'next/image';
import Button from '../common/button/button.component';

const Footer = () => {
  return (
    <footer className="py-32 md:py-36 container flex gap-y-10 gap-x-32 flex-wrap">
      <div className="basis-[152px] flex-grow flex flex-col gap-4">
        <Image src={Logo} width={94} alt="Merantau Mandiri" />
        <div className="font-medium text-white">info@merantaumandiri.com</div>
        <div className="flex md:flex-col gap-4">
          <Button
            variant={Button.Variant.PrimaryOutlined}
            className="flex flex-grow items-center !text-white gap-2 text-sm"
          >
            <Image src={Wa} width={16} alt="WA" />
            Admin 1
          </Button>
          <Button
            variant={Button.Variant.PrimaryOutlined}
            className="flex flex-grow items-center !text-white gap-2 text-sm"
          >
            <Image src={Wa} width={16} alt="WA" />
            Admin 2
          </Button>
        </div>
      </div>
      <div className="basis-[320px] flex-grow flex flex-col gap-10">
        <div className="flex flex-col gap-3 min-h-24 justify-between">
          <div className="text-2xl text-white font-semibold">Social</div>
          <div className="inline-flex justify-between text-white py-3">
            <span>Tiktok</span>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Youtube</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl text-white font-semibold">Office Jakarta</div>
          <p className="text-white">
            Jalan Pramuka 2 No.46 A, Kel. Mampang, Kec. Pancoran Mas, Depok, Jawa Barat.
          </p>
        </div>
      </div>
      <div className="basis-[320px] flex-grow flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="text-2xl text-white font-semibold">Office Plaza</div>
          <p className="text-white">
            Jalan Pramuka 2 No.46 A, Kel. Mampang, Kec. Pancoran Mas, Depok, Jawa Barat.{' '}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl text-white font-semibold">Office Bogor</div>
          <p className="text-white">
            4W Office, Jl. Bubulak No.A-4, RT.01/RW.11, Kel. Bubulak, Kec. Bogor Barat,
            Bogor, Jawa Barat 16115{' '}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
