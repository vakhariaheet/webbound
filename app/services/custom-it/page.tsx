
import React from 'react';
import { CheckCircle, Server, Shield, Cpu, Database } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import ITCustom from '@/assets/it-custom.jpeg';
export const metadata: Metadata = {
  title: "Custom IT Solutions | Webbound",
  description: "Transform your business with our comprehensive IT solutions. We provide custom-tailored services to address your unique challenges and drive digital transformation.",
  keywords: "custom IT solutions, IT services, cloud infrastructure, cybersecurity, DevOps solutions, data solutions, digital transformation",
  alternates: {
    canonical: "/services/custom-it",
  },
  openGraph: {
    title: "Custom IT Solutions | Webbound",
    description: "Transform your business with our comprehensive IT solutions. We provide custom-tailored services to address your unique challenges.",
    url: "https://webbound.in/services/custom-it",
    siteName: "Webbound",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom IT Solutions | Webbound",
    description: "Transform your business with our comprehensive IT solutions. We provide custom-tailored services to address your unique challenges.",
  },
};

const CustomIT: React.FC = () => {
  const solutions = [
    {
      title: "Cloud Infrastructure",
      icon: <Server className="w-12 h-12 text-blue-700 mb-4" />,
      description: "Custom cloud solutions using AWS, Azure, or Google Cloud Platform. We help you migrate, optimize, and manage your cloud infrastructure.",
      features: [
        "Infrastructure as Code (IaC)",
        "Cloud migration services",
        "Performance optimization",
        "Cost management",
        "24/7 monitoring"
      ]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-12 h-12 text-blue-700 mb-4" />,
      description: "Comprehensive security solutions to protect your business from modern threats. We implement robust security measures across your IT infrastructure.",
      features: [
        "Security audits",
        "Penetration testing",
        "Compliance management",
        "Security training",
        "Incident response"
      ]
    },
    {
      title: "DevOps Solutions",
      icon: <Cpu className="w-12 h-12 text-blue-700 mb-4" />,
      description: "Streamline your development and operations with our DevOps solutions. We implement efficient CI/CD pipelines and automation tools.",
      features: [
        "CI/CD implementation",
        "Container orchestration",
        "Infrastructure automation",
        "Monitoring & logging",
        "Performance optimization"
      ]
    },
    {
      title: "Data Solutions",
      icon: <Database className="w-12 h-12 text-blue-700 mb-4" />,
      description: "Transform your data into insights with our custom data solutions. From data warehousing to analytics, we help you make data-driven decisions.",
      features: [
        "Data warehousing",
        "Business intelligence",
        "ETL pipelines",
        "Real-time analytics",
        "Data visualization"
      ]
    }
  ];

  const technologies = [
    "AWS",
    "Azure",
    "Google Cloud",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Jenkins",
    "GitLab",
    "Elasticsearch",
    "Prometheus",
    "Grafana",
    "Apache Kafka"
  ];

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Custom IT Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with our comprehensive IT solutions. We provide custom-tailored 
                services to address your unique challenges and drive digital transformation.
              </p>
              <Link 
                href="/#contact" 
                className="inline-flex items-center px-8 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors shadow-md"
              >
                Schedule a Consultation
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src={ITCustom}
                  alt="Custom IT Solutions"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-700/10 rounded-lg"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-700/20 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-16">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center mb-6">
                  {solution.icon}
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                </div>
                <div className="space-y-3">
                  {solution.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-16 bg-white rounded-lg shadow-md mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technologies We Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-gray-900">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-blue-700 rounded-lg shadow-md mb-16 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss how our custom IT solutions can help your business thrive in the digital age.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomIT;