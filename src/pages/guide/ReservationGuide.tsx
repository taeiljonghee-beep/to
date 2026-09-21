import { Link } from 'react-router-dom';

const infoSections = [
  {
    label: 'OCCUPANCY',
    kor: '인원 안내',
    color: '#F0D94A',
    items: [
      { key: '기본 인원', val: '[인원 수 입력]' },
      { key: '최대 인원', val: '[최대 인원 수 입력]' },
      { key: '추가 인원 요금', val: '[요금 입력] / 1인' },
      { key: '영아', val: '[영아 기준 입력]' },
    ],
  },
  {
    label: 'CHECK-IN/OUT',
    kor: '체크인 · 체크아웃',
    color: '#85C4DC',
    items: [
      { key: '체크인', val: '[시간 입력]' },
      { key: '체크아웃', val: '[시간 입력]' },
      { key: '얼리 체크인', val: '사전 문의 필요' },
      { key: '레이트 체크아웃', val: '사전 문의 필요' },
    ],
  },
  {
    label: 'POOL',
    kor: '수영장 안내',
    color: '#8ECFC0',
    items: [
      { key: '수영장 운영 시간', val: '[시간 입력]' },
      { key: '수온', val: '[온도 입력]' },
      { key: '수영복', val: '필수 착용' },
      { key: '수영 용품', val: '[제공 여부 입력]' },
    ],
  },
  {
    label: 'BBQ',
    kor: '바베큐 안내',
    color: '#EF8C72',
    items: [
      { key: '바베큐 이용 시간', val: '[시간 입력]' },
      { key: '그릴 제공', val: '구비 완료' },
      { key: '식재료', val: '별도 구매 필요' },
      { key: '도구', val: '[제공 도구 목록 입력]' },
    ],
  },
  {
    label: 'PAYMENT',
    kor: '결제 안내',
    color: '#C2B0E8',
    items: [
      { key: '결제 방법', val: '[결제 방법 입력]' },
      { key: '예약금', val: '[예약금 비율 입력]' },
      { key: '잔금 납부', val: '[잔금 납부 시기 입력]' },
      { key: '영수증', val: '[발행 여부 입력]' },
    ],
  },
  {
    label: 'OPTIONS',
    kor: '추가 옵션',
    color: '#F0D94A',
    items: [
      { key: '바베큐 패키지', val: '[옵션 입력]' },
      { key: '생일 파티 패키지', val: '[옵션 입력]' },
      { key: '조식 옵션', val: '[옵션 입력]' },
      { key: '기타 옵션', val: '[문의 필요]' },
    ],
  },
];

export default function ReservationGuide() {
  return (
    <main className="pt-16 bg-[#F9F8F4]">
      <section className="pt-16 lg:pt-24 pb-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/guide" className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 hover:text-[#1E1E1E]">
            ← GUIDE
          </Link>
        </div>
        <p className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 mb-4">
          GUIDE — RESERVATION
        </p>
        <h1 className="font-display font-black text-[#1E1E1E] leading-[0.88] mb-4"
          style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}>
          RESERVATION<br />GUIDE.
        </h1>
        <p className="font-korean text-[#1E1E1E]/60 text-sm leading-relaxed max-w-lg">
          예약 전 꼭 확인해야 할 기본 정보를 안내합니다. 실제 정보는 운영 정책에 따라 다를 수 있으며, 상세 사항은 문의해 주세요.
        </p>
      </section>

      <section className="px-6 lg:px-10 pb-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {infoSections.map((sec) => (
            <div key={sec.label} className="border border-[#1E1E1E]/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E] px-2 py-1"
                  style={{ backgroundColor: sec.color }}
                >
                  {sec.label}
                </span>
                <h2 className="font-korean font-bold text-lg text-[#1E1E1E]">{sec.kor}</h2>
              </div>
              <table className="w-full">
                <tbody>
                  {sec.items.map((item) => (
                    <tr key={item.key} className="border-t border-[#1E1E1E]/5 first:border-t-0">
                      <td className="py-3 pr-4 font-korean text-[#1E1E1E]/50 text-sm w-1/2">{item.key}</td>
                      <td className="py-3 font-korean text-[#1E1E1E] text-sm font-medium">{item.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="bg-[#EDE8F8] p-8 border-l-4 border-[#C2B0E8]">
          <div className="font-display font-black text-lg text-[#3D1F52] mb-2">NOTE</div>
          <p className="font-korean text-[#3D1F52]/70 text-sm leading-relaxed">
            위 내용은 안내용 정보이며, 실제 운영 정책에 따라 변경될 수 있습니다. 예약 전 반드시 최신 정보를 확인하거나 문의해 주세요. 가격, 인원, 시간 등 실제 데이터는 운영자가 별도 입력 예정입니다.
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            to="/reservation"
            className="bg-[#3D1F52] text-white font-bold text-[12px] tracking-widest px-8 py-4 hover:bg-[#5A3470] transition-colors"
          >
            예약하기
          </Link>
          <Link
            to="/guide/cancellation"
            className="border border-[#1E1E1E]/20 text-[#1E1E1E] font-bold text-[12px] tracking-widest px-8 py-4 hover:bg-[#1E1E1E] hover:text-white transition-colors"
          >
            취소·환불 정책 →
          </Link>
        </div>
      </section>
    </main>
  );
}
