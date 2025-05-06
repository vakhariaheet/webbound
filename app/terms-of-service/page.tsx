

import TermsOfService from "@/components/TermsOfService";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Webbound",
  description: "Read Webbound's terms of service and legal agreements for using our website and services.",
  keywords: "terms of service, legal terms, website terms, service agreement, Webbound terms",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Webbound",
    description: "Read Webbound's terms of service and legal agreements for using our website and services.",
    url: "https://webbound.in/terms-of-service",
    siteName: "Webbound",
    locale: "en_US",
    type: "website",
  },
};

const TermsOfServicePage = () => {
    return ( 
        <TermsOfService/>
     );
}
 
export default TermsOfServicePage;