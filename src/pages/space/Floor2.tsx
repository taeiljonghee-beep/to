import { Link } from 'react-router-dom';
import PhotoPlaceholder from '../../components/PhotoPlaceholder';

const spaces = [
  {
    label: 'CLIMBING WALL',
    kor: '컬러풀 클라이밍 월',
    desc: '다양한 색상의 클라이밍 홀드로 구성된 실내 클라이밍 월. 아이들의 신체 발달과 도전 정신을 키워주는 공간입니다.',
    color: '#EF8C72',
  },
  {
    label: 'FAMILY BEDROOM',
    kor: '가족 침실',
    desc: '온 가족이 함께 사용할 수 있는 넓은 가족 침실. 편안한 침구와 수납 공간이 갖춰져 있습니다.',
    color: '#C2B0E8',
  },
  {
    label: 'ONDOL ROOM',
    kor: '온돌방',
    desc: '한국 전통 바닥 난방 시스템의 온돌방. 아이들이 편안하게 뒹굴며 놀 수 있는 따뜻한 공간.',
    color: '#F0D94A',
  },
  {
    label: 'PLAY ZONE',
    kor: '어린이 활동 공간',
    desc: '다양한 어린이 활동과 엔터테인먼트를 위한 전용 공간. 아이들의 상상력이 펼쳐지는 놀이의 무대.',
    color: '#8ECFC0',
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
                  <div className="font-display font-black text-3xl lg:text-5xl text-[#1E1E1E]">MOVE</div>
                  <div className="font-korean text-[#1E1E1E]/50 text-sm mt-1">무브 플로어</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pb-6">
              <p className="font-korean text-[#1E1E1E]/70 text-sm lg:text-base leading-relaxed">
                2층은 움직임과 활동의 공간입니다. 클라이밍 월에서 도전하고, 온돌방에서 편안히 쉬며, 다양한 놀이 공간에서 아이들의 에너지를 마음껏 발산할 수 있습니다.
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
            <span className="text-[#EF8C72]">2F</span> MOVE
          </div>
          <Link to="/space/3f" className="font-display font-bold text-[11px] tracking-widest text-white/50 hover:text-white transition-colors">
            3F REST →
          </Link>
        </div>
      </section>
    </main>
  );
}
