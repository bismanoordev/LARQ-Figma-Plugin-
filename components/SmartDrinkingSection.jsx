function SectionHeader() {
  return (
    <div className="text-center text-[#153A5B]">
      <h2 className="font-notoSansJP text-[28px] font-bold leading-tight sm:text-[35px] sm:leading-[45.5px]">
        スマートな飲み方
      </h2>
      <div className="mx-auto mt-4 h-1.5 w-12.5 bg-[#F3756D]" />
    </div>
  );
}

function InfoCard({ title, subtitle, description, note, buttonLabel }) {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-none bg-[#F5F9FC] p-6 text-[#153A5B] sm:p-8 lg:p-10">
      <div>
        <h3 className="font-inter text-[24px] font-bold leading-tight sm:text-[28px] lg:text-[31px] lg:leading-12">
          {title}
        </h3>
        <p className="mt-2 font-notoSansJP text-sm leading-5.5 sm:text-[15px] sm:leading-[19.5px]">
          {subtitle}
        </p>
        <p className="mt-6 font-notoSansJP text-[14px] font-bold leading-6 sm:text-base">
          {description}
        </p>
        <p className="mt-4 break-words font-notoSansJP text-[13px] leading-6 text-[#153A5B] sm:text-sm sm:leading-[25.2px]">
          {note}
        </p>
      </div>

      <button
        type="button"
        className="mt-8 inline-flex w-fit items-center justify-center border-2 border-[#153A5B] bg-[#153A5B] px-10 py-2.5 font-notoSansJP text-sm font-medium leading-[18.2px] text-white transition-colors hover:bg-[#0f2d47]"
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default function SmartDrinkingSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        <div className="mt-10 grid gap-8 lg:mt-14 lg:gap-0">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <InfoCard
              title="LARQ Bottle PureVis™"
              subtitle="（ボトル ピュア ビス）"
              description="驚くほどキレイな水"
              note="PureVis™テクノロジーにより、大腸菌などの細菌を最大 99%*除菌します。 詳しくはこちら （英文資料です。）"
              buttonLabel="詳しくはこちら"
            />
            <div className="min-h-65 w-full overflow-hidden bg-white sm:min-h-80 lg:min-h-full">
              <img
                src="/SmartDrink1.png"
                alt="LARQ Bottle PureVis"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-0 mt-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="min-h-65 w-full overflow-hidden bg-white sm:min-h-80 lg:min-h-full">
              <img
                src="/SmartDrink2.png"
                alt="LARQ Pitcher PureVis"
                className="h-full w-full object-cover"
              />
            </div>
            <InfoCard
              title="LARQ Pitcher PureVis™"
              subtitle="（ピッチャー ピュア ビス）"
              description="ナノゼロフィルター技術"
              note="私たちの革新的な植物由来のフィルターは、鉛*、塩素、水銀、VOC、カドミウム、PFAS / PFOA*、薬品*、微粒子などの汚染物質に対して有効であることが、高水準の自主検査で確認済みです。 詳しくはこちら （英文資料です。） *アドバンスドフィルター搭載 PureVis™ テクノロジー 独自のPureVis™テクノロジーは、生物学的汚染物質（有害菌）*の繁殖を防ぐことで水質を向上させます。 詳しくはこちら （英文資料です。） *ラボ内試験でUV除菌機能のないピッチャーと比較し、水の味と匂いに影響を与える細菌の自然増殖を防ぎ、不活性化する能力に優れていることを確認。"
              buttonLabel="詳しくはこちら"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
