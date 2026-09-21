import { Link } from 'react-router-dom';

const ruleCategories = [
  {
    title: '입실 전',
    en: 'BEFORE ARRIVAL',
    color: '#F0D94A',
    rules: [
      '입실 전 예약 확인 문자를 꼭 확인해 주세요.',
      '반려동물 동반은 불가합니다.',
      '허용 인원 초과 입실은 불가합니다.',
      '외부 음식 반입 시 사전에 문의해 주세요.',
    ],
  },
  {
    title: '체크인',
    en: 'CHECK-IN',
    color: '#EF8C72',
    rules: [
      '체크인 시간: [실제 시간 입력]',
      '얼리 체크인은 사전 협의 시 가능합니다.',
      '입실 시 시설 상태를 확인해 주세요.',
      '키 수령 방법: [키 수령 방법 입력]',
    ],
  },
  {
    title: '이용 중',
    en: 'DURING STAY',
    color: '#8ECFC0',
    rules: [
      '쓰레기는 지정된 장소에 분리수거해 주세요.',
      '시설물 파손 시 변상 책임이 발생합니다.',
      '허용 인원 외 외부인 출입은 금지됩니다.',
      '음식물은 실내 취식 공간에서만 이용해 주세요.',
    ],
  },
  {
    title: '수영장 이용',
    en: 'POOL SAFETY',
    color: '#85C4DC',
    rules: [
      '수영장 이용 가능 시간: [시간 입력]',
      '12세 미만 어린이는 반드시 보호자 동반 입수하세요.',
      '음식물을 드신 후 30분 이후 입수해 주세요.',
      '안전 수칙을 반드시 준수해 주세요.',
      '수영장 내 유리 용기 반입은 금지됩니다.',
    ],
  },
  {
    title: '소음 · 취침',
    en: 'NOISE & QUIET HOURS',
    color: '#C2B0E8',
    rules: [
      '야간 소음 금지 시간: [시간 입력]',
      '외부 소음에 주의해 주세요.',
      '카라오케 이용 가능 시간: [시간 입력]',
      '이웃 배려를 위해 조용한 이용을 부탁드립니다.',
    ],
  },
  {
    title: '체크아웃',
    en: 'CHECK-OUT',
    color: '#F0D94A',
    rules: [
      '체크아웃 시간: [실제 시간 입력]',
      '개인 소지품을 꼭 확인해 주세요.',
      '사용한 그릇 및 식기는 세척 후 정리해 주세요.',
      '쓰레기는 지정된 장소에 버려주세요.',
      '레이트 체크아웃 시 사전 문의해 주세요.',
    ],
  },
];

export default function HouseRules() {
  return (
    <main className="pt-16 bg-[#F9F8F4]">
      <section className="pt-16 lg:pt-24 pb-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/guide" className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 hover:text-[#1E1E1E]">
            ← GUIDE
          </Link>
        </div>
        <p className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 mb-4">
          GUIDE — HOUSE RULES
        </p>
        <h1 className="font-display font-black text-[#1E1E1E] leading-[0.88] mb-4"
          style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}>
          HOUSE<br />RULES.
        </h1>
        <p className="font-korean text-[#1E1E1E]/60 text-sm leading-relaxed max-w-lg">
          투리버를 이용하시는 모든 분들께 안전하고 즐거운 경험을 드리기 위한 기본 수칙입니다. 아래 내용을 꼭 확인해 주세요.
        </p>
      </section>

      <section className="px-6 lg:px-10 pb-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ruleCategories.map((cat) => (
            <div key={cat.en} className="border border-[#1E1E1E]/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E] px-2 py-1"
                  style={{ backgroundColor: cat.color }}
                >
                  {cat.en}
                </span>
                <h2 className="font-korean font-bold text-xl text-[#1E1E1E]">{cat.title}</h2>
              </div>
              <ul className="flex flex-col gap-3">
                {cat.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 mt-2 shrink-0"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span className="font-korean text-[#1E1E1E]/70 text-sm leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Warning box */}
        <div className="mt-8 bg-[#EF8C72] p-8">
          <div className="font-display font-black text-xl text-[#1E1E1E] mb-3">IMPORTANT</div>
          <p className="font-korean text-[#1E1E1E] text-sm leading-relaxed">
            이용규칙 미준수 시 추가 요금이 발생하거나 퇴실 조치될 수 있습니다. 시설 파손 또는 청소 불량의 경우 실비가 청구됩니다. 궁금한 점은 체크인 전 미리 문의해 주세요.
          </p>
        </div>
      </section>
    </main>
  );
}
