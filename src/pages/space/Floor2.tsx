import { Link } from 'react-router-dom';
import PhotoPlaceholder from '../../components/PhotoPlaceholder';

const spaces = [
  {
    label: 'KIDS ROOM',
    kor: '메인 키즈룸',
    desc: '오락기 2대, LED 우주 조명, 빔프로젝터 터치스크린 게임까지 — 2층 전체를 채우는 대형 키즈 전용 공간입니다.',
    color: '#EF8C72',
  },
  {
    label: 'CLIMBING WALL',
    kor: '키즈 클라이밍 월',
    desc: '알록달록한 홀드로 채운 실내 클라이밍 월. 손을 뻗어 오르내리며 체력과 도전 정신을 키워요.',
    color: '#F0D94A',
  },
  {
    label: 'GAME ZONE',
    kor: '테이블축구 & 소파',
    desc: '테이블축구와 편히 쉬는 소파까지 갖춘 놀이 코너. 신나게 놀다 잠깐 쉬어가기도 좋아요.',
    color: '#8ECFC0',
  },
  {
    label: 'JUNGLE GYM LINK',
    kor: '1층과 연결되는 정글짐',
    desc: '초대형 정글짐을 타고 오르내리면 1층 플레이 플로어와 곧장 이어집니다.',
    color: '#C2B0E8',
  },
];

export default function Floor2() {
  return (
    <main className="pt-16 bg-[#F9F8F4]">
      <section className="bg-[#FDE8E1] pt-16 lg:pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-start gap-6 mb-8">
            <Link to="/space" className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 hover:text-[#1E1E1E] mt-2">
              ← SPACE
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6">
            <div className="lg:col-span-8">
              <div className="flex items-end gap-4 mb-4">
                <span className="font-display font-black text-[#EF8C72] leading-none"
                  style={{ fontSize: 'clamp(100px, 18vw, 220px)' }}>
                  2F
                </span>
                <div className="pb-4">
                  <div className="font-display font-black text-3xl lg:text-5xl text-[#1E1E1E]">CLIMB</div>
                  <div className="font-korean text-[#1E1E1E]/50 text-sm mt-1">키즈룸 플로어</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pb-6">
              <p className="font-korean text-[#1E1E1E]/70 text-sm lg:text-base leading-relaxed">
                2층은 오락기, 우주 조명, 클라이밍 월, 테이블축구까지 갖춘 대형 키즈룸 한 층입니다. 초대형 정글짐을 타고 오르내리면 1층과 곧장 이어져요.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              <div className="w-10 h-1" style={{ backgroundColor: space.color }} />
              <h2 className="font-display font-black text-4xl lg:text-6xl text-[#1E1E1E] leading-tight">
                {space.label}
              </h2>
              <h3 className="font-korean font-medium text-[#1E1E1E]/50">{space.kor}</h3>
              <p className="font-korean text-[#1E1E1E]/70 text-sm leading-relaxed">{space.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#1E1E1E] py-12 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link to="/space/1f" className="font-display font-bold text-[11px] tracking-widest text-white/50 hover:text-white transition-colors">
            ← 1F PLAY
          </Link>
          <div className="font-display font-black text-white text-2xl">
            <span className="text-[#EF8C72]">2F</span> CLIMB
          </div>
          <Link to="/space/3f" className="font-display font-bold text-[11px] tracking-widest text-white/50 hover:text-white transition-colors">
            3F REST →
          </Link>
        </div>
      </section>
    </main>
  );
}
