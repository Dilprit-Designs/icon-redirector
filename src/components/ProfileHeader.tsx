
import React from "react";
import { cn } from "@/lib/utils";

interface ProfileHeaderProps {
  logo: string;
  title: string;
  subtitle: string;
  profileImage: string;
  name: string;
  role: string;
  className?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  logo,
  title,
  subtitle,
  profileImage,
  name,
  role,
  className,
}) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="w-full bg-gray-900 py-4 px-6 flex items-center">
        <div className="text-amber-500 text-2xl font-bold mr-2">{logo}</div>
        <div>
          <h1 className="text-white font-bold text-xl">{title}</h1>
          <p className="text-gray-300 text-xs">{subtitle}</p>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img 
            src={profileImage} 
            alt={name}
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      
      <h2 className="mt-4 text-2xl font-bold">{name}</h2>
      <p className="text-gray-600 text-sm uppercase tracking-wider">{role}</p>
    </div>
  );
};

export default ProfileHeader;
