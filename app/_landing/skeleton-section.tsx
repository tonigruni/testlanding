import React from "react";

const vcLogos = [
  {
    name: "Lovable",
    component: () => (
      <svg
        width="100"
        height="50"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-700"
      >
        <path d="M50 15L60 25L50 35L40 25L50 15Z" fill="currentColor" />
        <path
          d="M50 15C50 15 55 10 60 15C65 20 60 25 50 25C40 25 35 20 40 15C45 10 50 15 50 15Z"
          fill="currentColor"
        />
        <path
          d="M50 35C50 35 45 40 40 35C35 30 40 25 50 25C60 25 65 30 60 35C55 40 50 35 50 35Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Coca-Cola",
    component: () => (
      <svg
        width="100"
        height="50"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-700"
      >
        <path
          d="M50 25C50 25 45 30 40 25C35 20 40 15 50 15C60 15 65 20 60 25C55 30 50 25 50 25Z"
          fill="currentColor"
        />
        <path
          d="M50 25C50 25 55 20 60 25C65 30 60 35 50 35C40 35 35 30 40 25C45 20 50 25 50 25Z"
          fill="currentColor"
        />
        <text
          x="50%"
          y="65%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          fill="currentColor"
        >
          Co
        </text>
      </svg>
    ),
  },
  {
    name: "Flatfile",
    component: () => (
      <svg
        width="100"
        height="50"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-700"
      >
        <rect x="30" y="15" width="10" height="20" fill="currentColor" />
        <rect x="45" y="15" width="10" height="20" fill="currentColor" />
        <rect x="60" y="15" width="10" height="20" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Modal",
    component: () => (
      <svg
        width="100"
        height="50"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-700"
      >
        <path
          d="M20 25 L35 15 L50 25 L35 35 L20 25Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M50 25 L65 15 L80 25 L65 35 L50 25Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M35 15 L65 15" stroke="currentColor" strokeWidth="2" />
        <path d="M35 35 L65 35" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Union Square Ventures",
    component: () => (
      <svg
        width="100"
        height="50"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-700"
      >
        <rect x="10" y="10" width="80" height="30" fill="currentColor" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fontFamily="Arial"
          fill="white"
        >
          USV
        </text>
      </svg>
    ),
  },
  {
    name: "Replicate",
    component: () => (
      <svg
        width="100"
        height="50"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-700"
      >
        <path d="M20 25L30 15L40 25L30 35L20 25Z" fill="currentColor" />
        <path d="M50 25L60 15L70 25L60 35L50 25Z" fill="currentColor" />
        <path d="M80 25L90 15L100 25L90 35L80 25Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function SkeletonSection() {
  return (
    <div className="relative overflow-hidden border-b border-t border-[#dcdcdc] bg-white py-16 md:py-24">
      <div className="absolute left-[10%] top-0 h-full w-[1px] bg-[#dcdcdc]"></div>
      <div className="absolute right-[10%] top-0 h-full w-[1px] bg-[#dcdcdc]"></div>
      <div className="container mx-auto md:px-[10%]">
        <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {vcLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              {logo.component()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
