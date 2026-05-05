"use client";

import { useEffect, useRef } from "react";

interface CircleTextProps {
    isActive?: boolean;
    className?: string;
    onClick?: () => void;
    text?: string;
}

export function CircleText({ isActive = false, className = "", onClick, text }: CircleTextProps) {
    const markerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const marker = markerRef.current;
        if (!marker) return;

        initializeMarker(marker);
    }, []);

    useEffect(() => {
        // Show circle if active
        if (isActive && markerRef.current) {
            const path = markerRef.current.querySelector('path') as SVGPathElement;
            if (path) {
                path.style.visibility = "visible";
                path.style.strokeDashoffset = "0";
            }
        }
    }, [isActive]);

    const initializeMarker = (marker: HTMLSpanElement) => {
        const widthGain = 1;
        const heightGain = 1;
        const width = marker.offsetWidth;
        const height = 2 * marker.offsetHeight;
        const ns = "http://www.w3.org/2000/svg";

        // Remove existing SVG if any
        const existingSvg = marker.querySelector('svg');
        if (existingSvg) {
            existingSvg.remove();
        }

        // Create SVG element
        const svg = document.createElementNS(ns, "svg");
        svg.style.position = "absolute";
        svg.style.left = "0";
        svg.style.top = "-50%";
        svg.style.right = "0";
        svg.style.marginLeft = "auto";
        svg.style.marginRight = "auto";
        svg.style.pointerEvents = "none";
        svg.style.width = `${width}px`;
        svg.style.height = `${height}px`;
        svg.style.transform = `scale(${(2 * widthGain * width) / height}, ${heightGain})`;
        svg.setAttribute("width", width.toString());
        svg.setAttribute("height", height.toString());
        svg.setAttribute("viewBox", "-1 -1 2 2");

        marker.appendChild(svg);

        // Create path element
        const path = document.createElementNS(ns, "path");
        path.setAttribute("pathLength", "100");
        path.setAttribute("vector-effect", "non-scaling-stroke");
        path.style.transition = "stroke-dashoffset 300ms linear";
        path.style.strokeWidth = "1.0";
        path.style.stroke = "#dc0000"; // Red color
        path.style.fill = "none";
        path.style.strokeLinecap = "round";
        path.style.visibility = "hidden";

        svg.appendChild(path);

        const setCircle = (showElement: boolean) => {
            if (showElement) {
                path.style.visibility = "visible";
            } else {
                path.style.visibility = "hidden";
            }

            const pathLength = 1000 * path.getTotalLength();
            path.setAttribute("d", circlePath(-0.15, 0.05, 150, 190, 0.05, 0.3));
            path.setAttribute("stroke-dasharray", pathLength.toString());
            path.setAttribute("stroke-dashoffset", pathLength.toString());
        };

        const circlePath = (
            dr_min: number,
            dr_max: number,
            θ0_min: number,
            θ0_max: number,
            dθ_min: number,
            dθ_max: number
        ): string => {
            const c = 0.551915024494;
            const β = Math.atan(c);
            const d = Math.sqrt(c * c + 1 * 1);
            let r = 0.9;
            let θ = ((θ0_min + Math.random() * (θ0_max - θ0_min)) * Math.PI) / 180;
            let path = "M";
            path += [r * Math.sin(θ), r * Math.cos(θ)].join(",");
            path += " C" + [d * r * Math.sin(θ + β), d * r * Math.cos(θ + β)].join(",");

            for (let i = 0; i < 4; i++) {
                θ += (Math.PI / 2) * (1 + dθ_min + Math.random() * (dθ_max - dθ_min));
                r *= 1 + dr_min + Math.random() * (dr_max - dr_min);
                path += " " + (i ? "S" : "") + [d * r * Math.sin(θ - β), d * r * Math.cos(θ - β)].join(",");
                path += " " + [r * Math.sin(θ), r * Math.cos(θ)].join(",");
            }
            return path;
        };

        // Initialize hidden
        setCircle(false);

        // Mouse events with smooth animation
        marker.addEventListener("mouseenter", () => {
            if (!isActive) { // Only show hover effect if not active
                setCircle(true);
                requestAnimationFrame(() => {
                    path.style.strokeDashoffset = "0";
                });
            }
        });

        marker.addEventListener("mouseleave", () => {
            if (!isActive) { // Only hide if not active
                const pathLength = 1000 * path.getTotalLength();
                path.style.strokeDashoffset = pathLength.toString();
                setTimeout(() => setCircle(false), 400);
            }
        });
    };

    return (
        <span
            ref={markerRef}
            onClick={onClick}
            className={`min-w-17.5 text-center
    relative cursor-pointer text-sm transition-colors duration-200 
    ${isActive ? "font-bold text-foreground" : "text-gray-500 font-medium hover:text-foreground hover:font-bold"}
    ${className}
  `}
            style={{
                textDecoration: "none",
                position: "relative",
                display: "inline-block",
                width: "fit-content",
                height: "fit-content",
                lineHeight: 1,
            }}
        >
            {text}
        </span>

    );
}