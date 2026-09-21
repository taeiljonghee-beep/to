import { Link } from 'react-router-dom';

const guides = [
  {
    label: '예약 안내',
    en: 'RESERVATION GUIDE',
    desc: '인원, 체크인/아웃, 요금, 예약 방법 안내',
    color: '#F0D94A',
    href: '/guide/reservation',
  },
  {
    label: '이용규칙',
    en: 'HOUSE RULES',
    desc: '시설 이용 수칙 및 안전 규정',
    color: '#EF8C72',
    href: '/guide/house-rules',
  },
  {
    label: '수영장 안내',
    en: 'POOL GUIDE',
    desc: '수영장 이용 시간 및 안전 수칙',
    color: '#85C4DC',
    href: '/guide/pool',
  },
  {
    label: '바베큐 안내',
    en: 'BBQ GUIDE',
    desc: '바베큐 이용 방법 및 제공 도구',
    color: '#8ECFC0',
    href: '/guide/bbq',
  },
  {
    label: '취소·환불 정책',
    en: 'CANCELLATION',
    desc: '날짜별 취소 정책 및 환불 규정',
    color: '#C2B0E8',
    href: '/guide/cancellation',
  },
  {
    label: '자주 묻는 질문',
    en: 'FAQ',
    desc: '예약부터 체크아웃까지 자주 묻는 질문',
    color: '#F0D94A',
    href: '/guide/faq',
  },
];

export default function Guide() {
  return (
    <main className="pt-16 bg-[#F9F8F4]">
      {/* Hero */}
      <section className="pt-16 lg:pt-24 pb-16 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <p className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 mb-4">
          GUIDE / 이용 안내
        </p>
        <h1 className="font-display font-black text-[#1E1E1E] leading-[0.88] mb-6"
          style={{ fontSize: 'clamp(56px, 9vw, 120px)' }}>
          GUIDE
        </h1>
        <p className="font-korean text-[#1E1E1E]/60 text-base leading-relaxed max-w-lg">
          예약부터 체크아웃까지, 투리버 이용에 필요한 모든 정보를 안내합니다.
        </p>
      </section>

      {/* Guide cards */}
      <section className="px-6 lg:px-10 pb-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#1E1E1E]/10">
          {guides.map((g, i) => (
            <Link
              key={g.href}
              to={g.href}
              className={`group flex flex-col justify-between p-8 lg:p-10 border-[#1E1E1E]/10 hover:bg-[#1E1E1E] transition-colors duration-300 ${
                i % 3 !== 2 ? 'lg:border-r' : ''
              } ${i < 3 ? 'border-b' : ''}`}
            >
              <div>
                <span
                  className="inline-block font-display font-bold text-[10px] tracking-widest text-[#1E1E1E] px-2 py-1 mb-6 group-hover:text-[#1E1E1E] transition-colors"
                  style={{ backgroundColor: g.color }}
                >
                  {g.en}
                </span>
                <h2 className="font-korean font-bold text-2xl lg:text-3xl text-[#1E1E1E] group-hover:text-white transition-colors mb-3">
                  {g.label}
                </h2>
                <p className="font-korean text-[#1E1E1E]/50 group-hover:text-white/50 transition-colors text-sm">
                  {g.desc}
                </p>
              </div>
              <div className="mt-8 font-display font-bold text-[11px] tracking-widest text-[#1E1E1E]/30 group-hover:text-white/30 transition-colors">
                VIEW →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Emergency info */}
      <section className="bg-[#3D1F52] py-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <div className="font-display font-bold text-[10px] tracking-widest text-[#C2B0E8] mb-3">RESERVATION</div>
              <div className="font-display font-black text-white text-2xl mb-1">예약 문의</div>
              <div className="font-korean text-white/50 text-sm">[예약 연락처 입력]</div>
            </div>
            <div>
              <div className="font-display font-bold text-[10px] tracking-widest text-[#C2B0E8] mb-3">CHECK-IN</div>
              <div className="font-display font-black text-white text-2xl mb-1">체크인</div>
              <div className="font-korean text-white/50 text-sm">[체크인 시간 입력]</div>
            </div>
            <div>
              <div className="font-display font-bold text-[10px] tracking-widest text-[#C2B0E8] mb-3">CHECK-OUT</div>
              <div className="font-display font-black text-white text-2xl mb-1">체크아웃</div>
              <div className="font-korean text-white/50 text-sm">[체크아웃 시간 입력]</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
