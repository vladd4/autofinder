import React from "react";
import ContentLoader from "react-content-loader";

export default function CarSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 1100 350"
      backgroundColor="#a1a1a1"
      foregroundColor="#b0b0b0"
    >
      <rect x="0" y="265" rx="0" ry="0" width="600" height="17" />
      <rect x="0" y="290" rx="0" ry="0" width="350" height="17" />
      <rect x="0" y="315" rx="0" ry="0" width="83" height="15" />
      <rect x="0" y="9" rx="0" ry="0" width="1100" height="250" />
    </ContentLoader>
  );
}
