import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = "" }) => {
  const getPath = (name: string) => {
    switch (name) {
      case 'eye': // Lucide Eye
        return (
          <>
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </>
        );
      case 'book': // Lucide BookOpen
        return (
          <>
             <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
             <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </>
        );
      case 'scale': // Lucide Scale
        return (
          <>
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </>
        );
      case 'castle': // Lucide Castle
        return (
            <>
                <path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" />
                <path d="M18 11V4H6v7" />
                <path d="M15 22v-4a3 3 0 0 0-6 0v4" />
                <path d="M22 11V9" />
                <path d="M2 11V9" />
                <path d="M6 4V2" />
                <path d="M18 4V2" />
                <path d="M10 4V2" />
                <path d="M14 4V2" />
            </>
        );
      default: // Help Circle fallback
        return (
          <>
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </>
        );
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {getPath(name)}
    </svg>
  );
};
