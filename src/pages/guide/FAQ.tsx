import { useState } from 'react';
import { Link } from 'react-router-dom';

type FaqItem = { q: string; a: string };

const faqData: { category: string; en: string; color: string; items: FaqItem[] }[] = [
  {
    category: '예약',
    en: 'RESERVATION',
    color: '#F0D94A',
    items: [
      { q: '예약은 어떻게 하나요?', a: '[예약 방법 입력] — 예약 채널, 예약 절차 등 실제 정보를 입력해 주세요.' },
      { q: '예약 확인은 어떻게 받나요?', a: '예약 완료 후 확인 문자 또는 이메일이 발송됩니다. [실제 내용 입력]' },
      { q: '당일 예약도 가능한가요?', a: '[당일 예약 가능 여부 입력]' },
      { q: '예약금은 언제 결제하나요?', a: '[예약금 결제 시점 입력]' },
    ],
  },
  {
    category: '객실',
    en: 'ROOM',
    color: '#C2B0E8',
    items: [
      { q: '최대 몇 명까지 이용 가능한가요?', a: '[최대 인원 입력]' },
      { q: '영아도 인원에 포함되나요?', a: '[영아 기준 입력]' },
      { q: '독채로 운영되나요?', a: '네, 투리버는 완전 독채로 운영됩니다. 다른 손님과 공간을 공유하지 않습니다.' },
      { q: '금연 시설인가요?', a: '[흡연 정책 입력]' },
    ],
  },
  {
    category: '수영장',
    en: 'POOL',
    color: '#85C4DC',
    items: [
      { q: '수영장은 언제 이용할 수 있나요?', a: '[수영장 이용 가능 시간 입력]' },
      { q: '수영복이 없으면 어떻게 하나요?', a: '[수영복 대여 또는 판매 여부 입력]' },
      { q: '어린이 튜브나 물놀이 용품이 있나요?', a: '[구비 용품 목록 입력]' },
      { q: '수온은 몇 도인가요?', a: '[수온 정보 입력]' },
    ],
  },
  {
    category: '키즈 시설',
    en: 'KIDS',
    color: '#F0D94A',
    items: [
      { q: '정글짐은 몇 세부터 이용 가능한가요?', a: '[연령 기준 입력]' },
      { q: '클라이밍 월 이용 방법이 있나요?', a: '[이용 방법 및 주의사항 입력]' },
      { q: '아이 혼자 놀아도 안전한가요?', a: '보호자 동반을 권장합니다. [안전 시설 정보 입력]' },
    ],
  },
  {
    category: '바베큐',
    en: 'BBQ',
    color: '#EF8C72',
    items: [
      { q: '바베큐 재료는 직접 가져와야 하나요?', a: '[재료 제공 여부 입력]' },
      { q: '바베큐 도구는 어디에 있나요?', a: '[도구 위치 및 이용 방법 입력]' },
      { q: '바베큐 이용 시간이 있나요?', a: '[바베큐 이용 가능 시간 입력]' },
    ],
  },
  {
    category: '체크인/아웃',
    en: 'CHECK-IN/OUT',
    color: '#8ECFC0',
    items: [
      { q: '체크인/아웃 시간은 언제인가요?', a: '체크인: [시간 입력] / 체크아웃: [시간 입력]' },
      { q: '얼리 체크인이 가능한가요?', a: '[얼리 체크인 정책 입력]' },
      { q: '레이트 체크아웃이 가능한가요?', a: '[레이트 체크아웃 정책 입력]' },
      { q: '주차는 어디에 하나요?', a: '[주차 안내 입력]' },
    ],
  },
];

function AccordionItem({ q, a, accentColor }: { q: string; a: string; accentColor: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[#1E1E1E]/10 first:border-t-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-5 text-left gap-4"
      >
        <span className="font-korean text-[#1E1E1E] text-sm font-medium leading-relaxed">{q}</span>
        <span
          className="shrink-0 w-6 h-6 flex items-center justify-center text-[#1E1E1E] font-bold text-lg leading-none mt-0.5 transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-5 pl-0 border-l-2" style={{ borderColor: accentColor, paddingLeft: '12px' }}>
          <p className="font-korean text-[#1E1E1E]/60 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('예약');

  const active = faqData.find((f) => f.category === activeCategory)!;

  return (
    <main className="pt-16 bg-[#F9F8F4]">
      <section className="pt-16 lg:pt-24 pb-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/guide" className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 hover:text-[#1E1E1E]">
            ← GUIDE
          </Link>
        </div>
        <p className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 mb-4">
          GUIDE — FAQ
        </p>
        <h1 className="font-display font-black text-[#1E1E1E] leading-[0.88] mb-4"
          style={{ fontSize: 'clamp(56px, 9vw, 120px)' }}>
          FAQ
        </h1>
        <p className="font-korean text-[#1E1E1E]/60 text-sm leading-relaxed max-w-lg">
          자주 묻는 질문들을 모았습니다. 원하는 항목을 선택하여 확인하세요.
        </p>
      </section>

      <section className="px-6 lg:px-10 pb-20 max-w-[1400px] mx-auto">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {faqData.map((f) => (
            <button
              key={f.category}
              onClick={() => setActiveCategory(f.category)}
              className={`font-display font-bold text-[11px] tracking-widest px-4 py-2.5 transition-all ${
                activeCategory === f.category
                  ? 'text-[#1E1E1E]'
                  : 'bg-transparent text-[#1E1E1E]/40 hover:text-[#1E1E1E]'
              }`}
              style={activeCategory === f.category ? { backgroundColor: f.color } : {}}
            >
              {f.en}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E] px-2 py-1"
              style={{ backgroundColor: active.color }}
            >
              {active.en}
            </span>
            <span className="font-korean font-bold text-xl text-[#1E1E1E]">{active.category}</span>
          </div>
          <div>
            {active.items.map((item) => (
              <AccordionItem key={item.q} q={item.q} a={item.a} accentColor={active.color} />
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1E1E1E]/10">
          <p className="font-korean text-[#1E1E1E]/50 text-sm">
            원하시는 답변을 찾지 못하셨나요? <Link to="/location" className="text-[#3D1F52] underline">문의하기</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
