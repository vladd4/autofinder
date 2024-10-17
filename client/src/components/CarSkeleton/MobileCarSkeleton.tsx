import React from "react";
import ContentLoader from "react-content-loader";

export default function MobileCarSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 1100 710"
      backgroundColor="#a1a1a1"
      foregroundColor="#b0b0b0"
    >
      <rect x="0" y="0" rx="0" ry="0" width="1100" height="670" />
    </ContentLoader>
  );
}
