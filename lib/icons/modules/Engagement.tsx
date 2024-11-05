import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEngagement = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25" ref={ref} {...props}><g filter="url(#Engagement_svg__a)"><path fill="currentColor" fillRule="evenodd" d="M7.2 4.03A3.2 3.2 0 0 0 4 7.23v6.4a3.2 3.2 0 0 0 3.2 3.2v2.234c0 1.069 1.293 1.604 2.049.848l2.848-2.848a.8.8 0 0 1 .566-.235H16.8a3.2 3.2 0 0 0 3.2-3.2v-6.4a3.2 3.2 0 0 0-3.2-3.2zm1.349 6.953q.4.747 1.097 1.44c.779.696 1.21 1.047 1.956 1.515h.002c.126.07.262.122.398.122s.27-.052.394-.122q.174-.096.357-.216v-.001a10.7 10.7 0 0 0 1.605-1.299 6 6 0 0 0 1.093-1.439q.406-.757.408-1.543.001-.578-.189-1.063a2.5 2.5 0 0 0-.525-.824 2.3 2.3 0 0 0-.763-.528c-.177-.094-.545-.187-.907-.195-.623-.013-1.22.251-1.474.557a2 2 0 0 0-.465-.33c-.286-.15-.626-.22-1.007-.22q-.476 0-.908.189-.428.186-.762.527-.335.348-.525.823v.001q-.191.485-.19 1.063c0 .524.138 1.04.405 1.543" clipRule="evenodd" /></g><defs><filter id="Engagement_svg__a" width={21.578} height={21.815} x={1.211} y={2.635} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy={1.395} /><feGaussianBlur stdDeviation={1.395} /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix values="0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_237" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_6_237" result="shape" /></filter></defs></svg>;
const ForwardRef = forwardRef(SvgEngagement);
export default ForwardRef;