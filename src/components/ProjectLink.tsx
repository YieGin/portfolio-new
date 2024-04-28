import React from 'react';
import Link from 'next/link';

interface ProjectLinkProps {
  url: string;
  label: string;
  Icon: React.ComponentType<{ size: number }>;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ url, label, Icon }) => {
  return (
    <Link target="_blank" href={url} passHref>
      <div className="flex w-full items-center gap-2 hover:text-[#00dac4] duration-100">
        <p className="w-max">{label}</p>
        <hr className="bg-red-300 w-full text-red-300 h-[1px]" />
        <Icon size={35} />
      </div>
    </Link>
  );
};

export default ProjectLink;
