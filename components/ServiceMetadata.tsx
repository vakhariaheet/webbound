import { Metadata } from 'next';

interface ServiceMetadataProps {
  title: string;
  description: string;
  keywords: string;
  path: string;
}

export function generateServiceMetadata({
  title,
  description,
  keywords,
  path,
}: ServiceMetadataProps): Metadata {
  return {
    title: `${title} | Webbound`,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | Webbound`,
      description,
      url: `https://webbound.in${path}`,
      siteName: "Webbound",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Webbound`,
      description,
    },
  };
}