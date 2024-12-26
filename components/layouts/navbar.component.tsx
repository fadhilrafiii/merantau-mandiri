import Image from 'next/image';
import Logo from '@/public/images/logo.png';
import HamburgerIc from '@/public/icons/hamburger.svg';
import CloseIc from '@/public/icons/close.svg';
import Link from 'next/link';
import { useState } from 'react';

const IS_SERVER = typeof window === 'undefined';

const MENUS = [
  { label: 'Beranda', link: '#landing' },
  { label: 'Kenapa Kita?', link: '#why-us' },
  { label: 'Produk', link: '#product' },
  { label: 'Projek', link: '#project' },
  { label: 'FAQ', link: '#faq' },
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="fixed z-50 w-full">
      <div className="container py-10 flex items-center justify-between">
        <Image src={Logo} width={33} alt="Merantau Mandiri" priority />
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {MENUS.map((menu) => {
              console.log(IS_SERVER);
              const isActive = !IS_SERVER && window.location.hash === menu.link;

              return (
                <li key={menu.label}>
                  <Link
                    href={menu.link}
                    className={`text-white text-lg ${isActive && 'text-yellow underline font-medium'}`}
                  >
                    {menu.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <span
          role="button"
          aria-label="menu"
          className="md:hidden z-[100]"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        >
          {showMobileMenu ? (
            <Image src={CloseIc} alt="close menu" width={25} />
          ) : (
            <Image src={HamburgerIc} alt="menu" width={30} />
          )}
        </span>
        {showMobileMenu && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-30 z-50 flex flex-col items-center justify-center backdrop-blur-md gap-12">
            <Image src={Logo} width={50} alt="Merantau Mandiri" priority />
            <nav>
              <ul className="flex flex-col justify-center items-center gap-10">
                {MENUS.map((menu) => {
                  const isActive = window.location.hash === menu.link;

                  return (
                    <li key={menu.label}>
                      <Link
                        href={menu.link}
                        className={`text-white text-lg ${isActive && 'text-yellow underline font-medium'}`}
                      >
                        {menu.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
