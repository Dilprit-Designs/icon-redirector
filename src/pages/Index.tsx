
import React from "react";
import ProfileHeader from "@/components/ProfileHeader";
import ActionButtons from "@/components/ActionButtons";
import ContactInfo from "@/components/ContactInfo";

const Index = () => {
  // Profile Data
  const profile = {
    name: "Harish Thapar",
    role: "HOUSE STUDIO",
    logo: "H",
    title: "HOUSE STUDIO",
    subtitle: "One Stop Interior Solutions",
    profileImage: "/lovable-uploads/a9950011-a7a5-4826-8d83-5bcae56aa1da.png",
    officePhone: "+91 8591325353",
    mobilePhone: "+91 8591315353",
    email: "housestudio18@gmail.com",
    website: "https://www.housestudio.in",
    address: "HOUSE STUDIO, shop 18, Sm Vision, plot no 166, Sector 9, Ulwe, Navi Mumbai, Maharashtra, 410 206",
    facebook: "https://facebook.com/housestudio",
    linkedin: "https://linkedin.com/in/harishthapar",
    instagram: "https://instagram.com/housestudio",
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg overflow-hidden">
      <div className="status-bar bg-black text-white text-xs p-1 flex justify-between">
        <span>12:44</span>
        <div className="flex space-x-1">
          <span>•••</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>
      
      <ProfileHeader
        logo={profile.logo}
        title={profile.title}
        subtitle={profile.subtitle}
        profileImage={profile.profileImage}
        name={profile.name}
        role={profile.role}
      />
      
      <ActionButtons
        phoneNumber={profile.officePhone}
        whatsappNumber={profile.mobilePhone}
        emailAddress={profile.email}
      />
      
      <div className="px-6 pb-10">
        <ContactInfo
          officePhone={profile.officePhone}
          mobilePhone={profile.mobilePhone}
          email={profile.email}
          website={profile.website}
          address={profile.address}
          facebook={profile.facebook}
          linkedin={profile.linkedin}
          instagram={profile.instagram}
        />
      </div>
    </div>
  );
};

export default Index;
