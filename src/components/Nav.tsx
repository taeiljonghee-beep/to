import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'SPACE', href: '/space' },
  { label: 'KIDS SPACE', href: '/kids-space' },
  { label: 'POOL & PLAY', href: '/pool-play' },
  { label: 'STAY', href: '/stay' },
  { label: 'GUIDE', href: '/guide' },
  { label: 'LOCATION', href: '/location' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-[#F9F8F4] border-b border-[#1E1E1E]/10 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span
              className="font-display font-black text-xl lg:text-2xl tracking-tighter text-[#1E1E1E]"
              style={{ letterSpacing: '-0.02em' }}
            >
              TO RIVER
            </span>
            <span className="font-korean text-[9px] font-medium text-[#1E1E1E]/50 tracking-widest">
              투리버 키즈풀빌라
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const active =
                location.pathname === item.href ||
                location.pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-[11px] font-semibold tracking-widest transition-colors duration-200 ${
                    active
                      ? 'text-[#3D1F52]'
                      : 'text-[#1E1E1E]/60 hover:text-[#1E1E1E]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + burger */}
          <div className="flex items-center gap-4">
            <Link
              to="/reservation"
              className="hidden lg:block bg-[#3D1F52] text-white text-[11px] font-bold tracking-widest px-5 py-2.5 hover:bg-[#5A3470] transition-colors duration-200"
            >
              예약하기
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col gap-1.5 p-1"
              aria-label="Open menu"
            >
              <span className="w-6 h-0.5 bg-[#1E1E1E] block" />
              <span className="w-6 h-0.5 bg-[#1E1E1E] block" />
              <span className="w-4 h-0.5 bg-[#1E1E1E] block" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#1E1E1E]/60"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 bg-[#F9F8F4] flex flex-col transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#1E1E1E]/10">
            <span className="font-display font-black text-xl">TO RIVER</span>
            <button onClick={() => setMenuOpen(false)} className="text-2xl font-light">
              ×
            </button>
          </div>
          <div className="flex flex-col flex-1 px-6 pt-8 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-[13px] font-bold tracking-widest text-[#1E1E1E]/70 hover:text-[#3D1F52] py-3 border-b border-[#1E1E1E]/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="px-6 pb-10">
            <Link
              to="/reservation"
              className="block w-full bg-[#3D1F52] text-white text-center text-[13px] font-bold tracking-widest py-4"
            >
              예약하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
