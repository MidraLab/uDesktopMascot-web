import React from "react";

interface DownloadButtonProps {
  label: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ label }) => {
  return (
    <button className="px-6 py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      {label}
    </button>
  );
};

export default DownloadButton;
