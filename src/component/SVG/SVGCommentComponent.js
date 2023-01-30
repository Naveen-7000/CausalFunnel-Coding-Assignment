import * as React from "react";

const SVGCommentComponent = (props) => {

  return (
  <div style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    cursor:"pointer",
  }}>
  <svg
    aria-hidden="true"
    height={16}
    viewBox="0 0 16 14"
    width={16}
    data-view-component="true"
    className="octicon octicon-comment v-align-middle"
    {...props}
    style={{
        fill:"#57606a",
    }}
  >
    <path
      fillRule="evenodd"
      d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
    />
  </svg>
  <div style={{
    paddingLeft:"2px",
    fontSize:"12px",
    fontWeight:"500",
    color:"#57606a",
  }}>
  {props.number}
  </div>
  </div>
)
};
export default SVGCommentComponent;
