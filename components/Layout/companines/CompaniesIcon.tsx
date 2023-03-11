import React from "react";

const CompaniesIcon = () => {
  return (
    <svg
      width="904"
      height="93"
      viewBox="0 0 904 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="904" height="93" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_146_3113"
            transform="scale(0.00110619 0.0107527)"
          />
        </pattern>
        <image
          id="image0_146_3113"
          width="904"
          height="93"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default CompaniesIcon;
