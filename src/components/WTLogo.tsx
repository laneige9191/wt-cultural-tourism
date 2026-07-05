import React from 'react';

interface WTLogoProps {
  className?: string;
  showText?: boolean;
  lightTheme?: boolean;
  lang?: 'zh' | 'en';
}

export default function WTLogo({ className = 'h-12', showText = true, lightTheme = false, lang = 'zh' }: WTLogoProps) {
  const primaryColor = lightTheme ? '#FAFBFC' : '#002266';
  const textColor = lightTheme ? '#FAFBFC' : '#002266';
  const secondaryColor = '#B39D82'; // Gold accents for subtitle/borders
  const subTextColor = lightTheme ? '#94A3B8' : '#475569';

  // Procedural Silver Fern generator to match the high-end NZ branding
  const renderSilverFern = () => {
    const leaflets = [];
    const steps = 14;
    
    // Quadratic Bezier control points for the elegant curved stem
    const p0 = { x: 310, y: 135 };
    const p1 = { x: 385, y: 90 };
    const p2 = { x: 465, y: 20 };

    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1);
      const mt = 1 - t;
      
      // Calculate point on the stem curve
      const x = mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x;
      const y = mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y;

      // Calculate tangent vector for correct leaflet alignment
      const dx = 2 * mt * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
      const dy = 2 * mt * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Taper scale (leaves get progressively smaller towards the tip)
      const scale = 0.28 + (1 - t) * 0.72;

      // Left leaflet angle (pointing up and left from stem)
      const leftAngle = angle - 60;
      // Right leaflet angle (pointing up and right from stem)
      const rightAngle = angle + 40;

      // Generate left leaf
      leaflets.push(
        <g key={`fern-leaf-l-${i}`} transform={`translate(${x}, ${y}) rotate(${leftAngle}) scale(${scale})`}>
          <path
            d="M 0 0 C 10 -15, 32 -12, 42 0 C 28 10, 12 8, 0 0"
            fill={primaryColor}
            className="transition-all duration-300"
          />
        </g>
      );

      // Generate right leaf
      leaflets.push(
        <g key={`fern-leaf-r-${i}`} transform={`translate(${x}, ${y}) rotate(${rightAngle}) scale(${scale * 0.85})`}>
          <path
            d="M 0 0 C 10 -15, 32 -12, 42 0 C 28 10, 12 8, 0 0"
            fill={primaryColor}
            className="transition-all duration-300"
          />
        </g>
      );
    }
    return leaflets;
  };

  return (
    <div className="flex items-center space-x-3.5 select-none" id="wt-brand-logo">
      {/* Precision Hand-crafted vector logo */}
      <svg 
        className={`${className} shrink-0`} 
        viewBox="0 0 480 150" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Slanted bold letter "W" */}
        <path 
          d="M 15 20 L 40 125 H 92 L 122 35 L 148 125 H 200 L 225 20 H 175 L 158 85 L 138 20 H 102 L 82 85 L 65 20 H 15 Z" 
          fill={primaryColor} 
          className="transition-colors duration-300"
        />
        
        {/* Slanted styled letter "T" with custom curved horizontal bar left-wing */}
        <path 
          d="M 235 20 H 335 L 330 45 H 310 L 330 125 H 290 L 270 45 H 245 C 225 45, 205 32, 185 38 C 205 25, 220 20, 235 20 Z" 
          fill={primaryColor} 
          className="transition-colors duration-300"
        />

        {/* Silver Fern Leaf Stem */}
        <path 
          d="M 310 135 Q 385 90, 465 20" 
          stroke={primaryColor} 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          fill="none" 
          className="transition-colors duration-300"
        />

        {/* Procedural high-fidelity Silver Fern Leaflets */}
        {renderSilverFern()}
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline space-x-1">
            <span 
              className="font-sans font-black text-lg md:text-xl tracking-tight leading-none uppercase"
              style={{ color: textColor }}
            >
              WT NEW ZEALAND
            </span>
          </div>
          <span 
            className="text-[9px] md:text-[10px] font-mono tracking-widest font-extrabold mt-1.5 leading-none uppercase transition-colors"
            style={{ color: secondaryColor }}
          >
            WT CULTURAL EXCHANGE
          </span>
          <span 
            className="text-[8px] md:text-[9px] font-medium mt-1 leading-none transition-colors"
            style={{ color: subTextColor }}
          >
            {lang === 'zh' ? '新西兰文化交流与旅游有限公司' : '& TOURISM LIMITED'}
          </span>
        </div>
      )}
    </div>
  );
}
