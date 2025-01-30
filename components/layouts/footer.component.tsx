import Logo from '@/public/images/logo.png';
import Wa from '@/public/icons/wa.svg';
import Phone from '@/public/icons/phone.svg';
import Image from 'next/image';
import Button from '../common/button/button.component';
import Link from 'next/link';
import { FAX_ADMIN, WA_ADMIN } from '@/libs/constants/contact.constant';

const Footer = () => {
  const hrefTel = FAX_ADMIN.replaceAll(/[()\s]/g, '').replace('0', '+62');

  return (
    <footer className="py-32 md:py-36 container flex gap-y-10 gap-x-32 flex-wrap">
      <div className="basis-[152px] flex-grow flex flex-col gap-4">
        <Image src={Logo} width={94} alt="Merantau Mandiri" />
        <div className="font-medium text-white">info@merantaumandiri.com</div>
        <div className="flex md:flex-col gap-4">
          <Link href={`https://wa.me/${WA_ADMIN}`} target="_blank">
            <Button
              variant={Button.Variant.PrimaryOutlined}
              className="flex flex-grow items-center !text-white gap-2 text-sm"
            >
              <Image src={Wa} width={16} alt="WA" />
              {WA_ADMIN.replace(/62/, '0')}
            </Button>
          </Link>
          <Link href={`tel:${hrefTel}`} target="_blank">
            <Button
              variant={Button.Variant.PrimaryOutlined}
              className="flex flex-grow items-center !text-white gap-2 text-sm"
            >
              <Image src={Phone} width={16} alt="WA" />
              {FAX_ADMIN}
            </Button>
          </Link>
        </div>
      </div>
      <div className="basis-[320px] flex-grow flex flex-col gap-10">
        {/* <div className="flex flex-col gap-3 min-h-24 justify-between">
          <div className="text-2xl text-white font-semibold">Social</div>
          <div className="inline-flex justify-between text-white py-3">
            <span>Tiktok</span>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Youtube</span>
          </div>
        </div> */}
        <div className="flex flex-col gap-3">
          <div className="text-2xl text-white font-semibold">Jakarta - The Plaza</div>
          <p className="text-white">
            The Plaza Office Tower - Lantai 7 <br />
            Jl. M. H. Thamrin Kav. 28-30, Jakarta Pusat 10350
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl text-white font-semibold">Office Plaza</div>
          <p className="text-white">
            The Weeknd - Lantai 3 <br />
            Jl. Ir. H. Juanda 3 no.15, Kebon Kelapa, Gambir, Jakarta Pusat 10120
          </p>
        </div>
      </div>
      <div className="basis-[320px] flex-grow flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="text-2xl text-white font-semibold">Bogor</div>
          <p className="text-white">
            i7 Creative Community Space
            <br /> Jl. Baranangsiang III Blok i no.7, Tegallega, Bogor, Jawa Barat
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl text-white font-semibold">Gorontalo</div>
          <p className="text-white">
            Griya Fitrah Mandiri Blok A-1
            <br /> Jl. Brigjen Piola Isa, Dulomo Selatan, Kota Utara, Gorontalo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
