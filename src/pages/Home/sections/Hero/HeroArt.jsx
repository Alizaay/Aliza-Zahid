import logo from "../../../../assets/images/logo-clear.png";

export function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute inset-6 rounded-full bg-cyan/20 blur-3xl animate-pulse-glow" />
      <div className="animate-spin-slow pointer-events-none absolute inset-[8%] rounded-full border border-cyan/15" />
      <div className="pointer-events-none absolute inset-[16%] rounded-full border border-brand/20" />
      <img
        src={logo}
        alt="AlizaDev AZ monogram with laptop and orbital glow"
        className="animate-float relative w-full drop-shadow-[0_24px_60px_rgb(0_217_255_/_0.2)]"
      />
    </div>
  );
}
