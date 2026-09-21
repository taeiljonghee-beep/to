import { Link } from 'react-router-dom';
import PhotoPlaceholder from '../components/PhotoPlaceholder';

const zones = [
  {
    num: '01',
    label: 'MOVE',
    kor: '움직이다',
    title: '대형 정글짐',
    desc: '3개 층을 연결하는 초대형 정글짐. 슬라이드, 네트 클라이밍, 터널, 볼풀까지 다양한 놀이 요소가 하나의 구조물에 담겨 있습니다. 아이들은 이곳에서 하루 종일 뛰고, 미끄러지고, 탐험합니다.',
    color: '#F0D94A',
    bg: '#FBF6D0',
    tags: ['정글짐', '슬라이드', '볼풀', '네트 클라이밍'],
  },
  {
    num: '02',
    label: 'CLIMB',
    kor: '오르다',
    title: '컬러풀 클라이밍 월',
    desc: '다양한 색상의 클라이밍 홀드가 가득한 인도어 클라이밍 월. 각기 다른 난이도의 루트로 아이들이 도전 의식을 키울 수 있습니다. 컬러풀한 홀드의 색감 자체가 하나의 예술 작품처럼 보입니다.',
    color: '#EF8C72',
    bg: '#FDE8E1',
    tags: ['클라이밍', '실내 암벽', '도전', '체력 발달'],
  },
  {
    num: '03',
    label: 'PLAY',
    kor: '놀다',
    title: '다양한 놀이 공간',
    desc: '보드게임, 장난감, 레고, 미니 키친 등 다양한 놀이 도구가 마련된 공간. 날씨나 시간에 관계없이 아이들이 창의적으로 놀 수 있는 환경을 제공합니다.',
    color: '#8ECFC0',
    bg: '#E2F5F1',
    tags: ['보드게임', '장난감', '레고', '미니 키친'],
  },
  {
    num: '04',
    label: 'DISCOVER',
    kor: '탐험하다',
    title: '어린이 엔터테인먼트',
    desc: '카라오케, 미디어 시스템, 다양한 어린이 콘텐츠를 즐길 수 있는 엔터테인먼트 공간. 온 가족이 함께 즐길 수 있는 경험을 제공합니다.',
    color: '#C2B0E8',
    bg: '#EDE8F8',
    tags: ['카라오케', '미디어', '어린이 콘텐츠', '가족'],
  },
];

export default function KidsSpace() {
  return (
    <main className="pt-16 bg-[#1E1E1E]">
      {/* HERO */}
      <section className="pt-16 lg:pt-20 pb-16 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="font-display font-bold text-[10px] tracking-widest text-[#C2B0E8] mb-4">
              KIDS SPACE / 키즈 공간
            </p>
            <h1 className="font-display font-black text-white leading-[0.88]"
              style={{ fontSize: 'clamp(60px, 10vw, 130px)' }}>
              KIDS<br />
              <span className="text-[#F0D94A]">SPACE.</span>
            </h1>
            <p className="font-display font-bold text-2xl lg:text-3xl text-white/50 mt-4 tracking-wider">
              PLAY ALL DAY.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <p className="font-korean text-white/60 text-sm lg:text-base leading-relaxed">
              아이들이 정말 좋아할 것 같은 공간 — 그것이 투리버 키즈 공간의 첫인상입니다. 대형 정글짐부터 컬러풀한 클라이밍 월, 다양한 엔터테인먼트 공간까지, 아이들의 하루는 여기서 시작해서 여기서 끝납니다.
            </p>
          </div>
        </div>
      </section>

      {/* Zones */}
      {zones.map((zone, i) => (
        <section
          key={zone.num}
          className="border-t border-white/10"
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image side */}
              <div
                className={`relative order-1 ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <PhotoPlaceholder
                  label={zone.title}
                  color={zone.color}
                  dark
                  className="w-full h-64 lg:h-[500px]"
                />
                <div
                  className="absolute top-6 left-6 font-display font-black text-8xl lg:text-[160px] leading-none opacity-20"
                  style={{ color: zone.color }}
                >
                  {zone.num}
                </div>
              </div>

              {/* Content side */}
              <div
                className={`flex flex-col justify-center px-0 lg:px-16 py-12 lg:py-20 order-2 ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                style={{ backgroundColor: zone.bg }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40"
                  >
                    {zone.num} /
                  </span>
                  <span
                    className="font-display font-black text-4xl lg:text-6xl leading-none"
                    style={{ color: zone.color }}
                  >
                    {zone.label}
                  </span>
                  <span className="font-korean text-[#1E1E1E]/40 text-sm">
                    {zone.kor}
                  </span>
                </div>
                <h2 className="font-display font-black text-3xl lg:text-5xl text-[#1E1E1E] mb-4 leading-tight">
                  {zone.title}
                </h2>
                <p className="font-korean text-[#1E1E1E]/70 text-sm leading-relaxed mb-6 max-w-sm">
                  {zone.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {zone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-korean text-[11px] font-medium text-[#1E1E1E] px-3 py-1.5"
                      style={{ backgroundColor: zone.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#F0D94A] py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-black text-4xl lg:text-7xl text-[#1E1E1E] leading-none">
              READY<br />TO PLAY?
            </h2>
            <p className="font-korean text-[#1E1E1E]/60 text-sm mt-4">
              지금 예약하고 아이들에게 최고의 선물을 주세요.
            </p>
          </div>
          <Link
            to="/reservation"
            className="bg-[#1E1E1E] text-[#F0D94A] font-bold text-[13px] tracking-widest px-10 py-5 hover:bg-[#3D1F52] transition-colors whitespace-nowrap"
          >
            예약하기
          </Link>
        </div>
      </section>
    </main>
  );
}
