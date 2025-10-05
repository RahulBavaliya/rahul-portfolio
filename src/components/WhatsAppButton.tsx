// src/components/WhatsAppButton.tsx
import { useState, useEffect, useRef } from 'react';
import {
  Megaphone,
  MessageSquareText,
  HelpCircle,
  X,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Slack, 
  MessagesSquare
} from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '917046504657';
  const message = "Hi Rahul! I came across your portfolio and was really impressed. I’d like to connect.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [isOpen, setIsOpen] = useState(false);

  // Refs to detect clicks outside
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const togglePopup = () => setIsOpen(!isOpen);
  const closePopup = () => setIsOpen(false);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        !buttonRef.current?.contains(event.target as Node) &&
        !popupRef.current?.contains(event.target as Node)
      ) {
        closePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const socialLinks = [
    { name: 'Linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/rahul-bavaliya-302467123', color: '#2b80ff2c', iconClassName: 'h-5 w-5 text-blue-600' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/RahulBavaliya', color: '#3333332c', iconClassName: 'h-5 w-5 text-gray-600' },
    { name: 'Stack Overflow', icon: Slack, url: 'https://stackoverflow.com/users/6672088/rahul-bavaliya', color: '#f482242c', iconClassName: 'h-5 w-5 text-orange-600' },
    { name: 'WhatsApp', icon: MessagesSquare, url: whatsappUrl, color: '#25d3652c', iconClassName: 'h-5 w-5 text-green-600' },
  ];

  return (
    <>
      {/* Main Toggle Button */}
      <button
        ref={buttonRef}
        onClick={togglePopup}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '9999px',
          background: 'linear-gradient(to right, #2563eb, #9333ea)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 70,
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
        className="animate-float"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-white" />
        ) : (
          <Megaphone className="h-5 w-5 text-white" />
        )}
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          ref={popupRef}
          style={{
            position: 'fixed',
            bottom: '6rem',
            right: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            zIndex: 60,
          }}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '9999px',
                  backgroundColor: link.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  textDecoration: 'none',
                }}
                aria-label={link.name}
              >
                <Icon className={link.iconClassName} />
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}