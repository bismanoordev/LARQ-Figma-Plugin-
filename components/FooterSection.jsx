export default function FooterSection() {
  return (
    <div className="bg-[#133A5B] w-full py-[80px] flex flex-col items-center justify-center">
      {/* Navigation Columns */}
      <div className="flex gap-[120px] justify-center w-full max-w-[1200px] mb-[60px]">
        <div className="flex flex-col gap-[25px]">
          <p className="text-[#FFF] font-notoSansJP text-[13px] font-bold">
            プロダクト
          </p>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              プロダクトTOP
            </p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              LARQ ボトル PureVis™
            </p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              LARQ ボトル Filtered
            </p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              LARQ ピッチャー PureVis™
            </p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              フィルター
            </p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              アクセサリー
            </p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              プロダクト比較表
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[25px]">
          <p className="text-[#FFF] font-notoSansJP text-[13px] font-bold">
            テクノロジー
          </p>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              テクノロジーTOP
            </p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              ナノゼロフィルター技術
            </p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              PureVis™ テクノロジー
            </p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              スマートハイドレーション
            </p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">品質評価</p>
          </div>
        </div>
        <div className="flex flex-col gap-[25px]">
          <p className="text-[#FFF] font-notoSansJP text-[13px] font-bold">
            LARQについて
          </p>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[#FFF] font-notoSansJP text-[13px]">会社概要</p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">ビジョン</p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">沿革</p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              LARQの想い
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[25px]">
          <p className="text-[#FFF] font-notoSansJP text-[13px] font-bold">
            サポート
          </p>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[#FFF] font-notoSansJP text-[13px]">FAQ</p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">
              お問い合わせ
            </p>
            <p className="text-[#FFF] font-notoSansJP text-[13px]">保証規定</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#FFF]/20 w-full max-w-[1200px] mb-[40px]"></div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col items-start gap-[10px] mb-[40px] w-full max-w-[1200px] px-10">
        <p className="text-[#FFF] font-inter text-xs">
          © 2023, LARQ Official Website. All Rights Reserved.
        </p>
        <div>
          <p className="text-[#FFF] font-notoSansJP text-[13px]">
            本サイトは、LARQ社の国内の営業・マーケティング・サポートとして、
          </p>
          <p className="text-[#FFF] font-notoSansJP text-[13px]">
            SB C&S株式会社が運営しています。
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-[30px] items-center justify-center w-full mb-[30px]">
        {/* Facebook */}
        <div className="w-[21px] h-[21px] cursor-pointer hover:opacity-80 transition-opacity">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_fb)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4688 3.9375H15.75V0H12.4688C9.94219 0 7.875 2.06719 7.875 4.59375V6.5625H5.25V10.5H7.875V21H11.8125V10.5H15.0938L15.75 6.5625H11.8125V4.59375C11.8125 4.23281 12.1078 3.9375 12.4688 3.9375Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_fb">
                <rect width="21" height="21" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Instagram */}
        <div className="w-[21px] h-[21px] cursor-pointer hover:opacity-80 transition-opacity">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_ig)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.07031 0.0986328H14.9625C18.2766 0.0986328 21 2.78926 21 6.07051V14.9299C21 18.2111 18.2766 20.9018 14.9297 20.9018H6.07031C2.72344 20.9018 0 18.2111 0 14.9299V6.07051C0 2.78926 2.72344 0.0986328 6.07031 0.0986328ZM10.4344 4.88926C13.6828 4.88926 16.3078 7.51426 16.3078 10.7627C16.3078 14.0111 13.6828 16.6361 10.4344 16.6361C7.18594 16.6361 4.56094 14.0111 4.56094 10.7627C4.56094 7.51426 7.21875 4.88926 10.4344 4.88926ZM10.4344 6.85801C12.5672 6.85801 14.3062 8.59707 14.3062 10.7299C14.3062 12.8627 12.5672 14.6018 10.4344 14.6018C8.30156 14.6018 6.5625 12.8627 6.5625 10.7299C6.5625 8.59707 8.30156 6.85801 10.4344 6.85801ZM16.1109 4.06895C16.6359 4.06895 17.0625 4.49551 17.0625 5.02051C17.0625 5.54551 16.6359 5.97207 16.1109 5.97207C15.5859 5.97207 15.1594 5.54551 15.1594 5.02051C15.1594 4.49551 15.5859 4.06895 16.1109 4.06895ZM6.79219 1.80488H14.2078C16.9969 1.80488 19.2937 4.06895 19.2937 6.85801V14.3393C19.2937 17.1283 16.9969 19.3924 14.2078 19.3924H6.79219C4.00313 19.3596 1.70625 17.0627 1.70625 14.3064V6.8252C1.70625 4.06895 4.00313 1.80488 6.79219 1.80488Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_ig">
                <rect width="21" height="21" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* YouTube */}
        <div className="w-[21px] h-[21px] cursor-pointer hover:opacity-80 transition-opacity">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_yt)">
              <path
                d="M20.7791 5.80962C20.7791 5.80962 20.574 4.36327 19.9447 3.72635C19.1466 2.8904 18.252 2.88625 17.8417 2.83732C14.9046 2.625 10.4989 2.625 10.4989 2.625H10.4898C10.4898 2.625 6.08412 2.625 3.14696 2.83732C2.73668 2.88625 1.84239 2.8904 1.04398 3.72635C0.414678 4.36327 0.209897 5.80962 0.209897 5.80962C0.209897 5.80962 0 7.50812 0 9.20659V10.7989C0 12.4974 0.209897 14.1958 0.209897 14.1958C0.209897 14.1958 0.414678 15.6422 1.04398 16.2791C1.84239 17.1151 2.89116 17.0887 3.35827 17.1763C5.03739 17.3373 10.4943 17.3871 10.4943 17.3871C10.4943 17.3871 14.9046 17.3805 17.8417 17.1682C18.252 17.1192 19.1466 17.1151 19.9447 16.2791C20.574 15.6422 20.7791 14.1958 20.7791 14.1958C20.7791 14.1958 20.9887 12.4974 20.9887 10.7989V9.20659C20.9887 7.50812 20.7791 5.80962 20.7791 5.80962ZM8.32751 12.7285L8.32654 6.83125L13.9978 9.79015L8.32751 12.7285Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_yt">
                <rect width="21" height="21" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Twitter */}
        <div className="w-[21px] h-[21px] cursor-pointer hover:opacity-80 transition-opacity">
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_tw)">
              <path
                d="M17.8608 2.55398C18.7183 2.08898 19.377 1.35242 19.687 0.474697C18.8843 0.905499 17.9956 1.2181 17.0493 1.38661C16.292 0.656396 15.2124 0.200195 14.0176 0.200195C11.7241 0.200195 9.86426 1.88286 9.86426 3.95823C9.86426 4.25276 9.90088 4.53947 9.97168 4.81446C6.52002 4.65768 3.45947 3.16159 1.41113 0.887915C1.05371 1.44278 0.848633 2.08849 0.848633 2.77719C0.848633 4.08083 1.58203 5.2311 2.69629 5.90515C2.01562 5.88561 1.375 5.71661 0.814941 5.43527C0.814453 5.4509 0.814453 5.46653 0.814453 5.48265C0.814453 7.30354 2.24609 8.82209 4.146 9.16742C3.79736 9.25338 3.43066 9.2993 3.05176 9.2993C2.78418 9.2993 2.52393 9.27585 2.27051 9.23189C2.79932 10.725 4.33301 11.8113 6.15039 11.8416C4.729 12.8497 2.93799 13.4505 0.992188 13.4505C0.656738 13.4505 0.326172 13.4329 0.00146484 13.3978C1.83936 14.464 4.02246 15.0863 6.36816 15.0863C14.0078 15.0863 18.1855 9.35986 18.1855 4.39392C18.1855 4.23078 18.1816 4.06911 18.1733 3.90792C18.9849 3.37797 19.689 2.71663 20.2456 1.96297C19.501 2.26189 18.7002 2.46361 17.8604 2.55446L17.8608 2.55398Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_tw">
                <rect width="21" height="15.63" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex gap-2 items-center justify-center text-[#FFF] font-notoSansJP text-[11px]">
        <span className="cursor-pointer hover:opacity-80">
          利用規約とプライバシーポリシー
        </span>
        <span>｜</span>
        <span className="cursor-pointer hover:opacity-80">サイトポリシー</span>
      </div>
    </div>
  );
}
