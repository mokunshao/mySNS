import React from "react";
import loading from "./loading.svg";

export default function Loading() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={loading} alt="loading" />
    </div>
  );
}
