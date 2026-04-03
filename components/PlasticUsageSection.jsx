function StatCard({ bgClass, value, subtitle, line1, line2 }) {
  return (
    <div className={`${bgClass} relative h-[310px] w-full p-8 text-[#153A5B]`}>
      <p className="font-notoSansJP text-base leading-6">削減</p>
      <div className="mt-2 border-b-4 border-b-[#153A5B] pb-2">
        <p className="font-inter text-[40px] font-bold leading-[1.1] tracking-[0.012em]">
          {value}
        </p>
      </div>
      <p className="mt-5 font-notoSansJP text-[12px] font-bold leading-5">
        {subtitle}
      </p>
      <p className="mt-4 font-notoSansJP text-[9px] leading-[14px]">{line1}</p>
      <p className="mt-1 font-notoSansJP text-[9px] leading-[14px]">{line2}</p>
    </div>
  );
}

function ProductCard({ image, title, body }) {
  return (
    <div className="relative h-[360px] w-full overflow-hidden">
      <img src={image} className="h-full w-full object-cover" alt={title} />
      <div className="absolute left-5 top-8 w-[230px] text-[#153A5B]">
        <p className="font-inter text-[28px] font-bold leading-[35px] tracking-[0.01em]">
          {title}
        </p>
        <p className="mt-4 font-notoSansJP text-[14px] leading-[21px]">
          {body}
        </p>
        <button className="mt-5 inline-flex h-10 w-40 items-center justify-center bg-[#153A5B] font-notoSansJP text-[14px] font-bold text-white">
          詳しくはこちら
        </button>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <section className="w-full bg-[#F4F9FC] py-10 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:hidden">
        <img
          src="/Plastic1.png"
          className="mx-auto mb-8 h-auto w-full max-w-[960px] object-cover"
          alt="Plastic1"
        />

        <p className="font-notoSansJP text-[13px] leading-5 text-[#153A5B]">
          ペットボトル 10本の例
        </p>
        <p className="mt-1 font-notoSansJP text-[13px] leading-5 text-[#153A5B]">
          あなたのプラスチック使用量から算出
        </p>
        <p className="mt-2 font-notoSansJP text-[28px] font-bold leading-[34px] text-[#153A5B]">
          LARQボトルを使うと…
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="bg-[#74BEE8] relative h-[310px] w-full p-8 text-[#153A5B] sm:col-span-2 lg:col-span-1">
            <p className="font-notoSansJP text-base leading-6">節約</p>
            <div className="mt-2 border-b-4 border-b-[#153A5B] pb-2">
              <p className="font-inter text-[34px] font-bold leading-[1.1] tracking-[0.0151em]">
                約10万円
              </p>
            </div>
            <p className="mt-5 font-notoSansJP text-[12px] font-bold leading-5">
              ペットボトル水代を1年で節約
            </p>
            <p className="mt-4 font-notoSansJP text-[9px] leading-[14px]">
              細菌を除去する自動洗浄機能付きのLARQボトルに水を入れてどこにでも
            </p>
            <p className="mt-1 font-notoSansJP text-[9px] leading-[14px]">
              行けるのに、なぜペットボトルの水にお金をかけるのでしょう？
            </p>
          </div>

          <StatCard
            bgClass="bg-[#F8CA75]"
            value="18.59kg"
            subtitle="ペットボトルごみを削減"
            line1="アメリカだけで年240万トンの使い捨てプラスチックが廃棄されています。"
            line2="その26-41%は水のペットボトルなのです。"
          />

          <StatCard
            bgClass="bg-[#F5A683] sm:col-span-2"
            value="43.05kg"
            subtitle="カーボンフットプリントから削減"
            line1="もし地球のために良いことをしたいなら、二酸化炭素排出量を減らしましょう。"
            line2="北極グマたちがあなたに感謝します。"
          />
        </div>

        <p className="mt-9 font-notoSansJP text-[13px] leading-5 text-[#153A5B]">
          驚きましたか？
        </p>
        <p className="mt-2 font-notoSansJP text-[26px] font-bold leading-[36px] text-[#153A5B]">
          今が、変化を起こすとき。
        </p>
        <p className="mt-3 font-notoSansJP text-[13px] leading-5 text-[#153A5B]">
          あなたのプラスチック使⽤量に合うおすすめ商品はこちら
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <ProductCard
            image="/Plastic2.png"
            title={
              <>
                LARQ Bottle
                <br />
                PureVis™
              </>
            }
            body="PureVis™テクノロジーにより、水とボトルに含まれる大腸菌などの生物学的汚染物質を最大99%*除去します。"
          />
          <ProductCard
            image="/Plastic3.png"
            title={
              <>
                LARQ Bottle
                <br />
                Filtered
              </>
            }
            body="フィルターのろ過能力は151リットル、約2カ月使用可能。市販量のペットボトルの水300本分相当。"
          />
        </div>
      </div>

      <div className="relative mx-auto hidden h-[1520px] w-full max-w-[1200px] lg:block">
        <p className="absolute left-[150px] top-[190px] flex h-6 w-[165px] flex-col justify-center font-notoSansJP text-[13px] leading-[20px] text-[#153A5B]">
          ペットボトル 10本の例
        </p>
        <p className="absolute left-[150px] top-[214px] flex h-6 w-[272px] flex-col justify-center font-notoSansJP text-[13px] leading-[20px] text-[#153A5B]">
          あなたのプラスチック使用量から算出
        </p>
        <p className="absolute left-[150px] top-[245px] flex h-8 w-[344px] flex-col justify-center font-notoSansJP text-[28px] font-bold leading-[34px] text-[#153A5B]">
          LARQボトルを使うと…
        </p>

        <div className="absolute left-[100px] top-[443px] h-[310px] w-[463px] bg-[#74BEE8]">
          <p className="absolute left-[50px] top-[50px] flex h-6 w-8 flex-col justify-center font-notoSansJP text-base leading-6 text-[#153A5B]">
            節約
          </p>
          <div className="absolute left-[50px] top-[74px] inline-flex h-[94px] w-[363px] items-center border-b-4 border-b-[#153A5B] pr-[205px]">
            <p className="absolute left-0 top-0 flex h-[72px] w-[157px] flex-col justify-center font-inter text-[34px] font-bold leading-[38px] tracking-[0.0151em] text-[#153A5B]">
              約10万円
            </p>
          </div>
          <p className="absolute left-[50px] top-[188px] flex h-6 w-[240px] flex-col justify-center font-notoSansJP text-[12px] font-bold leading-5 text-[#153A5B]">
            ペットボトル水代を1年で節約
          </p>
          <p className="absolute left-[50px] top-[234px] flex h-[17px] w-[370px] flex-col justify-center font-notoSansJP text-[9px] leading-[14px] text-[#153A5B]">
            細菌を除去する自動洗浄機能付きのLARQボトルに水を入れてどこにで
          </p>
          <p className="absolute left-[50px] top-[256px] flex h-[17px] w-[340px] flex-col justify-center font-notoSansJP text-[9px] leading-[14px] text-[#153A5B]">
            も行けるのに、なぜペットボトルの水にお金をかけるのでしょう？
          </p>
        </div>

        <div className="absolute left-[598px] top-[163px] h-[310px] w-[463px] bg-[#F8CA75]">
          <p className="absolute left-[50px] top-[50px] flex h-6 w-8 flex-col justify-center font-notoSansJP text-base leading-6 text-[#153A5B]">
            削減
          </p>
          <div className="absolute left-[50px] top-[74px] inline-flex h-[94px] w-[363px] items-center border-b-4 border-b-[#153A5B] pr-[95px]">
            <p className="absolute left-0 top-0 flex h-[82px] w-[240px] flex-col justify-center font-inter text-[44px] font-bold leading-[50px] tracking-[0.012em] text-[#153A5B]">
              18.59kg
            </p>
          </div>
          <p className="absolute left-[50px] top-[188px] flex h-6 w-[240px] flex-col justify-center font-notoSansJP text-[12px] font-bold leading-5 text-[#153A5B]">
            ペットボトルごみを削減
          </p>
          <p className="absolute left-[50px] top-[234px] flex h-[17px] w-[370px] flex-col justify-center font-notoSansJP text-[9px] leading-[14px] text-[#153A5B]">
            アメリカだけで年240万トンの使い捨てプラスチックが廃棄されていま
          </p>
          <p className="absolute left-[50px] top-[256px] flex h-[17px] w-[255px] flex-col justify-center font-notoSansJP text-[9px] leading-[14px] text-[#153A5B]">
            す。その26-41%は水のペットボトルなのです。
          </p>
        </div>

        <div className="absolute left-[598px] top-[573px] h-[310px] w-[463px] bg-[#F5A683]">
          <p className="absolute left-[50px] top-[50px] flex h-6 w-8 flex-col justify-center font-notoSansJP text-base leading-6 text-[#153A5B]">
            削減
          </p>
          <div className="absolute left-[50px] top-[74px] inline-flex h-[94px] w-[363px] items-center border-b-4 border-b-[#153A5B] pr-[65px]">
            <p className="absolute left-0 top-0 flex h-[86px] w-[250px] flex-col justify-center font-inter text-[46px] font-bold leading-[52px] tracking-[0.0113em] text-[#153A5B]">
              43.05kg
            </p>
          </div>
          <p className="absolute left-[50px] top-[188px] flex h-6 w-[240px] flex-col justify-center font-notoSansJP text-[12px] font-bold leading-5 text-[#153A5B]">
            カーボンフットプリントから削減
          </p>
          <p className="absolute left-[50px] top-[234px] flex h-[17px] w-[370px] flex-col justify-center font-notoSansJP text-[9px] leading-[14px] text-[#153A5B]">
            もし地球のために良いことをしたいなら、二酸化炭素排出量を減らしま
          </p>
          <p className="absolute left-[50px] top-[256px] flex h-[17px] w-[250px] flex-col justify-center font-notoSansJP text-[9px] leading-[14px] text-[#153A5B]">
            しょう。北極グマたちがあなたに感謝します。
          </p>
        </div>

        <p className="absolute left-[150px] top-[963px] flex h-[29px] w-28 flex-col justify-center font-notoSansJP text-[13px] leading-[20px] text-[#153A5B]">
          驚きましたか？
        </p>
        <p className="absolute left-[150px] top-[1004px] flex h-12 w-[381px] flex-col justify-center font-notoSansJP text-[26px] font-bold leading-[36px] text-[#153A5B]">
          今が、変化を起こすとき。
        </p>
        <p className="absolute left-[150px] top-[1072px] flex h-[29px] w-[416px] flex-col justify-center font-notoSansJP text-[13px] leading-[20px] text-[#153A5B]">
          あなたのプラスチック使⽤量に合うおすすめ商品はこちら
        </p>

        <div className="absolute left-[100px] top-[1144px] h-[360px] w-[460px] overflow-hidden">
          <img
            src="/Plastic2.png"
            className="h-full w-full object-cover"
            alt="Plastic2"
          />
          <div className="absolute left-[20px] top-[34px] w-[230px] text-[#153A5B]">
            <p className="font-inter text-[28px] font-bold leading-[35px] tracking-[0.01em]">
              LARQ Bottle
              <br />
              PureVis™
            </p>
            <p className="mt-4 font-notoSansJP text-[14px] leading-[21px]">
              PureVis™テクノロジーにより、水とボトルに含まれる大腸菌などの生物学的汚染物質を最大99%*除去します。
            </p>
            <button className="mt-5 inline-flex h-10 w-40 items-center justify-center bg-[#153A5B] font-notoSansJP text-[14px] font-bold text-white">
              詳しくはこちら
            </button>
          </div>
        </div>

        <div className="absolute left-[670px] top-[1144px] h-[360px] w-[460px] overflow-hidden">
          <img
            src="/Plastic3.png"
            className="h-full w-full object-cover"
            alt="Plastic3"
          />
          <div className="absolute left-[20px] top-[34px] w-[230px] text-[#153A5B]">
            <p className="font-inter text-[28px] font-bold leading-[35px] tracking-[0.01em]">
              LARQ Bottle
              <br />
              Filtered
            </p>
            <p className="mt-4 font-notoSansJP text-[14px] leading-[21px]">
              フィルターのろ過能力は151リットル、約2カ月使用可能。市販量のペットボトルの水300本分相当。
            </p>
            <button className="mt-5 inline-flex h-10 w-40 items-center justify-center bg-[#153A5B] font-notoSansJP text-[14px] font-bold text-white">
              詳しくはこちら
            </button>
          </div>
        </div>

        <img
          src="/Plastic1.png"
          className="absolute -top-30 left-[100px] h-[236px] w-[960px] max-w-none overflow-hidden"
          alt="Plastic1"
        />
      </div>
    </section>
  );
}
