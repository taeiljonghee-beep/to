import { Link } from 'react-router-dom';

export default function BBQGuide() {
  return (
    <main className="pt-16 bg-[#F9F8F4]">
      <section className="pt-16 lg:pt-24 pb-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/guide" className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 hover:text-[#1E1E1E]">← GUIDE</Link>
        </div>
        <h1 className="font-display font-black text-[#1E1E1E] leading-[0.88] mb-4" style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}>
          BBQ<br />GUIDE.
        </h1>
      </section>
      <section className="px-6 lg:px-10 pb-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            { label: '이용 시간', color: '#EF8C72', items: ['바베큐 이용 가능 시간: [시간 입력]', '이용 전 사전 세팅 시간이 필요합니다.'] },
            { label: '제공 도구', color: '#F0D94A', items: ['[그릴 종류 입력]', '[집게, 장갑 등 제공 도구 목록 입력]'] },
            { label: '이용 방법', color: '#8ECFC0', items: ['[그릴 점화 방법 입력]', '[사용 후 정리 방법 입력]'] },
            { label: '유의사항', color: '#C2B0E8', items: ['식재료는 직접 준비해 주세요.', '사용 후 그릴 정리 부탁드립니다.', '[기타 유의사항 입력]'] },
          ].map((sec) => (
            <div key={sec.label} className="border border-[#1E1E1E]/10 p-8">
              <span className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E] px-2 py-1 mb-4 inline-block" style={{ backgroundColor: sec.color }}>{sec.label}</span>
              <ul className="flex flex-col gap-3 mt-2">
                {sec.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 shrink-0" style={{ backgroundColor: sec.color }} />
                    <span className="font-korean text-[#1E1E1E]/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
