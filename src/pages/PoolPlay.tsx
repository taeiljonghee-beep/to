import { Link } from 'react-router-dom';
import PhotoPlaceholder from '../components/PhotoPlaceholder';

const sections = [
  {
    id: 'pool',
    label: 'POOL',
    kor: '실내 수영장',
    headline: 'SWIM.\nSPLASH.\nREPEAT.',
    desc: '독채 전용 프라이빗 실내 수영장. 계절과 날씨에 상관없이 연중 이용 가능하며, 완전한 프라이버시가 보장됩니다. 아이들과 함께 마음껏 물놀이를 즐겨보세요.',
    color: '#85C4DC',
    bg: '#E0F1FA',
    details: ['독채 전용 프라이빗 운영', '연중 운영', '수온 조절 가능', '수영 용품 구비'],
  },
  {
    id: 'bbq',
    label: 'BBQ',
    kor: '실내 바베큐',
    headline: 'GRILL.\nGATHER.\nEAT.',
    desc: '날씨 걱정 없는 실내 바베큐 공간. 그릴 장비와 기본 도구가 완비되어 있으며, 온 가족이 함께하는 바베큐 타임을 즐길 수 있습니다.',
    color: '#EF8C72',
    bg: '#FDE8E1',
    details: ['실내 바베큐 가능', '그릴 장비 구비', '기본 도구 세트 제공', '환기 시설 완비'],
  },
  {
    id: 'karaoke',
    label: 'KARAOKE',
    kor: '카라오케',
    headline: 'SING.\nLAUGH.\nSTAY.',
    desc: '가족 모두가 즐길 수 있는 전문 카라오케 시스템. 최신 노래부터 동요까지, 아이들과 함께하는 노래방 타임.',
    color: '#C2B0E8',
    bg: '#EDE8F8',
    details: ['전문 노래방 시스템', '최신 곡 업데이트', '동요 콘텐츠 포함', '마이크 다수 구비'],
  },
  {
    id: 'relax',
    label: 'RELAX',
    kor: '휴식 공간',
    headline: 'REST.\nRECHARGE.\nENJOY.',
    desc: '놀이 사이 잠깐의 휴식을 위한 편안한 공간. 어른들이 쉬는 동안 아이들의 시야 안에서 모든 것이 이루어집니다.',
    color: '#8ECFC0',
    bg: '#E2F5F1',
    details: ['편안한 라운지 공간', '자연 채광', '어린이 시야 확보 설계', '음료 준비 가능'],
  },
];

export default function PoolPlay() {
  return (
    <main className="pt-16 bg-[#F9F8F4]">
      {/* Hero */}
      <section className="relative bg-[#85C4DC] pt-16 min-h-[60vh] flex items-center overflow-hidden">
        <PhotoPlaceholder
          label="풀 & 플레이 전경"
          color="#1E1E1E"
          bg="transparent"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-[#85C4DC]/70" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/60 mb-4">
            POOL & PLAY / 풀 & 플레이
          </p>
          <h1 className="font-display font-black text-[#1E1E1E] leading-[0.88]"
            style={{ fontSize: 'clamp(56px, 10vw, 130px)' }}>
            POOL<br />&amp; PLAY.
          </h1>
          <p className="font-korean text-[#1E1E1E]/70 text-base leading-relaxed mt-6 max-w-md">
            수영, 바베큐, 카라오케까지 — 투리버에서는 모든 놀이가 한 공간에서 이루어집니다.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="border-b border-[#1E1E1E]/10 sticky top-16 bg-[#F9F8F4] z-30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex overflow-x-auto gap-0">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 px-6 py-4 font-display font-bold text-[11px] tracking-widest text-[#1E1E1E]/50 hover:text-[#1E1E1E] border-b-2 border-transparent hover:border-[#1E1E1E] transition-all"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* Sections */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className="py-20 lg:py-0 border-b border-[#1E1E1E]/10"
        >
          <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image */}
            <div className="lg:w-[55%] relative">
              <PhotoPlaceholder label={s.kor} color={s.color} className="w-full h-64 lg:h-[520px]" />
            </div>
            {/* Content */}
            <div
              className="lg:w-[45%] flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-20"
              style={{ backgroundColor: s.bg }}
            >
              <span
                className="font-display font-bold text-[10px] tracking-widest mb-3"
                style={{ color: s.color }}
              >
                — {s.label}
              </span>
              <h2
                className="font-display font-black leading-[0.9] text-[#1E1E1E] mb-4 whitespace-pre-line"
                style={{ fontSize: 'clamp(40px, 5vw, 70px)' }}
              >
                {s.headline}
              </h2>
              <p className="font-korean text-[#1E1E1E]/70 text-sm leading-relaxed mb-8">
                {s.desc}
              </p>
              <ul className="flex flex-col gap-2">
                {s.details.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 shrink-0"
                      style={{ backgroundColor: s.color }}
                    />
                    <span className="font-korean text-[#1E1E1E]/60 text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#1E1E1E] py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="font-display font-black text-white text-4xl lg:text-6xl leading-none">
            DIVE IN.<br />
            <span className="text-[#85C4DC]">BOOK NOW.</span>
          </h2>
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
