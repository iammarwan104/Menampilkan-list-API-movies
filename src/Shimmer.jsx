import React from "react";
import { ShimmerPostItem } from "react-shimmer-effects";
export default function Shimmer() {
    return (
        <div className="flex items-center justify-center gap-4">
            <ShimmerPostItem card title cta imageWidth={200} />
            <ShimmerPostItem card title cta imageWidth={200} />
            <ShimmerPostItem card title cta imageWidth={200} />
        </div>
    )
}