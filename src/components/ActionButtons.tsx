
import React from "react";
import { Phone, MessageSquare, AtSign, User, Share } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionButtonsProps {
  phoneNumber: string;
  whatsappNumber: string;
  emailAddress: string;
  className?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  phoneNumber,
  whatsappNumber,
  emailAddress,
  className,
}) => {
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
  
  const buttons = [
    {
      icon: <Phone size={20} />,
      action: () => window.location.href = `tel:${cleanPhoneNumber}`,
      ariaLabel: "Call"
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6 6.32C16.12 4.82 14.06 3.98 11.88 3.98C7.37 3.98 3.7 7.65 3.7 12.16C3.7 13.86 4.19 15.51 5.09 16.94L3.58 20.41L7.16 18.94C8.55 19.75 10.16 20.19 11.87 20.19C16.38 20.19 20.05 16.52 20.05 12.01C20.06 9.85 19.21 7.79 17.6 6.32ZM11.87 18.78C10.36 18.78 8.88 18.35 7.57 17.55L7.28 17.38L5.11 18.24L5.97 16.13L5.78 15.81C4.88 14.44 4.41 12.87 4.41 11.26C4.41 7.6 7.8 4.71 11.85 4.71C13.66 4.71 15.35 5.41 16.61 6.68C17.87 7.95 18.24 9.65 18.24 11.42C18.28 15.09 14.89 18.78 11.87 18.78ZM15.64 13.32C15.4 13.19 14.28 12.66 14.06 12.53C13.84 12.43 13.69 12.4 13.54 12.62C13.39 12.86 12.97 13.33 12.84 13.46C12.72 13.61 12.59 13.63 12.35 13.5C11.09 12.87 10.27 12.37 9.44 10.95C9.21 10.58 9.71 10.61 10.17 9.67C10.25 9.52 10.22 9.4 10.17 9.28C10.12 9.16 9.64 8.05 9.44 7.54C9.26 7.05 9.07 7.11 8.92 7.1C8.8 7.09 8.65 7.09 8.5 7.09C8.35 7.09 8.1 7.14 7.88 7.36C7.66 7.59 7.09 8.11 7.09 9.22C7.09 10.33 7.92 11.4 8.02 11.56C8.12 11.71 9.64 14.11 12.03 15.08C13.72 15.74 14.38 15.82 15.24 15.67C15.76 15.56 16.67 15.1 16.87 14.5C17.06 13.9 17.06 13.39 17.01 13.33C16.97 13.25 16.82 13.19 16.58 13.09C16.33 13 15.64 13.32 15.64 13.32Z" fill="currentColor"/>
            </svg>,
      action: () => window.location.href = `https://wa.me/${cleanPhoneNumber}`,
      ariaLabel: "WhatsApp"
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.38597 5L12 13.683L17.614 5H6.38597Z" fill="currentColor"/>
              <path d="M4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4ZM4 5H20V19H4V5Z" fill="currentColor"/>
            </svg>,
      action: () => window.location.href = `sms:${cleanPhoneNumber}`,
      ariaLabel: "Message"
    },
    {
      icon: <AtSign size={20} />,
      action: () => window.location.href = `mailto:${emailAddress}`,
      ariaLabel: "Email"
    },
    {
      icon: <User size={20} />,
      action: () => {
        // Create a vCard
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Harish Thapar
ORG:HOUSE STUDIO
TEL;TYPE=WORK,VOICE:${phoneNumber}
TEL;TYPE=CELL,VOICE:${whatsappNumber}
EMAIL:${emailAddress}
ADR;TYPE=WORK:;;shop 18, Sm Vision, plot no 166, Sector 9, Ulwe, Navi Mumbai;Maharashtra;;410 206;India
END:VCARD`;
        
        // Create a blob and download
        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'harish-thapar.vcf';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      ariaLabel: "Add to Contacts"
    },
    {
      icon: <Share size={20} />,
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: "Harish Thapar - HOUSE STUDIO",
            text: "Contact details for Harish Thapar",
            url: window.location.href,
          });
        } else {
          // Fallback for browsers that don't support Web Share API
          navigator.clipboard.writeText(window.location.href);
          alert("Link copied to clipboard!");
        }
      },
      ariaLabel: "Share"
    },
  ];

  return (
    <div className={cn("flex justify-center flex-wrap gap-3 my-6", className)}>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.action}
          className="w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-gray-700 transition-colors"
          aria-label={button.ariaLabel}
        >
          {button.icon}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
