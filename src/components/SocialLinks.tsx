import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, Github, Youtube } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ney0000o/?next=%2F&hl=en',
    icon: Instagram,
    color: 'hover:text-pink-400',
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/enyAVTkr',
    icon: MessageCircle,
    color: 'hover:text-indigo-400',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Adhil1201',
    icon: Github,
    color: 'hover:text-gray-300',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@neyoogaming9692',
    icon: Youtube,
    color: 'hover:text-red-400',
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-8 sm:mt-12 px-4">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <Button
            key={link.name}
            variant="ghost"
            size="default"
            className={`group bg-black/20 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 hover:shadow-neon text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 ${link.color}`}
            onClick={() => window.open(link.url, '_blank')}
          >
            <IconComponent className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            {link.name}
          </Button>
        );
      })}
    </div>
  );
};