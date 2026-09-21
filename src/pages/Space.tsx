import { Link } from 'react-router-dom';
import PhotoPlaceholder from '../components/PhotoPlaceholder';

const floors = [
  {
    num: '01',
    floor: '1F',
    label: 'PLAY',
    kor: '플레이',
    desc: '바베큐장 · 실내 수영장 · 거실 · 노래방(카라오케) — 대형 정글짐이 2층까지 이어집니다.',
    color: '#F0D94A',
    bg: '#FBF6D0',
    href: '/space/1f',
  },
  {
    num: '02',
    floor: '2F',
    label: 'CLIMB',
    kor: '키즈룸',
    desc: '오락기 · 우주 LED 조명 · 클라이밍 월 · 테이블축구 · 스크린 게임을 갖춘 대형 키즈룸 한 층.',
    color: '#EF8C72',
    bg: '#FDE8E1',
    href: '/space/2f',
  },
  {
    num: '03',
    floor: '3F',
    label: 'REST',
    kor: '레스트',
    desc: '침실 · 거실 · 테라스 · 사우나 / 편백 찜질방 — 어른들을 위한 휴식 층.',
    color: '#C2B0E8',
    bg: '#EDE8F8',
    href: '/space/3f',
  },
];

export default function Space() {
  return (
    <main className="pt-16 bg-[#F9F8F4]">
      {/* Hero */}
      <section className="pt-16 lg:pt-24 pb-16 lg:pb-20 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 mb-4">
              SPACE / 공간 소개
            </p>
            <h1 className="font-display font-black text-[#1E1E1E] leading-[0.88]"
              style={{ fontSize: 'clamp(60px, 10vw, 140px)' }}>
              SPACE
            </h1>
            <p className="font-display font-bold text-xl lg:text-2xl text-[#3D1F52] mt-4 tracking-wider">
              THREE FLOORS. ONE PRIVATE STAY.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <p className="font-korean text-[#1E1E1E]/60 text-sm lg:text-base leading-relaxed">
              투리버는 3개 층으로 구성된 독채 키즈풀빌라입니다. 1층과 2층은 하나의 대형 정글짐으로 이어져 오르내리며 놀 수 있고, 3층은 어른들을 위한 온전한 휴식 공간입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Floor nav */}
      <section className="border-t border-b border-[#1E1E1E]/10 bg-[#F9F8F4]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-3">
          {floors.map((f) => (
            <Link
              key={f.num}
              to={f.href}
              className="group flex flex-col items-center justify-center py-6 lg:py-10 border-r border-[#1E1E1E]/10 last:border-r-0 hover:bg-[#1E1E1E] transition-colors duration-200"
            >
              <span className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/30 group-hover:text-white/30 transition-colors mb-1">
                {f.num}
              </span>
              <span
                className="font-display font-black text-2xl lg:text-4xl"
                style={{ color: f.color }}
              >
                {f.floor}
              </span>
              <span className="font-display font-bold text-[11px] tracking-widest text-[#1E1E1E]/50 group-hover:text-white/50 transition-colors mt-1">
                {f.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Floor cards */}
      <section className="py-20 lg:py-32 px-6 lg:px-10 max-w-[1400px] mx-auto flex flex-col gap-16 lg:gap-24">
        {floors.map((floor, i) => (
          <div key={floor.num}>
          {i === 1 && (
            <div className="flex items-center gap-3 mb-16 lg:mb-24 -mt-8 lg:-mt-16">
              <span className="text-lg leading-none">🧗</span>
              <span className="font-korean text-xs font-medium text-[#1E1E1E]/50">
                1F ↔ 2F, 대형 정글짐 하나로 연결되는 구조예요
              </span>
            </div>
          )}
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              i % 2 === 1 ? 'lg:[direction:rtl]' : ''
            }`}
          >
            {/* Image */}
            <div
              className="lg:col-span-7 relative overflow-hidden"
              style={{ direction: 'ltr' }}
            >
              <div
                className="absolute top-4 left-4 z-10 font-display font-black text-6xl lg:text-8xl opacity-20 pointer-events-none"
                style={{ color: floor.color }}
              >
                {floor.floor}
              </div>
              <PhotoPlaceholder
                label={`${floor.floor} ${floor.label} 공간 전경`}
                color={floor.color}
                className="w-full h-72 lg:h-[440px]"
              />
            </div>
            {/* Text */}
            <div
              className="lg:col-span-5 flex flex-col gap-4"
              style={{ direction: 'ltr' }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="font-display font-black text-5xl lg:text-7xl"
                  style={{ color: floor.color }}
                >
                  {floor.floor}
                </span>
                <div>
                  <div className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/30">
                    {floor.num}
                  </div>
                  <div className="font-display font-black text-2xl text-[#1E1E1E]">
                    {floor.label}
                  </div>
                  <div className="font-korean text-xs text-[#1E1E1E]/40 mt-0.5">
                    {floor.kor}
                  </div>
                </div>
              </div>
              <div
                className="h-px"
                style={{ backgroundColor: floor.color }}
              />
              <p className="font-korean text-[#1E1E1E]/70 text-sm leading-relaxed">
                {floor.desc}
              </p>
              <Link
                to={floor.href}
                className="inline-flex items-center gap-2 font-display font-bold text-[11px] tracking-widest self-start mt-4 group"
                style={{ color: '#1E1E1E' }}
              >
                <span
                  className="inline-block w-8 h-8 flex items-center justify-center text-[#1E1E1E]"
                  style={{ backgroundColor: floor.color }}
                >
                  →
                </span>
                {floor.floor} EXPLORE
              </Link>
            </div>
          </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1E1E1E] py-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-black text-white text-4xl lg:text-6xl leading-none">
              READY TO<br />
              <span className="text-[#F0D94A]">EXPLORE?</span>
            </h2>
          </div>
          <Link
            to="/reservation"
            className="bg-[#F0D94A] text-[#1E1E1E] font-bold text-[13px] tracking-widest px-10 py-5 hover:bg-[#F7EE9A] transition-colors whitespace-nowrap"
          >
            예약하기
          </Link>
        </div>
      </section>
    </main>
  );
}
