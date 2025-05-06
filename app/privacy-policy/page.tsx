
import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Webbound",
  description: "Learn about Webbound's privacy policy and how we protect your personal information.",
  keywords: "privacy policy, data protection, personal information, privacy terms, Webbound privacy",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Webbound",
    description: "Learn about Webbound's privacy policy and how we protect your personal information.",
    url: "https://webbound.in/privacy-policy",
    siteName: "Webbound",
    locale: "en_US",
    type: "website",
  },
};

const PrivacyPolicyPage = () => {
    return ( 
        <PrivacyPolicy/>
     );
}
 
export default PrivacyPolicyPage;