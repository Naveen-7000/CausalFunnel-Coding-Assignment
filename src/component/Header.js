import React from "react";
// import "../App.css";
import "./Css/header.css"
import SVGCodeComponent from "./SVG/SVGCodeComponent";
import SVGRepoComponent from "./SVG/SVGRepoComponent";
import SVGIssueComponent from "./SVG/SVGIssueComponent";
import SVGPullComponent from "./SVG/SVGPullComponent";
import SVGSecurityComponent from "./SVG/SVGSecurityComponent";
import SVGActionComponent from "./SVG/SVGIActionComponent";
import SVGProjectComponent from "./SVG/SVGProjectComponent";
import SVGWikiComponent from "./SVG/SVGWikiComponent";
import SVGInsightComponent from "./SVG/SVGInsightComponent";
import SVGWatch from "./SVG/SVGWatch";
import SVGStar from "./SVG/SVGStar";
import SVGFork from "./SVG/SVGFork";

const Header = (props) => {
  return (
    <div className="container">
      <div className="upper-container">
        {/* left */}
        <div className="left">
          <SVGRepoComponent />
          <div>
            <a className="a-link" href="/">
              facebook
            </a>
            <span
              style={{
                color: "#57606a",
                margin: "0 3px",
              }}
            >
              /
            </span>
            <a
              style={{
                color: "#0969da",
                fontWeight: "500",
                fontSize: 20,
                textDecoration:"none",
              }} 
              
              href="/"
            >
              {" "}
              react
            </a>
          </div>
          <div
            style={{
              margin: "0 5px",
            }}
          >
            <p
              style={{
                border: "1px solid #d3dae1",
                borderRadius: "12px",
                textAlign: "center",
                color: "#57606a",
                fontSize: "12px",
                fontWeight: "500",
                display: "inline-block",
                padding: "2px 6px",
              }}
            >
              Public
            </p>
          </div>
        </div>
        {/* right */}
        <div className="right">
          <div>
            <div
              style={{
                border: "1px solid #d3dae1",
                borderRadius: "6px",
                textAlign: "center",
                color:"#2f2e2f",
                fontSize: "12px",
                fontWeight: "500",
                display: "flex",
                justifyContent:"center",
                alignItems:"center",
                padding: "5px 10px",
              }}
            >
              <SVGWatch /> <span style={{
                marginLeft:4,
                color:"#2f2e2f",
              }}>Watch</span><span style={{
                backgroundColor:"#e5e7e9",
                padding:"1px 4px",
                borderRadius:8,
                marginLeft:4,
                color:"#2f2e2f",
              }}>6.6k</span>
            </div>
          </div>

          <div>
            <div
              style={{
                border: "1px solid #d3dae1",
                borderRadius: "6px",
                textAlign: "center",
                color: "#4a545f",
                fontSize: "12px",
                fontWeight: "500",
                display: "flex",
                padding: "3px 10px",
              }}
            >
             <SVGFork /><span style={{
                marginLeft:6,
                color:"#2f2e2f",
              }}>Fork</span><span style={{
                backgroundColor:"#e5e7e9",
                padding:"1px 4px",
                borderRadius:8,
                marginLeft:6,
                color:"#2f2e2f",
              }}>41.8k</span>
            </div>
          </div>
          <div>
            <div
              style={{
                border: "1px solid #d3dae1",
                borderRadius: "6px",
                textAlign: "center",
                color: "#4a545f",
                fontSize: "12px",
                fontWeight: "500",
                display: "flex",
                padding: "3px 10px",
              }}
            >
             <SVGStar /><span style={{
                marginLeft:6,
                color:"#2f2e2f",
              }}>Star</span><span style={{
                backgroundColor:"#e5e7e9",
                padding:"1px 4px",
                borderRadius:8,
                marginLeft:6,
                color:"#2f2e2f",
              }}>41.8k</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lower-container">
        <div className="sub-section">
          <div className="sub-section-list"> <SVGCodeComponent />Code</div>
        </div>
        <div className="sub-section">
          
          <div className="sub-section-list" id="selected"><SVGIssueComponent color={"#57606a"} />Issue <span className="number">996</span></div>
        </div>
        <div className="sub-section">
          <div className="sub-section-list" id="side"> <SVGPullComponent />Pull request</div>
        </div>
        <div className="sub-section">
          <div className="sub-section-list" ><SVGActionComponent />Actions</div>
        </div>
        <div className="sub-section">
          <div className="sub-section-list"><SVGProjectComponent />Project</div>
        </div>
        <div className="sub-section">
          
          <div className="sub-section-list"> <SVGWikiComponent />Wiki</div>
        </div>
        <div className="sub-section">
          <div className="sub-section-list"><SVGSecurityComponent />Security</div>
        </div>
        <div className="sub-section">
          <div className="sub-section-list"><SVGInsightComponent />Insights</div>
        </div>
      </div>
      <div className="lower-container-mobile">
        <div className="sub-section-lower">
          <div className="sub-section-list-lower"> <SVGCodeComponent />Code</div>
        </div>
        <div className="sub-section-lower">
          
          <button className="sub-section-list-lower" id="selected-lower"><SVGIssueComponent />Issue<span className="number">996</span></button>
        </div>
        <div className="sub-section-lower">
         
          <button className="sub-section-list-lower" id="side-lower"> <SVGPullComponent />Pull request</button>
        </div>
        
      </div>

    </div>
  );
};

export default Header;
