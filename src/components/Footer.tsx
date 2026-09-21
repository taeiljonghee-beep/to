import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      {/* Brand bar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <div className="font-display font-black text-4xl lg:text-5xl tracking-tight text-white mb-1">
                TO RIVER
              </div>
              <div className="font-korean text-xs font-medium text-white/40 tracking-widest">
                투리버 키즈풀빌라
              </div>
            </div>
            <p className="font-display font-bold text-lg text-[#C2B0E8] tracking-wide mt-6">
              PLAYFUL, BUT CONSIDERED.
            </p>
            <p className="font-korean text-sm text-white/50 mt-2 leading-relaxed">
              정돈된 컬러 플레이 — 놀이는 풍부하게,<br />공간은 섬세하게.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <div className="text-[10px] font-bold tracking-widest text-white/30 mb-4">NAVIGATE</div>
            <div className="flex flex-col gap-2">
              {[
                ['SPACE', '/space'],
                ['KIDS SPACE', '/kids-space'],
                ['POOL & PLAY', '/pool-play'],
                ['STAY', '/stay'],
                ['LOCATION', '/location'],
                ['RESERVATION', '/reservation'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="text-[13px] font-semibold tracking-wider text-white/60 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] font-bold tracking-widest text-white/30 mb-4">GUIDE</div>
            <div className="flex flex-col gap-2">
              {[
                ['예약 안내', '/guide/reservation'],
                ['이용규칙', '/guide/house-rules'],
                ['취소·환불 정책', '/guide/cancellation'],
                ['자주 묻는 질문', '/guide/faq'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="text-[13px] font-semibold text-white/60 hover:text-white transition-colors font-korean"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between gap-6">
          <div className="text-[11px] text-white/30 leading-relaxed font-korean">
            <p>상호명: 투리버 키즈풀빌라 &nbsp;|&nbsp; 주소: [실제 주소 입력]</p>
            <p className="mt-1">대표: [대표자명] &nbsp;|&nbsp; 사업자등록번호: [번호 입력] &nbsp;|&nbsp; 예약문의: [연락처 입력]</p>
          </div>
          <div className="text-[11px] text-white/20">
            © 2025 TO RIVER. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
