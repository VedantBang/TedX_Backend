import React from "react";
import { Box } from "admin-bro";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Box flex justifyContent="center">
        <Box alignItems="center">
          <Box
            flexDirection="column"
            style={{
              display: "flex",
              flexFlow: "column wrap",
              marginTop: "20vh",
            }}
            width={[1, 1 / 2, 1 / 3, 1 / 4]}
          >
            <Box
              style={{
                display: "flex",
                fontSize: "7rem",
                margin: "3rem 3rem 1rem 3rem",
                padding: "2rem",
                fontWeight: "900",
                color: "#FF2B06",
              }}
            >
              TED<sup>x</sup>
              <span
                style={{
                  display: "flex",
                  fontWeight: "100",
                  color: "#000000",
                }}
              >
                BITSGoa
              </span>
            </Box>
            <div
              style={{
                display: "flex",
                fontSize: "1.7rem",
                margin: "0rem 0rem 0rem 5.3rem",
                fontWeight: "600",
                color: "#FF2B06",
                letterSpacing: "2px",
              }}
            >
              x{" "}
              <span style={{ display: "flex", color: "#000000" }}>
                {" "}
                =independently organized TED event
              </span>
            </div>
          </Box>
        </Box>
      </Box>
      <Box flex justifyContent="center">
        <Box alignItems="center">
          <Box
            style={{
              display: "flex",
              marginTop: "50px",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            Welcome to{"   "}
            <span style={{ color: "#FF2B06", marginLeft: "3px" }}>
              TEDx
            </span>{" "}
            BITS Goa Admin Panel
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          marginTop: "23vh",
          justifyContent: "center",
          alignsItems: "flex-end",
          letterSpacing: "1px",
          fontSize: "1.3rem",
        }}
      >
        Made with{" "}
        <span
          style={{ color: "#FF2B06", marginLeft: "3px", marginRight: "3px" }}
        >
          {" "}
          &#x2764;{" "}
        </span>
        by
        <a
          href="https://devsoc.club/"
          target="_blank"
          style={{
            textDecoration: "none",
            marginLeft: "3px",
            bottom: "100",
            color: "#FF2B06",
          }}
        >
          <span>DevSoc</span>
        </a>
      </Box>
    </React.Fragment>
  );
}
