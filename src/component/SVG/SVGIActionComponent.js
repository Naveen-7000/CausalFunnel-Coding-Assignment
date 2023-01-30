import * as React from "react";
const SVGActionComponent = (props) => (
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
    className="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"
    />
  </svg>
);
export default SVGActionComponent;
