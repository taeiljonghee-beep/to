import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Reservation() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);

  return (
    <main className="pt-16 bg-[#F9F8F4]">
      {/* Hero bar */}
      <section className="bg-[#3D1F52] pt-16 lg:pt-24 pb-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-display font-bold text-[10px] tracking-widest text-[#C2B0E8] mb-4">
            RESERVATION / 예약하기
          </p>
          <h1 className="font-display font-black text-white leading-[0.88]"
            style={{ fontSize: 'clamp(56px, 9vw, 120px)' }}>
            BOOK<br />
            <span className="text-[#F0D94A]">YOUR<br />STAY.</span>
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-3xl text-[#1E1E1E] mb-8">
              예약 정보 입력
            </h2>

            <div className="flex flex-col gap-6">
              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/50 block mb-2">
                    CHECK-IN
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full border border-[#1E1E1E]/20 bg-white px-4 py-3 font-korean text-sm text-[#1E1E1E] focus:outline-none focus:border-[#3D1F52]"
                  />
                </div>
                <div>
                  <label className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/50 block mb-2">
                    CHECK-OUT
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full border border-[#1E1E1E]/20 bg-white px-4 py-3 font-korean text-sm text-[#1E1E1E] focus:outline-none focus:border-[#3D1F52]"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/50 block mb-2">
                    ADULTS / 어른
                  </label>
                  <div className="flex items-center border border-[#1E1E1E]/20 bg-white">
                    <button
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-12 h-12 flex items-center justify-center text-xl font-bold text-[#1E1E1E]/50 hover:text-[#1E1E1E] hover:bg-[#F9F8F4] transition-colors"
                    >
                      −
                    </button>
                    <span className="flex-1 text-center font-display font-black text-2xl text-[#1E1E1E]">
                      {adults}
                    </span>
                    <button
                      onClick={() => setAdults(adults + 1)}
                      className="w-12 h-12 flex items-center justify-center text-xl font-bold text-[#1E1E1E]/50 hover:text-[#1E1E1E] hover:bg-[#F9F8F4] transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <label className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/50 block mb-2">
                    CHILDREN / 아이
                  </label>
                  <div className="flex items-center border border-[#1E1E1E]/20 bg-white">
                    <button
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-12 h-12 flex items-center justify-center text-xl font-bold text-[#1E1E1E]/50 hover:text-[#1E1E1E] hover:bg-[#F9F8F4] transition-colors"
                    >
                      −
                    </button>
                    <span className="flex-1 text-center font-display font-black text-2xl text-[#1E1E1E]">
                      {children}
                    </span>
                    <button
                      onClick={() => setChildren(children + 1)}
                      className="w-12 h-12 flex items-center justify-center text-xl font-bold text-[#1E1E1E]/50 hover:text-[#1E1E1E] hover:bg-[#F9F8F4] transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Request */}
              <div>
                <label className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/50 block mb-2">
                  SPECIAL REQUEST / 요청사항 (선택)
                </label>
                <textarea
                  rows={4}
                  placeholder="특별 요청사항이 있으시면 입력해 주세요."
                  className="w-full border border-[#1E1E1E]/20 bg-white px-4 py-3 font-korean text-sm text-[#1E1E1E] placeholder-[#1E1E1E]/30 focus:outline-none focus:border-[#3D1F52] resize-none"
                />
              </div>

              {/* System note */}
              <div className="bg-[#EDE8F8] border-l-4 border-[#C2B0E8] p-6">
                <div className="font-display font-black text-sm text-[#3D1F52] mb-2">
                  예약 시스템 연결
                </div>
                <p className="font-korean text-[#3D1F52]/70 text-sm leading-relaxed">
                  [예약 시스템 연결] — 실제 예약은 운영자가 지정한 예약 채널을 통해 진행됩니다. 아래 버튼을 통해 예약 채널로 연결됩니다.
                </p>
              </div>

              <button
                className="bg-[#3D1F52] text-white font-bold text-[13px] tracking-widest py-5 hover:bg-[#5A3470] transition-colors"
              >
                예약 채널로 이동 →
              </button>
            </div>
          </div>

          {/* Summary sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-[#1E1E1E] p-8 sticky top-24">
              <h3 className="font-display font-black text-white text-2xl mb-8">
                TO RIVER<br />
                <span className="text-[#C2B0E8] text-lg font-bold tracking-wider">키즈풀빌라</span>
              </h3>

              <div className="flex flex-col gap-4 mb-8">
                {[
                  { label: '체크인', val: checkIn || '날짜를 선택해 주세요', color: '#F0D94A' },
                  { label: '체크아웃', val: checkOut || '날짜를 선택해 주세요', color: '#F0D94A' },
                  { label: '어른', val: `${adults}명`, color: '#C2B0E8' },
                  { label: '아이', val: `${children}명`, color: '#C2B0E8' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-display font-bold text-[10px] tracking-widest" style={{ color: row.color }}>
                      {row.label}
                    </span>
                    <span className="font-korean text-white/80 text-sm">{row.val}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="flex flex-col gap-3 mb-8">
                {[
                  { icon: '🏊', label: '프라이빗 실내 수영장' },
                  { icon: '🧒', label: '대형 키즈 정글짐' },
                  { icon: '🎤', label: '카라오케' },
                  { icon: '🔥', label: '실내 바베큐' },
                  { icon: '🧗', label: '클라이밍 월' },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className="text-lg">{f.icon}</span>
                    <span className="font-korean text-white/50 text-sm">{f.label}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/guide/reservation"
                className="block text-center font-display font-bold text-[11px] tracking-widest text-white/40 hover:text-white transition-colors"
              >
                예약 안내 확인하기 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
