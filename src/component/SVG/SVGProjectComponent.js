import * as React from "react";
const SVGProjectComponent = (props) => (
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
    className="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
    />
  </svg>
);
export default SVGProjectComponent;
