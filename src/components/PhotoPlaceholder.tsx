type Props = {
  /** What the real photo will show, e.g. "실내 수영장 전경" */
  label: string;
  /** Section accent color, e.g. '#F0D94A' */
  color: string;
  /** Optional background tint; defaults to a pale tint of `color` */
  bg?: string;
  /** Use light text — for placement over dark section backgrounds */
  dark?: boolean;
  className?: string;
};

/**
 * Stand-in for a real property photo. Figma Make filled every image slot with
 * unrelated stock photography; this keeps the layout/rhythm intact without
 * implying those stock photos are the actual villa.
 */
export default function PhotoPlaceholder({ label, color, bg, dark = false, className = '' }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ backgroundColor: bg ?? (dark ? '#2A2A2A' : `${color}1F`) }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${color}${dark ? '3D' : '26'} 0px, ${color}${dark ? '3D' : '26'} 1px, transparent 1px, transparent 13px)`,
        }}
      />
      <div className="relative text-center px-4">
        <div
          className="font-display font-black text-[11px] tracking-[0.25em] mb-1.5"
          style={{ color }}
        >
          PHOTO
        </div>
        <div
          className={`font-korean text-[12px] font-medium max-w-[180px] leading-snug ${dark ? 'text-white/50' : 'text-[#1E1E1E]/50'}`}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
