import Image from 'next/image';
import Logo from '@/public/images/logo.png';
import HamburgerIc from '@/public/icons/hamburger.svg';
import CloseIc from '@/public/icons/close.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useScroll from '@/libs/hooks/use-scroll.hook';

const MENUS = [
  { label: 'Beranda', link: '#landing' },
  { label: 'Kenapa Kita?', link: '#why-us' },
  { label: 'Produk', link: '#product' },
  { label: 'Projek', link: '#project' },
  { label: 'FAQ', link: '#faq' },
];

const Navbar = () => {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { scroll, isScrolling } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  const sectionId = router.query.section;

  const onClickMenu = (id: string) => {
    router.push(
      {
        query: {
          section: id,
        },
      },
      undefined,
      { scroll: false, shallow: true },
    );
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, [showMobileMenu]);

  return (
    <header
      className={`fixed z-50 w-full transition-all ${scroll > windowHeight && 'bg-dark bg-opacity-80'} ${isScrolling ? '!invisible opacity-0' : '!visible opacity-100'}`}
    >
      <div className="container py-6 flex items-center justify-between">
        <Image src={Logo} width={33} alt="Merantau Mandiri" priority />
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {MENUS.map((menu) => {
              const isActive = sectionId === menu.link.slice(1);

              return (
                <li key={menu.label}>
                  <Link
                    href={menu.link}
                    className={`text-white text-lg ${isActive && 'text-yellow underline font-medium'}`}
                    onClick={() => onClickMenu(menu.link.slice(1))}
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
                  const isActive = router.query.section === menu.link.slice(1);

                  return (
                    <li key={menu.label}>
                      <Link
                        href={menu.link}
                        className={`text-white text-lg ${isActive && 'text-yellow underline font-medium'}`}
                        onClick={() => {
                          onClickMenu(menu.link.slice(1));
                          setShowMobileMenu(false);
                        }}
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
