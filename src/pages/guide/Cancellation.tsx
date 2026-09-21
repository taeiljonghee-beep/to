import { Link } from 'react-router-dom';

const timeline = [
  { period: '입실 30일 전 이상', refund: '100% 환불', color: '#8ECFC0' },
  { period: '입실 15일 전 ~ 29일 전', refund: '[환불 비율 입력]', color: '#F0D94A' },
  { period: '입실 7일 전 ~ 14일 전', refund: '[환불 비율 입력]', color: '#EF8C72' },
  { period: '입실 3일 전 ~ 6일 전', refund: '[환불 비율 입력]', color: '#EF8C72' },
  { period: '입실 1일 전 ~ 2일 전', refund: '[환불 비율 입력]', color: '#C2B0E8' },
  { period: '입실 당일 / 노쇼', refund: '환불 불가', color: '#3D1F52' },
];

export default function Cancellation() {
  return (
    <main className="pt-16 bg-[#F9F8F4]">
      <section className="pt-16 lg:pt-24 pb-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/guide" className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 hover:text-[#1E1E1E]">
            ← GUIDE
          </Link>
        </div>
        <p className="font-display font-bold text-[10px] tracking-widest text-[#1E1E1E]/40 mb-4">
          GUIDE — CANCELLATION
        </p>
        <h1 className="font-display font-black text-[#1E1E1E] leading-[0.88] mb-4"
          style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}>
          CANCEL &amp;<br />REFUND.
        </h1>
        <p className="font-korean text-[#1E1E1E]/60 text-sm leading-relaxed max-w-lg">
          취소 및 환불 정책 안내입니다. 예약 전 반드시 확인해 주세요. 실제 정책은 예약 채널에 따라 다를 수 있습니다.
        </p>
      </section>

      <section className="px-6 lg:px-10 pb-20 max-w-[1400px] mx-auto">
        {/* Timeline */}
        <div className="mb-12">
          <h2 className="font-display font-black text-2xl text-[#1E1E1E] mb-6">환불 기준표</h2>
          <div className="flex flex-col gap-0 border border-[#1E1E1E]/10">
            {/* Header */}
            <div className="grid grid-cols-2 bg-[#1E1E1E] px-6 py-4">
              <span className="font-display font-bold text-[10px] tracking-widest text-white/50">취소 시점</span>
              <span className="font-display font-bold text-[10px] tracking-widest text-white/50">환불 금액</span>
            </div>
            {timeline.map((row) => (
              <div
                key={row.period}
                className="grid grid-cols-2 px-6 py-5 border-t border-[#1E1E1E]/10 items-center"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 shrink-0"
                    style={{ backgroundColor: row.color }}
                  />
                  <span className="font-korean text-[#1E1E1E] text-sm">{row.period}</span>
                </div>
                <span
                  className="font-display font-black text-lg"
                  style={{ color: row.color === '#3D1F52' ? '#3D1F52' : '#1E1E1E' }}
                >
                  {row.refund}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#FBF6D0] p-8">
            <div className="font-display font-black text-lg text-[#1E1E1E] mb-4">취소 방법</div>
            <ul className="flex flex-col gap-3">
              {[
                '예약하신 채널을 통해 취소 요청을 해주세요.',
                '전화 또는 문자로 취소 의사를 알려주세요.',
                '취소 접수 후 확인 문자를 받으세요.',
                '[실제 취소 방법 입력]',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#F0D94A] mt-2 shrink-0" />
                  <span className="font-korean text-[#1E1E1E]/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#FDE8E1] p-8">
            <div className="font-display font-black text-lg text-[#1E1E1E] mb-4">유의사항</div>
            <ul className="flex flex-col gap-3">
              {[
                '취소 정책은 예약 채널에 따라 다를 수 있습니다.',
                '특가 또는 이벤트 예약의 경우 별도 정책이 적용됩니다.',
                '천재지변 등 불가항력적 사유의 경우 별도 협의합니다.',
                '[기타 유의사항 입력]',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#EF8C72] mt-2 shrink-0" />
                  <span className="font-korean text-[#1E1E1E]/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#EF8C72] p-8">
          <div className="font-display font-black text-lg text-[#1E1E1E] mb-2">NOTICE</div>
          <p className="font-korean text-[#1E1E1E] text-sm leading-relaxed">
            위 취소·환불 정책은 안내용이며, 실제 적용 정책은 예약 완료 후 발송되는 확인 문자 및 예약 조건을 기준으로 합니다. 궁금한 점은 예약 전 반드시 문의해 주세요.
          </p>
        </div>
      </section>
    </main>
  );
}
