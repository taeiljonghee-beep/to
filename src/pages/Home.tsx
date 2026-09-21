import { Link } from 'react-router-dom';
import PhotoPlaceholder from '../components/PhotoPlaceholder';

const FLOOR_DATA = [
  {
    num: '01',
    floor: '1F',
    label: 'PLAY',
    desc: '바베큐장 · 실내 수영장 · 거실 · 노래방(카라오케)',
    color: '#F0D94A',
    bg: '#FBF6D0',
    href: '/space/1f',
  },
  {
    num: '02',
    floor: '2F',
    label: 'CLIMB',
    desc: '오락기 · 우주 LED 조명 · 클라이밍 월 · 테이블축구 · 스크린 게임',
    color: '#EF8C72',
    bg: '#FDE8E1',
    href: '/space/2f',
  },
  {
    num: '03',
    floor: '3F',
    label: 'REST',
    desc: '침실 · 거실 · 테라스 · 사우나 / 편백 찜질방',
    color: '#C2B0E8',
    bg: '#EDE8F8',
    href: '/space/3f',
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] flex items-end bg-[#1E1E1E]">
        <PhotoPlaceholder
          label="투리버 전경 (외관/야경 컷)"
          color="#C2B0E8"
          dark
          className="absolute inset-0 w-full h-full opacity-90"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E]/30 to-transparent" />

        {/* Small labels top right */}
        <div className="absolute top-24 right-6 lg:right-10 flex flex-col gap-2 items-end">
          {['KIDS SPACE', 'POOL', 'PLAY', 'STAY'].map((tag, i) => (
            <span
              key={tag}
              className="font-display font-bold text-[10px] tracking-widest px-2.5 py-1"
              style={{
                background: ['#F0D94A', '#C2B0E8', '#EF8C72', '#8ECFC0'][i],
                color: '#1E1E1E',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hero text */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 lg:pb-24 w-full">
          <div className="max-w-3xl">
            <p className="font-display font-bold text-[11px] tracking-widest text-[#C2B0E8] mb-4">
              투리버 / PRIVATE KIDS POOL VILLA
            </p>
            <h1 className="font-display font-black text-white leading-[0.9] mb-6"
              style={{ fontSize: 'clamp(56px, 10vw, 130px)' }}>
              PLAY BIG.<br />
              STAY<br />
              TOGETHER.
            </h1>
            <p className="font-korean text-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-md">
              놀이는 풍부하게, 공간은 섬세하게.<br />
              아이들과 함께하는 모든 순간을 위한 공간.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/reservation"
                className="bg-[#F0D94A] text-[#1E1E1E] font-bold text-[12px] tracking-widest px-8 py-4 hover:bg-[#F7EE9A] transition-colors"
              >
                예약하기
              </Link>
              <Link
                to="/space"
                className="border border-white/40 text-white font-bold text-[12px] tracking-widest px-8 py-4 hover:bg-white/10 transition-colors"
              >
                EXPLORE SPACE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND KEYWORDS */}
      <section className="bg-[#F9F8F4] py-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#1E1E1E]/10">
            {[
              { word: 'KIDS', sub: '키즈 공간', color: '#F0D94A', hover: 'hover:bg-[#EF8C72]', href: '/kids-space' },
              { word: 'POOL', sub: '실내 수영장', color: '#85C4DC', hover: 'hover:bg-[#F0D94A]', href: '/pool-play' },
              { word: 'PLAY', sub: '놀이 & 엔터테인먼트', color: '#EF8C72', hover: 'hover:bg-[#8ECFC0]', href: '/pool-play' },
              { word: 'STAY', sub: '편안한 숙박', color: '#C2B0E8', hover: 'hover:bg-[#85C4DC]', href: '/stay' },
            ].map((item) => (
              <Link
                key={item.word}
                to={item.href}
                className={`group flex flex-col items-start justify-between p-8 lg:p-12 border-r border-[#1E1E1E]/10 last:border-r-0 ${item.hover} transition-colors duration-300 cursor-pointer`}
              >
                <span
                  className="font-display font-black leading-none"
                  style={{ fontSize: 'clamp(40px, 5vw, 80px)', color: item.color }}
                >
                  {item.word}
                </span>
                <span className="font-korean text-[11px] text-[#1E1E1E]/50 group-hover:text-[#1E1E1E]/70 transition-colors duration-300 mt-8 tracking-wide">
                  {item.sub} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THREE FLOORS */}
      <section className="bg-[#F9F8F4] py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
            <div>
              <p className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 mb-3">
                01 — SPACE
              </p>
              <h2 className="font-display font-black leading-none"
                style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}>
                THREE<br />FLOORS.
              </h2>
            </div>
            <div className="lg:max-w-xs mt-6 lg:mt-0 lg:self-end">
              <p className="font-korean text-[#1E1E1E]/60 text-sm lg:text-base leading-relaxed">
                3개 층, 하나의 독채 빌라.<br />1층과 2층은 하나의 대형 정글짐으로 이어집니다.
              </p>
              <Link
                to="/space"
                className="inline-block mt-4 font-display font-bold text-[11px] tracking-widest text-[#3D1F52] border-b-2 border-[#3D1F52] pb-0.5 hover:text-[#5A3470] transition-colors"
              >
                SPACE OVERVIEW →
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-0">
            {FLOOR_DATA.map((floor, i) => (
              <div key={floor.num}>
              {i === 1 && (
                <div className="flex items-center gap-3 py-3 px-2">
                  <span className="text-base leading-none">🧗</span>
                  <span className="font-korean text-[11px] font-medium text-[#1E1E1E]/50">
                    1F ↔ 2F, 대형 정글짐 하나로 연결되어 오르내리며 놀 수 있어요
                  </span>
                </div>
              )}
              <Link
                to={floor.href}
                className="group flex flex-col lg:flex-row items-stretch border border-[#1E1E1E]/10 hover:border-[#1E1E1E]/30 transition-all duration-300 overflow-hidden"
              >
                {/* Number block */}
                <div
                  className="w-full lg:w-32 flex items-center justify-center py-6 lg:py-0 shrink-0"
                  style={{ backgroundColor: floor.color }}
                >
                  <div className="text-center">
                    <div className="font-display font-black text-[#1E1E1E]/30 text-5xl leading-none">
                      {floor.num}
                    </div>
                    <div className="font-display font-black text-[#1E1E1E] text-2xl tracking-widest">
                      {floor.floor}
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div
                  className="flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:p-10 gap-4"
                  style={{ backgroundColor: floor.bg }}
                >
                  <div>
                    <div className="font-display font-black text-3xl lg:text-5xl text-[#1E1E1E] mb-2">
                      {floor.label}
                    </div>
                    <div className="font-korean text-[#1E1E1E]/60 text-sm">{floor.desc}</div>
                  </div>
                  <div className="font-display font-bold text-[11px] tracking-widest text-[#1E1E1E]/40 group-hover:text-[#1E1E1E] transition-colors shrink-0">
                    VIEW →
                  </div>
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KIDS SPACE — FULL EDITORIAL */}
      <section className="bg-[#1E1E1E] py-20 lg:py-0 lg:min-h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-6 lg:px-16 lg:w-[44%] py-16 lg:py-24">
          <p className="font-display font-bold text-[10px] tracking-widest text-[#C2B0E8] mb-4">
            02 — KIDS SPACE
          </p>
          <h2 className="font-display font-black leading-[0.88] text-white mb-6"
            style={{ fontSize: 'clamp(56px, 7vw, 110px)' }}>
            KIDS<br />
            <span style={{ color: '#F0D94A' }}>SPACE.</span><br />
            PLAY<br />
            ALL DAY.
          </h2>
          <p className="font-korean text-white/50 text-sm lg:text-base leading-relaxed max-w-sm mb-10">
            대형 정글짐, 컬러풀한 클라이밍 월, 다양한 키즈 엔터테인먼트 공간까지.<br />
            아이들이 하루 종일 놀 수 있는 모든 것이 갖춰져 있습니다.
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {['정글짐', '클라이밍 월', '볼풀', '키즈 미디어', '실내 놀이터'].map((tag) => (
              <span
                key={tag}
                className="font-korean text-[11px] font-medium text-[#1E1E1E] px-3 py-1.5"
                style={{ backgroundColor: '#F0D94A' }}
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            to="/kids-space"
            className="inline-flex items-center gap-3 bg-[#F0D94A] text-[#1E1E1E] font-bold text-[12px] tracking-widest px-8 py-4 hover:bg-[#F7EE9A] transition-colors self-start"
          >
            KIDS SPACE VIEW MORE
          </Link>
        </div>

        {/* Right: images */}
        <div className="lg:w-[56%] grid grid-rows-2 gap-0">
          <PhotoPlaceholder label="대형 키즈룸 전경" color="#F0D94A" dark className="w-full h-64 lg:h-full" />
          <div className="relative">
            <PhotoPlaceholder label="1F·2F 연결 정글짐" color="#EF8C72" dark className="w-full h-64 lg:h-full" />
            <div className="absolute top-3 left-3 bg-[#EF8C72] font-display font-bold text-[10px] tracking-widest text-[#1E1E1E] px-2 py-1">
              JUNGLE GYM
            </div>
          </div>
        </div>
      </section>

      {/* POOL */}
      <section className="relative py-20 lg:py-0 lg:min-h-[80vh] flex items-center bg-[#85C4DC]">
        <PhotoPlaceholder
          label="실내 수영장 전경"
          color="#1E1E1E"
          bg="transparent"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-[#85C4DC]/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl">
            <p className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/50 mb-4">
              03 — POOL & PLAY
            </p>
            <h2 className="font-display font-black leading-[0.88] text-[#1E1E1E] mb-6"
              style={{ fontSize: 'clamp(56px, 9vw, 130px)' }}>
              SWIM.<br />
              SPLASH.<br />
              REPEAT.
            </h2>
            <p className="font-korean text-[#1E1E1E]/70 text-base leading-relaxed mb-10 max-w-md">
              프라이빗 실내 수영장에서 계절에 상관없이 물놀이를 즐기세요. 독채 전용으로 운영되어 완전한 프라이버시가 보장됩니다.
            </p>
            <Link
              to="/pool-play"
              className="inline-block bg-[#1E1E1E] text-white font-bold text-[12px] tracking-widest px-8 py-4 hover:bg-[#3D1F52] transition-colors"
            >
              POOL & PLAY →
            </Link>
          </div>
        </div>
      </section>

      {/* STAY */}
      <section className="bg-[#EDE8F8] py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="font-display font-bold text-[10px] tracking-widest text-[#3D1F52]/50 mb-3">
                04 — STAY
              </p>
              <h2 className="font-display font-black leading-[0.9] text-[#3D1F52] mb-6"
                style={{ fontSize: 'clamp(48px, 6vw, 90px)' }}>
                REST<br />WELL.
              </h2>
              <p className="font-korean text-[#3D1F52]/70 text-sm lg:text-base leading-relaxed mb-8">
                아이들이 신나게 노는 동안, 부모님도 충분히 쉴 수 있는 공간. 정성스럽게 선별한 침구와 주방 용품, 편안한 거실까지 — 함께하는 모든 순간을 위해 준비되었습니다.
              </p>
              <Link
                to="/stay"
                className="inline-block font-display font-bold text-[12px] tracking-widest text-[#3D1F52] border-b-2 border-[#3D1F52] pb-0.5 hover:text-[#5A3470] transition-colors self-start"
              >
                STAY VIEW MORE →
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-3">
              <PhotoPlaceholder label="침실 전경" color="#C2B0E8" className="col-span-2 h-56 lg:h-64" />
              <PhotoPlaceholder label="주방" color="#C2B0E8" className="h-40 lg:h-48" />
              <div className="bg-[#C2B0E8] flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="font-display font-black text-4xl text-white mb-2">COMFORT</div>
                  <div className="font-korean text-[11px] text-white/70 tracking-wide">가족을 위한 편안함</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL — color detail cards */}
      <section className="bg-[#F9F8F4] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-80 shrink-0">
              <p className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/30 mb-3">
                COLOR DETAILS
              </p>
              <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight text-[#1E1E1E]">
                작은 선택까지<br />투리버답게.
              </h2>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: '테이블웨어', sub: '컬러 식기 디테일', color: '#F0D94A' },
                { label: '키친 디테일', sub: '선별한 주방 소품', color: '#EF8C72' },
                { label: '인테리어 오브제', sub: '공간의 컬러 포인트', color: '#8ECFC0' },
              ].map((d) => (
                <div
                  key={d.label}
                  className="relative overflow-hidden aspect-[4/5]"
                  style={{ background: `linear-gradient(160deg, ${d.color}30, ${d.color})` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                    <span className="font-display font-black text-white/25 leading-none whitespace-nowrap" style={{ fontSize: '110px' }}>
                      TO
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <div className="font-display font-bold text-[9px] tracking-widest text-[#1E1E1E]/50 mb-1.5">
                      PHOTO
                    </div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-korean font-bold text-base text-[#1E1E1E]">{d.label}</span>
                      <span className="font-korean text-[11px] text-[#1E1E1E]/50 whitespace-nowrap">{d.sub}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden min-h-[440px] flex items-center bg-[#F0D94A] py-24">
        {/* decorative color blocks */}
        <div className="absolute -right-4 top-8 w-24 h-24 lg:w-32 lg:h-32 bg-[#C2B0E8] rotate-12" />
        <div className="absolute right-20 lg:right-40 -bottom-8 w-28 h-28 lg:w-36 lg:h-36 bg-[#EF8C72] -rotate-6" />
        <div className="absolute right-64 lg:right-96 bottom-6 w-16 h-16 bg-[#8ECFC0] rotate-45 hidden lg:block" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <p className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/50 mb-4">
            READY TO PLAY?
          </p>
          <h2 className="font-display font-black text-[#1E1E1E] leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}>
            투리버에서,<br />오늘의 놀이를 시작해보세요.
          </h2>
          <Link
            to="/reservation"
            className="inline-flex items-center gap-2 bg-[#1E1E1E] text-white font-bold text-[13px] tracking-widest px-10 py-5 hover:bg-[#3D1F52] transition-colors"
          >
            예약하기 →
          </Link>
          <p className="font-korean text-[11px] text-[#1E1E1E]/50 mt-3">
            실제 예약 링크가 연결되면 요금과 잔여 객실을 확인할 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
