import { Link } from 'react-router-dom';
import PhotoPlaceholder from '../components/PhotoPlaceholder';

const amenities = [
  { label: '침실', icon: '🛏', desc: '편안한 침구와 넉넉한 수납 공간', bg: '#FBF6D0' },
  { label: '욕실', icon: '🚿', desc: '깔끔한 욕실과 어메니티 세트', bg: '#E0F1FA' },
  { label: '주방', icon: '🍳', desc: '완비된 주방 및 컬러풀한 식기 세트', bg: '#FDE8E1' },
  { label: '다이닝', icon: '🍽', desc: '온 가족이 함께하는 넓은 식탁', bg: '#E2F5F1' },
  { label: '세탁', icon: '👕', desc: '세탁기 및 건조기 구비', bg: '#EDE8F8' },
  { label: 'Wi-Fi', icon: '📶', desc: '초고속 인터넷 무선 제공', bg: '#FBF6D0' },
  { label: '주차', icon: '🚗', desc: '전용 주차 공간 제공', bg: '#E0F1FA' },
  { label: '냉난방', icon: '❄️', desc: '개별 냉난방 시스템', bg: '#FDE8E1' },
];

export default function Stay() {
  return (
    <main className="pt-16 bg-[#F9F8F4]">
      {/* Hero */}
      <section className="bg-[#EDE8F8] pt-16 lg:pt-24 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="font-display font-bold text-[10px] tracking-widest text-[#3D1F52]/40 mb-4">
                STAY / 숙박 안내
              </p>
              <h1 className="font-display font-black text-[#3D1F52] leading-[0.88]"
                style={{ fontSize: 'clamp(56px, 9vw, 120px)' }}>
                STAY<br />WELL.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p className="font-korean text-[#3D1F52]/70 text-sm lg:text-base leading-relaxed">
                아이들이 신나게 노는 동안, 부모님도 충분히 쉴 수 있는 공간. 정성스럽게 선별한 침구와 주방 용품, 편안한 거실까지 — 함께하는 모든 순간을 위해 준비되었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main image + bedrooms */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8">
            <PhotoPlaceholder label="침실 전경" color="#C2B0E8" className="w-full h-72 lg:h-[480px]" />
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end gap-4 pb-2">
            <div className="w-10 h-1 bg-[#C2B0E8]" />
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[#1E1E1E]">
              BEDROOM
            </h2>
            <p className="font-korean text-[#1E1E1E]/60 text-sm leading-relaxed">
              고품질 침구와 정성스럽게 선택한 베딩 세트. 아이들과 부모 모두를 위한 편안한 수면 환경을 제공합니다.
            </p>
          </div>
        </div>

        {/* Kitchen + dining */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4 flex flex-col justify-end gap-4 pb-2 order-2 lg:order-1">
            <div className="w-10 h-1 bg-[#8ECFC0]" />
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[#1E1E1E]">
              KITCHEN<br />&amp; DINING
            </h2>
            <p className="font-korean text-[#1E1E1E]/60 text-sm leading-relaxed">
              완비된 주방과 넓은 다이닝 공간. 특별히 선별한 컬러풀한 식기와 주방 용품으로 요리 시간도 즐거운 경험이 됩니다.
            </p>
          </div>
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3">
              <PhotoPlaceholder label="주방" color="#8ECFC0" className="w-full h-48 lg:h-64" />
              <PhotoPlaceholder label="다이닝" color="#8ECFC0" className="w-full h-48 lg:h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities grid */}
      <section className="bg-[#F9F8F4] py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-display font-bold text-[10px] tracking-widest text-[#3D1F52]/50 mb-3">
            — AMENITIES
          </p>
          <h2 className="font-display font-black text-[#1E1E1E] text-5xl lg:text-7xl mb-16 leading-none">
            ALL<br />INCLUDED.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {amenities.map((a) => (
              <div key={a.label} className="p-6 lg:p-8 flex flex-col gap-3" style={{ backgroundColor: a.bg }}>
                <span className="text-2xl">{a.icon}</span>
                <div className="font-display font-black text-xl text-[#1E1E1E]">{a.label}</div>
                <div className="font-korean text-[#1E1E1E]/50 text-sm">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EDE8F8] py-16 lg:py-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-black text-4xl lg:text-6xl text-[#3D1F52] leading-none">
              COMFORT<br />AWAITS.
            </h2>
            <p className="font-korean text-[#3D1F52]/60 text-sm mt-4">
              온 가족을 위한 공간이 준비되어 있습니다.
            </p>
          </div>
          <Link
            to="/reservation"
            className="bg-[#3D1F52] text-white font-bold text-[13px] tracking-widest px-10 py-5 hover:bg-[#5A3470] transition-colors whitespace-nowrap"
          >
            예약하기
          </Link>
        </div>
      </section>
    </main>
  );
}
