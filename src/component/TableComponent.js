import React, { useEffect, useState } from "react";
import SVGIssueComponent from "./SVG/SVGIssueComponent";
import SVGCheckComponent from "./SVG/SVGCheckComponent";
import Label from "./Label";
import { data } from "../API/api";
import SVGCommentComponent from "./SVG/SVGCommentComponent";
import { getDateDifference } from "../helper";

const TableComponent = () => {
  const [issues, setIssue] = useState([]);
  const fetchData = async () => {
    return await fetch(
      "https://api.github.com/repos/facebook/react/issues"
    )
      .then((response) => response.json())
      .then((data) => setIssue(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(issues);

  return (
    <>
      <div className="table-left-mobile">
        <span className="table-header-span">
          {" "}
          <SVGIssueComponent />
          916 Open
        </span>
        <span className="table-header-span2">
          <SVGCheckComponent /> 11,087 Closed
        </span>
      </div>
      <div className="table">
        <div className="table-header">
          <div className="table-header-container">
            <div className="table-left">
              <span className="table-header-span">
                {" "}
                <SVGIssueComponent />
                916 Open
              </span>
              <span className="table-header-span2">
                <SVGCheckComponent /> 11,087 Closed
              </span>
            </div>
            <div className="table-right">
              <div className="table-right-dropdown">Author</div>
              <div className="table-right-dropdown">Label</div>
              <div className="table-right-dropdown">Projects</div>
              <div className="table-right-dropdown">Milestones</div>
              <div className="table-right-dropdown">Assignee</div>
              <div className="table-right-dropdown">Sort</div>
            </div>
          </div>
        </div>
        <div className="table-content">
          <div className="table-content-container">
            {issues.map((item, idx) => (
              <div
              key={item.id}
                style={{
                  padding: "4px 20px",
                  borderBottom: "1px solid rgba(134, 144, 154, 0.5)",
                }}
                className="on-hover"
              >
                <div className="table-content-item">
                  <span className="table-content-span">
                    {" "}
                    <SVGIssueComponent
                      color={item.state === "open" ? "1a7f37" : ""}
                    /> 
                    <a className="issue-title" >
                    {item.title}
                    </a>
                  </span>{" "}
                  {item.labels.map((label, idx) => (
                    <div style={{ paddingLeft: 4, display: "inline-block" }}>
                      <Label name={label.name} color={label.color} />
                    </div>
                  ))}
                  {item.comments > 0 ? (
                    <div className="comment">
                      <SVGCommentComponent number={item.comments}  />
                    </div>
                  ) : null}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#57606a",
                    paddingTop: 4,
                    paddingBottom: 4,
                    paddingLeft: 20,
                  }}
                >
                  #{item.number} Opened{" "}
                  {getDateDifference(new Date(), item.created_at)} by{" "}
                  {item.user.login}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
