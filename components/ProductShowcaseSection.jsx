export default function ProductShowcaseSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-10">
      <div className="relative mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <img
          src="/ProductShowcaseSection.png"
          alt="LARQ product section"
          className="mx-auto block h-auto w-full max-w-[1280px] object-cover lg:w-10/12"
        />

        <div className="relative mt-6 w-full text-[#153A5B] sm:max-w-96 lg:absolute lg:right-[12%] lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
          <h2 className="font-inter text-[34px] font-semibold leading-tight sm:text-5xl lg:text-6xl">
            LARQ Bottle
            <br />
            PureVis™
          </h2>

          <p className="mt-2 font-notoSansJP text-[15px] leading-7 sm:text-[17px] sm:leading-8">
            (ボトルピュアビス)
            <br />
            UV除菌機能付きウォーターボトル
          </p>

          <p className="mt-8 font-notoSansJP text-[16px] leading-8 text-[#4d5b69] sm:mt-10 sm:text-[18px] sm:leading-10">
            セルフクリーニング機能付きボトルで、
            <br />
            輝くキレイな水を。
          </p>

          <button
            type="button"
            className="mt-7 bg-[#153A5B] px-10 py-3 font-notoSansJP text-[20px] font-bold text-white transition-colors hover:bg-[#0f2d47] sm:px-12 sm:text-2xl"
          >
            詳しくはこちら
          </button>
        </div>
      </div>
    </section>
  );
}
