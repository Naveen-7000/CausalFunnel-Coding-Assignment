import * as React from "react";
const SVGCodeComponent = (props) => (
  <svg
    aria-hidden="true"
    height={14}
    viewBox="0 0 14 12"
    width={14}
    data-view-component="true"
    style={{
      display:"inline-block",
      overflowX:"visible",
      overflowY:"visible",
      alignSelf:"center",
      fill:"#57606a",
       marginRight:8,
  }}
    className="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
    />
  </svg>
);
export default SVGCodeComponent;
