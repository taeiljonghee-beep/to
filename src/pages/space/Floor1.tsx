import { Link } from 'react-router-dom';
import PhotoPlaceholder from '../../components/PhotoPlaceholder';

const spaces = [
  {
    label: 'JUNGLE GYM',
    kor: '대형 정글짐',
    desc: '1층과 2층을 잇는 초대형 정글짐. 슬라이드, 클라이밍, 터널을 타고 오르내리며 두 층을 자유롭게 오갈 수 있습니다.',
    color: '#F0D94A',
  },
  {
    label: 'INDOOR POOL',
    kor: '실내 수영장',
    desc: '독채 전용 프라이빗 실내 수영장. 연중 운영되며 완전한 프라이버시를 보장합니다.',
    color: '#85C4DC',
  },
  {
    label: 'BBQ AREA',
    kor: '바베큐장',
    desc: '날씨에 상관없이 즐길 수 있는 실내 바베큐 공간. 그릴 장비와 기본 도구가 준비되어 있습니다.',
    color: '#EF8C72',
  },
  {
    label: 'KARAOKE',
    kor: '노래방',
    desc: '가족 모두가 즐길 수 있는 노래방 시스템. 최신 곡부터 동요까지 함께 즐겨보세요.',
    color: '#C2B0E8',
  },
  {
    label: 'LIVING ROOM',
    kor: '거실',
    desc: '온 가족이 모여 쉬어가는 넓은 거실 공간.',
    color: '#8ECFC0',
  },
];

export default function Floor1() {
  return (
    <main className="pt-16 bg-[#F9F8F4]">
      {/* Hero */}
      <section className="bg-[#FBF6D0] pt-16 lg:pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-start gap-6 mb-8">
            <Link to="/space" className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 hover:text-[#1E1E1E] mt-2">
              ← SPACE
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6">
            <div className="lg:col-span-8">
              <div className="flex items-end gap-4 mb-4">
                <span className="font-display font-black text-[#F0D94A] leading-none"
                  style={{ fontSize: 'clamp(100px, 18vw, 220px)' }}>
                  1F
                </span>
                <div className="pb-4">
                  <div className="font-display font-black text-3xl lg:text-5xl text-[#1E1E1E]">PLAY</div>
                  <div className="font-korean text-[#1E1E1E]/50 text-sm mt-1">플레이 플로어</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pb-6">
              <p className="font-korean text-[#1E1E1E]/70 text-sm lg:text-base leading-relaxed">
                1층은 바베큐장·수영장·거실·노래방이 모인 플레이 플로어입니다. 초대형 정글짐이 2층 키즈룸까지 이어져, 아래위를 오가며 놀 수 있어요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 max-w-[1400px] mx-auto flex flex-col gap-20">
        {spaces.map((space, i) => (
          <div
            key={space.label}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              i % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''
            }`}
          >
            <div className="relative">
              <PhotoPlaceholder label={space.kor} color={space.color} className="w-full h-64 lg:h-[420px]" />
              <div
                className="absolute bottom-4 left-4 font-display font-bold text-[10px] tracking-widest text-[#1E1E1E] px-2 py-1"
                style={{ backgroundColor: space.color }}
              >
                {space.label}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div
                className="w-10 h-1"
                style={{ backgroundColor: space.color }}
              />
              <h2 className="font-display font-black text-4xl lg:text-6xl text-[#1E1E1E] leading-tight">
                {space.label.split(' ')[0]}<br />
                {space.label.split(' ').slice(1).join(' ')}
              </h2>
              <h3 className="font-korean font-medium text-[#1E1E1E]/50 text-base">
                {space.kor}
              </h3>
              <p className="font-korean text-[#1E1E1E]/70 text-sm leading-relaxed">
                {space.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Floor nav */}
      <section className="bg-[#1E1E1E] py-12 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="font-display font-black text-white text-2xl">
            <span className="text-[#F0D94A]">1F</span> PLAY
          </div>
          <div className="flex gap-4">
            <Link to="/space/2f" className="font-display font-bold text-[11px] tracking-widest text-white/50 hover:text-white transition-colors">
              2F MOVE →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
