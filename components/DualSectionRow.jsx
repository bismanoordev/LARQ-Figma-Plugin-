export default function DualSectionRow() {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-4 lg:px-8">
        <article className="relative mx-auto w-full max-w-140 lg:ml-auto lg:mr-0">
          <img
            src="/Dual1.png"
            alt="LARQ Bottle Filtered"
            className="block h-auto w-full object-cover"
          />
          <div className="absolute inset-0 flex items-start justify-end p-5 sm:p-6">
            <div className="flex h-full w-[50%] flex-col text-[#153A5B] font-notoSansJP">
              <h3 className="text-[44px] font-semibold leading-[1.08]">
                LARQ Bottle
                <br />
                Filtered
              </h3>
              <p className="mt-2 text-[14px] leading-6">
                (ボトルフィルター)
                <br />
                浄水フィルター付き
                <br />
                ウォーターボトル
              </p>
              <p className="mt-6 text-[14px] leading-7 text-[#4d5b69]">
                水分補給方法をあなたの
                <br />
                手の中に。
              </p>
              <p className="mt-auto pb-2 text-right text-[14px] font-semibold leading-none">
                詳しくはこちら
              </p>
            </div>
          </div>
        </article>

        <article className="relative mx-auto w-full max-w-140 overflow-hidden lg:ml-0 lg:mr-auto">
          <img
            src="/Dual2.png"
            alt="LARQ Pitcher PureVis"
            className="block h-auto w-full object-cover"
          />
          <div className="absolute inset-0 flex items-start justify-end p-4 sm:p-5">
            <div className="flex h-full w-[49%] flex-col text-[#153A5B] font-notoSansJP">
              <h3 className="text-[34px] font-semibold leading-[1.08] lg:text-[40px]">
                LARQ Pitcher
                <br />
                PureVis™
              </h3>
              <p className=" text-[12px] leading-4 sm:text-[13px] sm:leading-5.5">
                (ピッチャーピュアビス)
                <br />
                UV除菌＆浄水フィルタ効果の
                <br />
                ピッチャー型浄水器
              </p>
              <p className=" text-[12px] leading-5.5 text-[#4d5b69] sm:text-[13px] sm:leading-6">
                フィルター式浄水の域を超えた、
                <br />
                驚くほどキレイな水を。
              </p>
              <p className="mt-auto pb-1 text-right text-[12px] font-semibold leading-none sm:text-[13px]">
                詳しくはこちら
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
