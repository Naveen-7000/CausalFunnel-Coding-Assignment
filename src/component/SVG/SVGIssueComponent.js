import * as React from "react";
const SVGIssueComponent = (props) => (
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
      fill:props.color !== "" ? `#${props.color}` : "#57606a",
       marginRight:8,
  }}
    className="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline"
    {...props}
  >
    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    <path
      fillRule="evenodd"
      d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
    />
  </svg>
);
export default SVGIssueComponent;
