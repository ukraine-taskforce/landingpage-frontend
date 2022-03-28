import React from "react";

export interface AssetNameProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export const AssetName: React.FunctionComponent<AssetNameProps> = ({
  width = 12,
  height = 80,
  ...props
}) => {
  return (
    <svg width="97" height="29" viewBox="0 0 97 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.38679 22.1731C5.33868 21.7675 5.1531 21.4514 4.82319 21.2246C4.49327 20.9978 4.074 20.8878 3.57226 20.8878C3.21485 20.8878 2.89868 20.9428 2.6375 21.0597C2.37631 21.1765 2.17012 21.3277 2.02578 21.5201C1.88144 21.7126 1.81271 21.9394 1.81271 22.1868C1.81271 22.393 1.86083 22.5786 1.95705 22.7298C2.05328 22.881 2.18387 23.0048 2.34882 23.1079C2.50691 23.211 2.68562 23.2934 2.87119 23.3621C3.05677 23.4308 3.23547 23.486 3.40731 23.5272L4.26646 23.747C4.54826 23.8158 4.83006 23.9121 5.12561 24.029C5.42116 24.1458 5.68922 24.297 5.94353 24.4894C6.19784 24.6819 6.39716 24.9156 6.55525 25.1974C6.71333 25.4792 6.78893 25.8159 6.78893 26.2146C6.78893 26.7095 6.65834 27.1562 6.40403 27.5411C6.14972 27.926 5.77857 28.2285 5.29744 28.4553C4.81632 28.6752 4.23209 28.7921 3.54477 28.7921C2.85745 28.7921 2.32134 28.689 1.84021 28.4759C1.35908 28.2697 0.987931 27.9741 0.713001 27.5892C0.438072 27.2043 0.293728 26.7507 0.266235 26.2215H1.59277C1.62027 26.5376 1.72336 26.7988 1.90207 27.0118C2.08077 27.2249 2.31446 27.3762 2.60314 27.4793C2.88494 27.5824 3.20111 27.6305 3.5379 27.6305C3.90905 27.6305 4.24584 27.5687 4.54138 27.4518C4.83693 27.335 5.06376 27.17 5.23559 26.957C5.40742 26.7439 5.48989 26.4964 5.48989 26.2077C5.48989 25.9465 5.41428 25.7335 5.26994 25.5686C5.12561 25.4036 4.92629 25.2661 4.67198 25.1561C4.42454 25.0461 4.14274 24.9499 3.82657 24.8675L2.78871 24.5856C2.08764 24.3931 1.53091 24.1113 1.11852 23.7402C0.706126 23.369 0.506803 22.8811 0.506803 22.2694C0.506803 21.7608 0.644261 21.3209 0.91919 20.9429C1.19412 20.5649 1.56528 20.2693 2.03266 20.0631C2.50004 19.85 3.02928 19.7469 3.62037 19.7469C4.21147 19.7469 4.74071 19.85 5.19434 20.0562C5.64797 20.2624 6.01226 20.5511 6.27344 20.9154C6.53462 21.2796 6.67208 21.6988 6.68583 22.1662H5.40742L5.38679 22.1731Z"
        fill="#111E6A"
      />
      <path
        d="M7.32495 19.8706H8.83019L11.119 23.8571H11.2152L13.504 19.8706H15.0092L11.8269 25.1974V28.6409H10.5073V25.1974L7.32495 19.8706V19.8706Z"
        fill="#111E6A"
      />
      <path
        d="M15.8959 28.6409V19.8706H17.2224V27.5067H21.1951V28.6477H15.8959V28.6409Z"
        fill="#111E6A"
      />
      <path
        d="M29.4225 19.8706V28.6409H28.2059L23.7452 22.2075H23.6627V28.6409H22.3362V19.8706H23.5596L28.0203 26.3107H28.1028V19.8706H29.4156H29.4225Z"
        fill="#111E6A"
      />
      <path d="M32.3092 19.8706V28.6409H30.9827V19.8706H32.3092Z" fill="#111E6A" />
      <path
        d="M38.6601 22.1731C38.612 21.7675 38.4264 21.4514 38.0965 21.2246C37.7666 20.9978 37.3473 20.8878 36.8456 20.8878C36.4882 20.8878 36.172 20.9428 35.9108 21.0597C35.6496 21.1765 35.4434 21.3277 35.2991 21.5201C35.1548 21.7126 35.086 21.9394 35.086 22.1868C35.086 22.393 35.1341 22.5786 35.2304 22.7298C35.3266 22.881 35.4572 23.0048 35.6221 23.1079C35.7802 23.211 35.9589 23.2934 36.1445 23.3621C36.3301 23.4308 36.5088 23.486 36.6806 23.5272L37.5398 23.747C37.8216 23.8158 38.1034 23.9121 38.3989 24.029C38.6945 24.1458 38.9625 24.297 39.2168 24.4894C39.4711 24.6819 39.6705 24.9156 39.8286 25.1974C39.9866 25.4792 40.0622 25.8159 40.0622 26.2146C40.0622 26.7095 39.9316 27.1562 39.6773 27.5411C39.423 27.926 39.0519 28.2285 38.5708 28.4553C38.0896 28.6752 37.5054 28.7921 36.8181 28.7921C36.1308 28.7921 35.5946 28.689 35.1135 28.4759C34.6324 28.2697 34.2612 27.9741 33.9863 27.5892C33.7114 27.2043 33.567 26.7507 33.5396 26.2215H34.8661C34.8936 26.5376 34.9967 26.7988 35.1754 27.0118C35.3541 27.2249 35.5878 27.3762 35.8764 27.4793C36.1582 27.5824 36.4744 27.6305 36.8112 27.6305C37.1824 27.6305 37.5192 27.5687 37.8147 27.4518C38.1102 27.335 38.3371 27.17 38.5089 26.957C38.6807 26.7439 38.7632 26.4964 38.7632 26.2077C38.7632 25.9465 38.6876 25.7335 38.5433 25.5686C38.3989 25.4036 38.1996 25.2661 37.9453 25.1561C37.6979 25.0461 37.416 24.9499 37.0999 24.8675L36.062 24.5856C35.361 24.3931 34.8042 24.1113 34.3918 23.7402C33.9794 23.369 33.7801 22.8811 33.7801 22.2694C33.7801 21.7608 33.9176 21.3209 34.1925 20.9429C34.4674 20.5649 34.8386 20.2693 35.306 20.0631C35.7734 19.85 36.3026 19.7469 36.8937 19.7469C37.4848 19.7469 38.014 19.85 38.4677 20.0562C38.9213 20.2624 39.2856 20.5511 39.5468 20.9154C39.8079 21.2796 39.9454 21.6988 39.9591 22.1662H38.6807L38.6601 22.1731Z"
        fill="#111E6A"
      />
      <path
        d="M41.2788 28.6409V19.8706H42.6053V23.6853H46.9767V19.8706H48.3032V28.6409H46.9767V24.8124H42.6053V28.6409H41.2788Z"
        fill="#111E6A"
      />
      <path d="M51.1901 19.8706V28.6409H49.8635V19.8706H51.1901Z" fill="#111E6A" />
      <path
        d="M53.4994 28.7233C53.2657 28.7233 53.0664 28.6409 52.8946 28.4759C52.7227 28.311 52.6403 28.1047 52.6403 27.871C52.6403 27.6373 52.7227 27.438 52.8946 27.2662C53.0664 27.0944 53.2657 27.0187 53.4994 27.0187C53.7331 27.0187 53.9324 27.1013 54.1043 27.2662C54.2761 27.4312 54.3586 27.6373 54.3586 27.871C54.3586 28.0291 54.3173 28.1735 54.2417 28.3041C54.1661 28.4347 54.0561 28.5377 53.9324 28.6133C53.8087 28.6889 53.6644 28.7301 53.5063 28.7301L53.4994 28.7233Z"
        fill="#111E6A"
      />
      <path
        d="M63.0943 22.7229H61.7609C61.7128 22.4343 61.6166 22.1869 61.4722 21.967C61.3348 21.747 61.1629 21.5683 60.9567 21.4171C60.7574 21.2659 60.5306 21.149 60.2763 21.0734C60.0288 20.9978 59.7608 20.9565 59.479 20.9565C58.9704 20.9565 58.5236 21.0871 58.125 21.3345C57.7263 21.5888 57.4101 21.9601 57.1833 22.455C56.9565 22.9498 56.8397 23.5477 56.8397 24.2557C56.8397 24.9636 56.9565 25.5754 57.1833 26.0634C57.4101 26.5514 57.7263 26.9225 58.125 27.1768C58.5236 27.4311 58.9773 27.5548 59.4721 27.5548C59.7471 27.5548 60.0151 27.5205 60.2625 27.4381C60.51 27.3624 60.7368 27.2525 60.943 27.1013C61.1492 26.9501 61.321 26.7713 61.4585 26.5583C61.6028 26.3452 61.699 26.0977 61.754 25.8159H63.0874C63.0187 26.2489 62.8812 26.6475 62.6751 27.0118C62.4689 27.3761 62.2077 27.6855 61.8915 27.9467C61.5753 28.2078 61.211 28.4071 60.7987 28.5514C60.3931 28.6958 59.9464 28.7645 59.4652 28.7645C58.7092 28.7645 58.0287 28.5858 57.4376 28.2215C56.8465 27.8572 56.3792 27.3417 56.0355 26.6682C55.6919 25.9946 55.52 25.1904 55.52 24.2557C55.52 23.3209 55.6919 22.5167 56.0355 21.8431C56.3792 21.1696 56.8465 20.6541 57.4376 20.2898C58.0287 19.9255 58.7092 19.7469 59.4652 19.7469C59.9326 19.7469 60.3656 19.8155 60.7712 19.9461C61.1767 20.0767 61.541 20.2761 61.864 20.5304C62.187 20.7847 62.4551 21.101 62.6682 21.4653C62.8812 21.8295 63.0256 22.2487 63.0943 22.7229V22.7229Z"
        fill="#111E6A"
      />
      <path
        d="M71.9403 24.2557C71.9403 25.1904 71.7684 25.9946 71.4248 26.6682C71.0811 27.3417 70.6137 27.8572 70.0158 28.2215C69.4178 28.5858 68.7442 28.7645 67.9882 28.7645C67.2321 28.7645 66.5517 28.5858 65.9537 28.2215C65.3557 27.8572 64.8883 27.3417 64.5447 26.6682C64.201 25.9946 64.0292 25.1904 64.0292 24.2557C64.0292 23.3209 64.201 22.5167 64.5447 21.8431C64.8883 21.1696 65.3557 20.6541 65.9537 20.2898C66.5517 19.9255 67.2252 19.7469 67.9882 19.7469C68.7511 19.7469 69.4178 19.9255 70.0158 20.2898C70.6137 20.6541 71.0811 21.1696 71.4248 21.8431C71.7684 22.5167 71.9403 23.3209 71.9403 24.2557ZM70.6275 24.2557C70.6275 23.5408 70.5106 22.943 70.2838 22.4481C70.057 21.9601 69.7408 21.5888 69.3422 21.3345C68.9435 21.0802 68.4968 20.9565 67.9882 20.9565C67.4795 20.9565 67.0328 21.0802 66.6341 21.3345C66.2355 21.5888 65.9262 21.9601 65.6925 22.4481C65.4657 22.9361 65.3488 23.5408 65.3488 24.2557C65.3488 24.9705 65.4657 25.5685 65.6925 26.0634C65.9193 26.5583 66.2355 26.9225 66.6341 27.1768C67.0328 27.4311 67.4795 27.5548 67.9882 27.5548C68.4968 27.5548 68.9435 27.4311 69.3422 27.1768C69.7408 26.9225 70.057 26.5514 70.2838 26.0634C70.5106 25.5754 70.6275 24.9705 70.6275 24.2557Z"
        fill="#111E6A"
      />
      <path
        d="M73.2186 19.8706H74.827L77.6175 26.6888H77.7206L80.5111 19.8706H82.1194V28.6409H80.8617V22.29H80.7792L78.1948 28.6271H77.1501L74.5658 22.29H74.4833V28.6409H73.2255V19.8706H73.2186Z"
        fill="#111E6A"
      />
      <path
        d="M13.2429 5.1962H9.8681C9.81999 4.85254 9.73064 4.53646 9.59318 4.25466C9.45571 3.97285 9.27014 3.73914 9.03645 3.53981C8.80276 3.34049 8.5347 3.18917 8.2254 3.08607C7.90923 2.98297 7.56558 2.928 7.18755 2.928C6.51397 2.928 5.93662 3.09311 5.45549 3.42302C4.97437 3.75294 4.59634 4.22707 4.34203 4.84566C4.08085 5.46425 3.95713 6.22033 3.95713 7.1001C3.95713 7.97987 4.08772 8.79099 4.3489 9.40958C4.61008 10.0282 4.98123 10.4956 5.46236 10.8049C5.94349 11.121 6.5071 11.2722 7.16693 11.2722C7.53808 11.2722 7.87487 11.2241 8.17729 11.1279C8.47972 11.0317 8.74777 10.8941 8.98146 10.7154C9.21515 10.5367 9.4076 10.3099 9.55881 10.0487C9.71002 9.78756 9.81312 9.4851 9.87498 9.15519L13.2497 9.17583C13.1879 9.78754 13.016 10.3925 12.7205 10.9836C12.4249 11.5747 12.0194 12.1176 11.5108 12.6056C10.9953 13.0936 10.3699 13.4853 9.63442 13.774C8.89898 14.0627 8.05357 14.2071 7.10506 14.2071C5.85413 14.2071 4.7338 13.9322 3.74405 13.3823C2.75431 12.8325 1.97764 12.0283 1.40029 10.9698C0.829813 9.91134 0.541138 8.62596 0.541138 7.10698C0.541138 5.58799 0.829806 4.29591 1.41403 3.23743C1.99825 2.17895 2.78181 1.37478 3.77155 0.824922C4.7613 0.275063 5.87475 0 7.10506 0C7.9436 0 8.72027 0.116852 9.42822 0.350541C10.143 0.584231 10.7685 0.921167 11.3046 1.36105C11.8407 1.80094 12.2875 2.35071 12.6243 2.98992C12.9611 3.62913 13.1741 4.37141 13.2497 5.1962H13.2429Z"
        fill="#111E6A"
      />
      <path
        d="M14.5763 0.185608H17.9098V8.15862H18.0266L23.4703 0.185608H26.3501V14.0215H23.0097V6.03473H22.9204L17.4081 14.0215H14.5763V0.185608V0.185608Z"
        fill="#111E6A"
      />
      <path
        d="M27.2712 14.0146V11.3959L27.6492 11.3546C28.1372 11.2996 28.529 11.1004 28.8383 10.7636C29.1476 10.4268 29.3744 9.89062 29.5393 9.15519C29.6974 8.41975 29.8005 7.42323 29.8486 6.16543L30.0686 0.178711H39.7736V14.0146H36.5363V2.81809H33.1546L32.9416 7.3956C32.866 8.97644 32.6666 10.2549 32.3367 11.224C32.0068 12.1932 31.5119 12.9012 30.8315 13.3479C30.151 13.7947 29.2438 14.0146 28.1028 14.0146H27.2643H27.2712Z"
        fill="#111E6A"
      />
      <path
        d="M44.1379 5.05877H47.2171C48.3443 5.05877 49.3272 5.24438 50.1589 5.60866C50.9905 5.97294 51.6366 6.48843 52.0971 7.14826C52.5576 7.80809 52.7844 8.59157 52.7844 9.48509C52.7844 10.3786 52.5576 11.169 52.0971 11.8494C51.6366 12.5299 50.9974 13.0592 50.1589 13.4441C49.3272 13.829 48.3443 14.0146 47.2171 14.0146H42.0485V0.178711H45.382V11.3615H47.2103C47.6983 11.3615 48.1106 11.2791 48.4406 11.1072C48.7773 10.9354 49.0317 10.7086 49.2035 10.4199C49.3753 10.1312 49.4647 9.8081 49.4578 9.45069C49.4578 8.9352 49.2722 8.50914 48.8805 8.16548C48.4956 7.82182 47.9319 7.64999 47.2034 7.64999H44.1242V5.05877H44.1379Z"
        fill="#111E6A"
      />
      <path
        d="M54.4478 14.0146V0.178711H57.7881V5.73233H63.2386V0.178711H66.5721V14.0146H63.2386V8.4541H57.7881V14.0146H54.4478Z"
        fill="#111E6A"
      />
      <path d="M72.1327 0.185608V14.0215H68.7923V0.185608H72.1327Z" fill="#111E6A" />
      <path
        d="M74.3939 0.185608H77.6518V11.3959H81.3289V0.185608H84.5594V11.3959H88.1678V0.185608H91.4051V14.0215H74.4007V0.185608H74.3939Z"
        fill="#111E6A"
      />
      <path d="M96.9999 0.185608V14.0215H93.6595V0.185608H96.9999Z" fill="#111E6A" />
    </svg>
  );
};
