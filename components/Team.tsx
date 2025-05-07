import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Heet from "@/assets/heet.webp";
import Kandarp from "@/assets/kandarp.webp";
import Image, { StaticImageData } from 'next/image';
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: StaticImageData;
  // certifications: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Heet Vakharia",
    role: "Chief Technology Officer",
    bio: "With over 4+ years of experience in software architecture and cloud computing, Heet leads our technical strategy and innovation initiatives.",
    image: Heet,
    social: {
      linkedin: "https://linkedin.com/in/vakhariaheet",
      twitter: "https://x.com/vakharia_heet",
      email: "heet@webbound.in"
    }
  },
  {
    name: "Kandarp Sharda",
    role: "Chief Executive Officer",
    bio: "Kandarp specializes in full-stack development and has successfully delivered enterprise-scale applications for Fortune 500 companies.",
    image: Kandarp,
    social: {
      // linkedin: "#",
      email: "kandarp@webbound.in"
    }
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-16 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Meet the experts behind Webbound&apos;s success. Our team brings together decades of experience
            in software development, design, and IT solutions.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg max-w-md shadow-md overflow-hidden">
              <div className="aspect-w-3 aspect-h-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-700 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                

                <div className="flex space-x-4">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin}
                      aria-label='Follow {member.name} on LinkedIn'
                      className="text-gray-600 hover:text-blue-700">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      aria-label='Follow {member.name} on Twitter'
                      href={member.social.twitter} className="text-gray-600 hover:text-blue-700">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      aria-label='Contact {member.name} via email'
                      href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-blue-700">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;