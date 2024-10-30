import React from "react";

const Logo = ({ onClick }) => {
  return (
    <svg
      width="132"
      height="50"
      viewBox="0 0 132 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M21.4122 17.64C24.6655 17.64 26.9855 18.7067 28.3722 20.84C29.7855 22.9733 30.4922 26.04 30.4922 30.04C30.4922 34.0667 29.7855 37.1467 28.3722 39.28C26.9855 41.3867 24.6655 42.44 21.4122 42.44C18.1322 42.44 15.7855 41.3867 14.3722 39.28C12.9855 37.1467 12.2922 34.0667 12.2922 30.04C12.2922 26.04 12.9855 22.9733 14.3722 20.84C15.7855 18.7067 18.1322 17.64 21.4122 17.64ZM21.4122 33.04C21.9455 33.04 22.4122 32.9333 22.8122 32.72C23.2389 32.5067 23.5855 32.2267 23.8522 31.88C24.1189 31.5333 24.3189 31.1467 24.4522 30.72C24.5855 30.2667 24.6522 29.8 24.6522 29.32C24.6522 28.84 24.5855 28.3733 24.4522 27.92C24.3189 27.4667 24.1189 27.0667 23.8522 26.72C23.5855 26.3733 23.2389 26.0933 22.8122 25.88C22.4122 25.6667 21.9455 25.56 21.4122 25.56C20.3189 25.56 19.4922 25.9467 18.9322 26.72C18.3989 27.4933 18.1322 28.36 18.1322 29.32C18.1322 29.8 18.1989 30.2667 18.3322 30.72C18.4655 31.1467 18.6655 31.5333 18.9322 31.88C19.2255 32.2267 19.5722 32.5067 19.9722 32.72C20.3722 32.9333 20.8522 33.04 21.4122 33.04ZM40.1528 29.4C40.4995 30.5467 41.0728 31.48 41.8728 32.2C42.6728 32.92 43.7795 33.28 45.1928 33.28C45.6195 33.28 46.0728 33.2533 46.5528 33.2C47.0595 33.12 47.5528 33.0267 48.0328 32.92C48.5128 32.7867 48.9662 32.6533 49.3928 32.52C49.8195 32.36 50.1928 32.2133 50.5128 32.08C50.5662 32.8533 50.5928 33.68 50.5928 34.56C50.6195 35.4133 50.6328 36.2667 50.6328 37.12C50.6328 38.5333 50.5928 39.8 50.5128 40.92C48.4328 41.9333 46.0995 42.44 43.5128 42.44C42.3128 42.44 41.0995 42.3067 39.8728 42.04C38.6462 41.7733 37.4595 41.2667 36.3128 40.52C35.2995 39.8533 34.4595 39.08 33.7928 38.2C33.1528 37.2933 32.6462 36.3733 32.2728 35.44C31.8995 34.48 31.6462 33.5467 31.5128 32.64C31.3795 31.7333 31.3128 30.92 31.3128 30.2C31.3128 29.1333 31.4328 28.0267 31.6728 26.88C31.9395 25.7067 32.3395 24.6 32.8728 23.56C33.4062 22.4933 34.0862 21.52 34.9128 20.64C35.7395 19.76 36.7128 19.0667 37.8328 18.56C39.1928 17.9467 40.6328 17.64 42.1528 17.64C43.7528 17.64 45.1928 17.96 46.4728 18.6C47.7528 19.24 48.7928 20.12 49.5928 21.24C50.3662 22.3067 50.8462 23.4933 51.0328 24.8C51.2462 26.1067 51.3528 27.64 51.3528 29.4H40.1528ZM42.4328 21.96C41.8728 21.96 41.3395 22.2 40.8328 22.68C40.3262 23.1333 39.9928 23.9467 39.8328 25.12H45.0728C44.9662 24.0533 44.6462 23.2667 44.1128 22.76C43.6062 22.2267 43.0462 21.96 42.4328 21.96ZM67.3313 8.8C68.2913 8.8 69.1179 8.86666 69.8113 9C70.5313 9.10666 71.1979 9.26667 71.8113 9.48C71.8113 9.93333 71.8113 10.4133 71.8113 10.92C71.8379 11.4267 71.8513 11.9733 71.8513 12.56C71.8513 13.1467 71.8379 13.7733 71.8113 14.44C71.8113 15.08 71.8113 15.68 71.8113 16.24C70.7979 15.6 69.5846 15.28 68.1713 15.28C66.8379 15.28 65.7179 15.5333 64.8113 16.04C63.9313 16.52 63.2113 17.1467 62.6513 17.92C62.1179 18.6933 61.7313 19.5467 61.4913 20.48C61.2779 21.3867 61.1713 22.2533 61.1713 23.08C61.1713 24.2 61.3446 25.2533 61.6913 26.24C62.0379 27.2267 62.5179 28.0933 63.1313 28.84C63.7713 29.56 64.5046 30.1333 65.3313 30.56C66.1846 30.9867 67.1046 31.2 68.0913 31.2C68.5446 31.2 69.1179 31.1333 69.8113 31C70.5313 30.8667 71.1979 30.6133 71.8113 30.24C71.8113 31.1733 71.8113 32.1467 71.8113 33.16C71.8379 34.1733 71.8513 35.16 71.8513 36.12C71.8513 37.1333 71.8379 38.12 71.8113 39.08C71.8113 40.04 71.8113 41 71.8113 41.96C70.3179 42.28 68.7979 42.44 67.2513 42.44C64.9046 42.44 62.7979 42.0533 60.9313 41.28C59.0913 40.5067 57.5179 39.4 56.2113 37.96C54.9313 36.4933 53.9446 34.7333 53.2513 32.68C52.5846 30.6 52.2513 28.28 52.2513 25.72C52.2513 23.2667 52.5713 21.0133 53.2113 18.96C53.8513 16.88 54.7979 15.0933 56.0513 13.6C57.3313 12.08 58.9046 10.9067 60.7713 10.08C62.6646 9.22667 64.8513 8.8 67.3313 8.8ZM82.0763 17.64C85.3296 17.64 87.6496 18.7067 89.0363 20.84C90.4496 22.9733 91.1563 26.04 91.1563 30.04C91.1563 34.0667 90.4496 37.1467 89.0363 39.28C87.6496 41.3867 85.3296 42.44 82.0763 42.44C78.7963 42.44 76.4496 41.3867 75.0363 39.28C73.6496 37.1467 72.9563 34.0667 72.9563 30.04C72.9563 26.04 73.6496 22.9733 75.0363 20.84C76.4496 18.7067 78.7963 17.64 82.0763 17.64ZM82.0763 33.04C82.6096 33.04 83.0763 32.9333 83.4763 32.72C83.9029 32.5067 84.2496 32.2267 84.5163 31.88C84.7829 31.5333 84.9829 31.1467 85.1163 30.72C85.2496 30.2667 85.3163 29.8 85.3163 29.32C85.3163 28.84 85.2496 28.3733 85.1163 27.92C84.9829 27.4667 84.7829 27.0667 84.5163 26.72C84.2496 26.3733 83.9029 26.0933 83.4763 25.88C83.0763 25.6667 82.6096 25.56 82.0763 25.56C80.9829 25.56 80.1563 25.9467 79.5963 26.72C79.0629 27.4933 78.7963 28.36 78.7963 29.32C78.7963 29.8 78.8629 30.2667 78.9963 30.72C79.1296 31.1467 79.3296 31.5333 79.5963 31.88C79.8896 32.2267 80.2363 32.5067 80.6363 32.72C81.0363 32.9333 81.5163 33.04 82.0763 33.04ZM130.981 18.08L124.581 29.4L131.421 42H124.581L119.021 32H118.741C118.741 32.7733 118.741 33.5467 118.741 34.32C118.741 35.0667 118.741 35.84 118.741 36.64C118.767 37.44 118.794 38.28 118.821 39.16C118.847 40.04 118.874 40.9867 118.901 42H112.301C112.434 38.72 112.514 35.0533 112.541 31C112.567 26.92 112.581 22.4533 112.581 17.6C112.581 15.9733 112.581 14.6533 112.581 13.64C112.581 12.6267 112.581 11.8 112.581 11.16C112.581 10.52 112.567 10 112.541 9.6C112.541 9.2 112.527 8.78667 112.501 8.36H119.301C119.221 10.8133 119.154 13.0267 119.101 15C119.047 16.9467 118.994 18.72 118.941 20.32C118.914 21.8933 118.887 23.32 118.861 24.6C118.834 25.8533 118.807 27.0133 118.781 28.08H119.061L124.581 18.08H130.981Z"
        fill="#E54235"
      />
      <g clipPath="url(#clip0_8_1135)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.9233 19.7688C19.8159 19.8151 19.7005 19.8398 19.5835 19.8415C19.4666 19.8431 19.3504 19.8217 19.2418 19.7785C19.1331 19.7352 19.034 19.6709 18.9502 19.5894C18.8664 19.5078 18.7995 19.4105 18.7533 19.303L17.3222 15.9832C17.1354 15.5488 16.8166 15.1843 16.4109 14.9413C16.0053 14.6983 15.5335 14.5891 15.0623 14.6293L15.3561 15.2932L18.0356 19.8532C18.1503 20.0564 18.1807 20.2966 18.12 20.522C18.0594 20.7473 17.9127 20.9398 17.7115 21.0581C17.5103 21.1763 17.2707 21.2108 17.0443 21.1541C16.8179 21.0974 16.6229 20.954 16.5012 20.7549L13.8216 16.1949L13.3838 15.6149C13.1194 16.0071 12.9853 16.4725 13.0003 16.9451C13.0154 17.4178 13.1789 17.8737 13.4676 18.2482L15.6722 21.1143C15.8099 21.3018 15.8687 21.5358 15.836 21.7662C15.8033 21.9965 15.6816 22.2049 15.4972 22.3467C15.3127 22.4885 15.0801 22.5524 14.8491 22.5248C14.618 22.4972 14.407 22.3802 14.2612 22.1989L12.0566 19.3328C11.4782 18.5806 11.1834 17.6485 11.224 16.7005C11.2646 15.7525 11.638 14.849 12.2785 14.149L7.64326 8.00229C7.46647 7.76816 7.34121 7.49928 7.2757 7.21331C7.2102 6.92734 7.20593 6.63075 7.26317 6.34302C7.32042 6.05528 7.43789 5.78291 7.60786 5.54379C7.77784 5.30467 7.99647 5.10421 8.24941 4.95558C8.50235 4.80695 8.78387 4.71351 9.07549 4.68139C9.3671 4.64927 9.66221 4.67921 9.94143 4.76923C10.2207 4.85926 10.4777 5.00733 10.6956 5.20372C10.9136 5.40012 11.0875 5.6404 11.206 5.90878L14.3198 12.9495C15.2431 12.7306 16.214 12.8441 17.062 13.27C17.9099 13.6959 18.5807 14.4071 18.9563 15.2785L20.388 18.5994C20.4813 18.8162 20.4847 19.0611 20.3974 19.2804C20.3101 19.4996 20.1401 19.6755 19.9233 19.7688Z"
          fill="#C9C9C9"
        />
      </g>
      <g filter="url(#filter0_d_8_1135)">
        <path
          d="M111.216 30.3412C111.216 36.3975 109.023 39.114 101.347 41.3071C94.7673 43.5003 88.1878 37.4941 88.1878 31.4378C88.1878 25.3815 91.4776 19.3754 100.25 19.3754C106.83 19.3754 111.216 24.285 111.216 30.3412Z"
          fill="white"
        />
        <circle cx="101.018" cy="29.5739" r="4.93465" fill="#FFC800" />
      </g>
      <defs>
        <filter
          id="filter0_d_8_1135"
          x="85.1878"
          y="16.3754"
          width="31.0284"
          height="30.3934"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_8_1135"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_8_1135"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_8_1135">
          <rect
            width="21.3607"
            height="21.3607"
            fill="white"
            transform="translate(5.55804 0.375366) rotate(14.5609)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
