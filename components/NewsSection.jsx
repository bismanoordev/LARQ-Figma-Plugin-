export default function NewsSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-[#153A5B]">
          <p className="text-center font-notoSansJP text-[35px] font-bold leading-[45.5px]">
            ニュース
          </p>
          <div className="mx-auto mt-4 h-1.5 w-12.5 bg-[#F3756D]" />

          <div className="mt-12 grid gap-4 border-t border-slate-200 pt-8 md:grid-cols-[auto,1fr,auto] md:items-start md:gap-5">
            <p className="font-notoSansJP text-base leading-6 text-[#153A5B]">
              2023.08.21
            </p>
            <div className="space-y-2 font-notoSansJP text-base leading-6 text-[#153A5B]">
              <p>
                LARQ（ラーク）のUV除菌機能付きのウォーターボトルや浄水フィルター付きのウォーターボトル、UV除菌と浄水フィルターを兼ね備え
              </p>
              <p>
                たピッチャー型浄水器など4つのモデルを8月21日以降順次発売。リリースはこちら。
              </p>
            </div>
            <p className="self-start font-notoSansJP text-base leading-6 text-[#153A5B]">
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
