import { Link } from 'react-router-dom';

const directions = [
  {
    method: '자가용',
    icon: '🚗',
    color: '#F0D94A',
    steps: [
      '[네비게이션 주소 입력]',
      '[자가용 이용 시 주의사항 입력]',
      '[주차 안내 입력]',
    ],
  },
  {
    method: '대중교통',
    icon: '🚌',
    color: '#85C4DC',
    steps: [
      '[가장 가까운 역 입력]',
      '[버스 노선 입력]',
      '[택시 이용 시 예상 시간 입력]',
    ],
  },
  {
    method: '주차',
    icon: '🅿️',
    color: '#8ECFC0',
    steps: [
      '[주차 가능 대수 입력]',
      '[주차 위치 안내 입력]',
      '[주차 요금 여부 입력]',
    ],
  },
];

export default function Location() {
  return (
    <main className="pt-16 bg-[#F9F8F4]">
      {/* Hero */}
      <section className="pt-16 lg:pt-24 pb-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <p className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 mb-4">
          LOCATION / 오시는 길
        </p>
        <h1 className="font-display font-black text-[#1E1E1E] leading-[0.88] mb-4"
          style={{ fontSize: 'clamp(60px, 10vw, 130px)' }}>
          LOCATION
        </h1>
        <p className="font-korean text-[#1E1E1E]/60 text-base leading-relaxed max-w-lg">
          투리버 키즈풀빌라 위치 및 오시는 방법 안내.
        </p>
      </section>

      {/* Address block */}
      <section className="bg-[#1E1E1E] py-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="font-display font-bold text-[10px] tracking-widest text-[#C2B0E8] mb-3">ADDRESS</div>
            <div className="font-display font-black text-white text-2xl mb-2">주소</div>
            <div className="font-korean text-white/60 text-sm leading-relaxed">
              [실제 주소를 입력해 주세요]<br />
              [상세 주소 입력]
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-[10px] tracking-widest text-[#C2B0E8] mb-3">CONTACT</div>
            <div className="font-display font-black text-white text-2xl mb-2">연락처</div>
            <div className="font-korean text-white/60 text-sm leading-relaxed">
              [전화번호 입력]<br />
              [카카오톡 채널 등 입력]
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-[10px] tracking-widest text-[#C2B0E8] mb-3">OPERATION</div>
            <div className="font-display font-black text-white text-2xl mb-2">운영 안내</div>
            <div className="font-korean text-white/60 text-sm leading-relaxed">
              체크인: [시간 입력]<br />
              체크아웃: [시간 입력]
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-[#E2F5F1] flex items-center justify-center" style={{ height: '400px' }}>
        <div className="text-center">
          <div className="font-display font-black text-6xl text-[#8ECFC0] mb-4">MAP</div>
          <p className="font-korean text-[#1E1E1E]/50 text-sm">
            [지도 임베드 영역 — 카카오맵 또는 네이버맵 연동]
          </p>
          <a
            href="https://map.kakao.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#1E1E1E] text-white font-display font-bold text-[11px] tracking-widest px-6 py-3 hover:bg-[#3D1F52] transition-colors"
          >
            카카오맵으로 보기
          </a>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <h2 className="font-display font-black text-3xl lg:text-5xl text-[#1E1E1E] mb-12">
          HOW TO<br />GET HERE.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {directions.map((d) => (
            <div key={d.method} className="border border-[#1E1E1E]/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{d.icon}</span>
                <div>
                  <span
                    className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E] px-2 py-1 block mb-1"
                    style={{ backgroundColor: d.color }}
                  >
                    {d.method}
                  </span>
                </div>
              </div>
              <ol className="flex flex-col gap-3">
                {d.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="font-display font-black text-[11px] w-5 h-5 shrink-0 flex items-center justify-center text-[#1E1E1E] mt-0.5"
                      style={{ backgroundColor: d.color }}
                    >
                      {i + 1}
                    </span>
                    <span className="font-korean text-[#1E1E1E]/70 text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F0D94A] py-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-black text-3xl lg:text-5xl text-[#1E1E1E]">
              VISIT US<br />SOON.
            </h2>
          </div>
          <Link
            to="/reservation"
            className="bg-[#1E1E1E] text-[#F0D94A] font-bold text-[13px] tracking-widest px-10 py-5 hover:bg-[#3D1F52] hover:text-white transition-colors"
          >
            예약하기
          </Link>
        </div>
      </section>
    </main>
  );
}
