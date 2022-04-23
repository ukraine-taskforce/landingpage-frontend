import React from 'react';

export interface ImgNextProps extends React.SVGProps<SVGSVGElement> {
  alt?: string;
  fill?: string;
}

export const ImgNext: React.FunctionComponent<ImgNextProps> = ({ alt, fill, ...props }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {Boolean(alt) && <title>{alt}</title>}
    <path
      d="M10.9094 3.63647L9.62763 4.91829L14.7004 10.0001H3.63672V11.8183H14.7004L9.62763 16.9001L10.9094 18.1819L18.1822 10.9092L10.9094 3.63647Z"
      fill={fill ?? 'white'}
    />
  </svg>
);
