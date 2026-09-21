import { Link } from 'react-router-dom';
import PhotoPlaceholder from '../../components/PhotoPlaceholder';

const spaces = [
  {
    label: 'BEDROOM',
    kor: '침실',
    desc: '차분하고 편안한 침실 공간. 고품질 침구와 넉넉한 수납 공간으로 편안한 숙면을 제공합니다.',
    color: '#C2B0E8',
  },
  {
    label: 'LIVING AREA',
    kor: '거실',
    desc: '가족이 함께 모이는 공간. 편안한 소파와 TV, 넓은 공간으로 여유로운 시간을 보낼 수 있습니다.',
    color: '#8ECFC0',
  },
  {
    label: 'TERRACE',
    kor: '테라스',
    desc: '3층에서 즐기는 프라이빗 테라스. 신선한 공기와 함께 여유로운 아침 시간을 보낼 수 있습니다.',
    color: '#F0D94A',
  },
  {
    label: 'SAUNA',
    kor: '사우나 / 찜질방',
    desc: '하루의 놀이를 마치고 몸을 풀어주는 사우나 공간. 어른들을 위한 특별한 휴식의 시간.',
    color: '#EF8C72',
  },
];

export default function Floor3() {
  return (
    <main className="pt-16 bg-[#EDE8F8]">
      <section className="bg-[#EDE8F8] pt-16 lg:pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-start gap-6 mb-8">
            <Link to="/space" className="font-display font-bold text-[10px] tracking-widest text-[#3D1F52]/40 hover:text-[#3D1F52] mt-2">
              ← SPACE
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6">
            <div className="lg:col-span-8">
              <div className="flex items-end gap-4 mb-4">
                <span className="font-display font-black text-[#C2B0E8] leading-none"
                  style={{ fontSize: 'clamp(100px, 18vw, 220px)' }}>
                  3F
                </span>
                <div className="pb-4">
                  <div className="font-display font-black text-3xl lg:text-5xl text-[#3D1F52]">REST</div>
                  <div className="font-korean text-[#3D1F52]/50 text-sm mt-1">레스트 플로어</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pb-6">
              <p className="font-korean text-[#3D1F52]/70 text-sm lg:text-base leading-relaxed">
                3층은 충분한 휴식을 위한 공간입니다. 차분한 분위기의 침실과 테라스, 사우나까지 — 놀이 후 가족 모두가 편안히 쉴 수 있는 레스트 플로어.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-10 max-w-[1400px] mx-auto flex flex-col gap-20 bg-[#F9F8F4]">
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

      <section className="bg-[#3D1F52] py-12 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link to="/space/2f" className="font-display font-bold text-[11px] tracking-widest text-white/50 hover:text-white transition-colors">
            ← 2F MOVE
          </Link>
          <div className="font-display font-black text-white text-2xl">
            <span className="text-[#C2B0E8]">3F</span> REST
          </div>
          <Link to="/reservation" className="font-display font-bold text-[11px] tracking-widest text-[#F0D94A] hover:text-[#F7EE9A] transition-colors">
            예약하기 →
          </Link>
        </div>
      </section>
    </main>
  );
}
