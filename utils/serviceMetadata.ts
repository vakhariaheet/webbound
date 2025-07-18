import { Metadata } from 'next';

interface ServiceMetadataConfig {
  title: string;
  description: string;
  keywords: string[];
  path: string;
}

const servicesMetadata: Record<string, ServiceMetadataConfig> = {
  'web-development': {
    title: 'Professional Web Development Services | Webbound',
    description: 'Transform your business with our expert web development services. We create modern, responsive, and scalable web applications tailored to your needs.',
    keywords: ['web development', 'responsive design', 'web applications', 'frontend development', 'backend development', 'full-stack development'],
    path: '/services/web-development',
  },
  'mobile-app-development': {
    title: 'Mobile App Development Services | Webbound',
    description: 'Custom mobile app development services for iOS and Android. We build high-performance, user-friendly mobile applications that engage your audience.',
    keywords: ['mobile app development', 'iOS development', 'Android development', 'cross-platform apps', 'mobile solutions', 'app development'],
    path: '/services/mobile-app-development',
  },
  'desktop-development': {
    title: 'Desktop Application Development | Webbound',
    description: 'Custom desktop application development for Windows, macOS, and Linux. We create powerful, efficient desktop software solutions for your business.',
    keywords: ['desktop development', 'software development', 'cross-platform apps', 'Windows apps', 'macOS apps', 'Linux apps'],
    path: '/services/desktop-development',
  },
  'custom-it': {
    title: 'Custom IT Solutions & Services | Webbound',
    description: 'Comprehensive IT solutions tailored to your business needs. From system integration to custom software development, we deliver innovative IT services.',
    keywords: ['custom IT solutions', 'IT services', 'system integration', 'software development', 'IT consulting', 'technology solutions'],
    path: '/services/custom-it',
  },
  'whatsapp-business': {
    title: 'WhatsApp Business Solutions | Webbound',
    description: 'Professional WhatsApp Business integration and automation services. Enhance your customer engagement with our WhatsApp Business solutions.',
    keywords: ['WhatsApp Business', 'business messaging', 'WhatsApp automation', 'customer engagement', 'business communication', 'messaging solutions'],
    path: '/services/whatsapp-business',
  },
};

export function generateServiceMetadata(service: keyof typeof servicesMetadata): Metadata {
  const metadata = servicesMetadata[service];
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://webbound.dev${metadata.path}`,
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: metadata.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: ['/og-image.png'],
    },
  };
}
