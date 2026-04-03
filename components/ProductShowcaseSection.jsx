export default function ProductShowcaseSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-10">
      <div className="relative mx-auto w-full max-w-480 px-40 sm:px-6 lg:px-8">
        <img
          src="/ProductShowcaseSection.png"
          alt="LARQ product section"
          className="mx-auto block h-auto w-11/12 object-cover lg:w-10/12"
        />

        <div className="relative mt-6 w-full text-[#153A5B] sm:max-w-96 lg:absolute lg:right-[12%] lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
          <h2 className="font-inter text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            LARQ Bottle
            <br />
            PureVis™
          </h2>

          <p className="mt-2 font-notoSansJP text-[17px] leading-8">
            (ボトルピュアビス)
            <br />
            UV除菌機能付きウォーターボトル
          </p>

          <p className="mt-10 font-notoSansJP text-[18px] leading-10 text-[#4d5b69]">
            セルフクリーニング機能付きボトルで、
            <br />
            輝くキレイな水を。
          </p>

          <button
            type="button"
            className="mt-7 bg-[#153A5B] px-12 py-3 font-notoSansJP text-2xl font-bold text-white transition-colors hover:bg-[#0f2d47]"
          >
            詳しくはこちら
          </button>
        </div>
      </div>
    </section>
  );
}
