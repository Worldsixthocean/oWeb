"use client"
import * as React from "react";

import { IconSvgProps } from "@/types";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => {

  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  const monowhite = !(theme === "light" || isSSR);

  return(
<svg
   width={size}
   height={size}
   viewBox="0 0 31 31"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg"
   {...props}
   >
  <defs
     id="defs1" />
  <g
     id="layer1">
     <g
       id="g11-98-1"
       transform="matrix(0.19486221,0,0,0.19486221,53.300639,392.72073)"
       style={monowhite ? { fill: '#ffffff', fillOpacity: 1 } : { fill: '#233e4a', fillOpacity: 1 }}>
      <path
        className="cls-1"
         d="m -257.17086,-1980.073 c 35.7893,-45.451 91.22064,-40.2117 117.51172,-10.9336 20.61354,22.9555 19.9252,69.944 -14.50308,94.7555 38.36693,-70.2678 -34.59085,-123.1107 -103.00864,-83.8219 z"
         id="path2-4-9"
         style={monowhite ? { fill: '#ffffff', fillOpacity: 1, stroke: '#ffffff', strokeWidth: 0, strokeDasharray: 'none', strokeOpacity: 1 } : { fill: '#233e4a', fillOpacity: 1, stroke: '#ffffff', strokeWidth: 0, strokeDasharray: 'none', strokeOpacity: 1 }} />
      <path
        className="cls-1"
         d="m -181.89857,-1859.8136 c -16.65298,-4.4069 -37.64033,-18.1992 -39.77816,-22.9711 36.60036,14.7075 115.71867,-5.7661 97.03397,-92.5669 19.22494,32.2938 8.95101,110.0422 -57.25581,115.538 z"
         id="path3-7-5"
         style={monowhite ? { fill: '#ffffff', fillOpacity: 1, stroke: '#ffffff', strokeWidth: 0, strokeDasharray: 'none', strokeOpacity: 1 } : { fill: '#00587e', fillOpacity: 1, stroke: '#ffffff', strokeWidth: 0, strokeDasharray: 'none', strokeOpacity: 1 }} />
      <path
        className="cls-1"
         d="m -148.04276,-1946.1335 c -19.70653,-23.7876 -79.54882,-42.258 -119.07596,-18.3474 3.87962,-5.0455 7.26908,-10.5284 13.23099,-13.7029 37.29201,-19.8564 87.13287,-16.519 105.84497,32.0503 z"
         id="path4-8-9"
         style={monowhite ? { fill: '#ffffff', fillOpacity: 1, stroke: '#ffffff', strokeWidth: 0, strokeDasharray: 'none', strokeOpacity: 1 } : { fill: '#231815', fillOpacity: 1, stroke: '#ffffff', strokeWidth: 0, strokeDasharray: 'none', strokeOpacity: 1 }} />
      <path
        className="cls-1"
         d="m -191.7861,-1858.359 c -7.13212,1.7659 -23.91886,-0.23 -35.2759,-4.3973 -12.04671,-4.4218 -21.56888,-12.0346 -28.41992,-22.9908 -14.98215,-21.8323 -15.5657,-41.9973 -15.25586,-45.1331 1.22181,4.3318 12.88536,35.4556 32.92797,40.9919 1.17197,0.325 2.13394,0.8224 2.91037,1.7629 11.24985,14.1707 26.87909,22.7603 43.11334,29.7713 z"
         id="path5-4-1"
         style={monowhite ? { fill: '#ffffff', fillOpacity: 1, stroke: '#ffffff', strokeWidth: 0, strokeDasharray: 'none', strokeOpacity: 1 } : { fill: '#3d87a6', fillOpacity: 1, stroke: '#ffffff', strokeWidth: 0, strokeDasharray: 'none', strokeOpacity: 1 }} />
    </g>
  </g>
</svg>
)};