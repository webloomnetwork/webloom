export const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12">
        {/* Blue V Shape */}
        <path d="M100 100 L140 220 L180 140" stroke="url(#blue-gradient)" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round" />

        {/* Orange W Shape */}
        <path d="M190 140 L210 220 L270 100" stroke="url(#orange-gradient)" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M250 100 Q 280 90 290 100" stroke="url(#orange-gradient)" strokeWidth="25" strokeLinecap="round" />

        {/* Swoosh Underneath */}
        <path d="M80 230 Q 150 280 290 150" stroke="#004aad" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M100 210 Q 150 250 180 180" stroke="#00aaff" strokeWidth="15" strokeLinecap="round" fill="none" />

        {/* Dots */}
        <circle cx="90" cy="180" r="10" fill="#00aaff" />
        <circle cx="110" cy="160" r="6" fill="#00aaff" />
        <circle cx="280" cy="90" r="12" fill="#ffaa00" />
        <circle cx="300" cy="80" r="10" fill="#ff8800" />
        <circle cx="290" cy="110" r="8" fill="#ffaa00" />

        {/* Text */}
        <text x="180" y="270" fontFamily="sans-serif" fontSize="45" fontWeight="bold" fill="#0066cc">web </text>
        <text x="270" y="270" fontFamily="sans-serif" fontSize="45" fontWeight="normal" fill="#ff8800">loom</text>

        <defs>
            <linearGradient id="blue-gradient" x1="100" y1="100" x2="180" y2="220" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00ccff" />
                <stop offset="1" stopColor="#3333ff" />
            </linearGradient>
            <linearGradient id="orange-gradient" x1="190" y1="140" x2="270" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ff4400" />
                <stop offset="1" stopColor="#ffcc00" />
            </linearGradient>
        </defs>
    </svg>
)
