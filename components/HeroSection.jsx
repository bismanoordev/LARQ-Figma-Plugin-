export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#d8d3cd]"
      style={{
        backgroundImage: "url('/HeroSection.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      aria-label="LARQ hero"
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#f2ece6]/30 via-transparent to-white/15" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-14 sm:px-6 md:items-center md:pb-0 lg:px-8">
        <div className="ml-auto w-full max-w-155 text-[#13395B] md:absolute md:right-[8.5%] md:top-[46%] md:ml-0 md:-translate-y-1/2">
          <h1 className="font-inter text-[38px] font-medium leading-none tracking-[-0.02em] sm:text-5xl md:text-[60px]">
            The Future of Water
          </h1>
          <h2 className="mt-3 font-notoSansJP text-[22px] font-medium leading-tight sm:text-3xl md:text-[28px]">
            水に未来を。
          </h2>
          <p className="mt-6 max-w-140 font-notoSansJP text-[13px] leading-6 sm:text-sm md:text-[14px] md:leading-7">
            あなたの毎日を彩る様々なものが、未来への想いでデザインされていくように、水という存在をデザインすることはできないか。
            LARQは、洗練されたフォルムと革新的デジタル浄水テクノロジーを融合。感性を刺激しながら、環境への想いにも応えていく。
            水に新しい価値をもたらすウォーターボトル、LARQ。未来を見つめる。水は未来になる。
          </p>
        </div>
      </div>
    </section>
  );
}
