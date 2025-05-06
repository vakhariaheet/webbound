import * as React from 'react';
import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Section,
	Text,
	Tailwind,
	Img,
} from '@react-email/components';

const ConfirmationEmail = ({
	name = 'there',
	email = '',
	phone = '',
	message = '',
	service = 'our services',
}) => {
	return (
		<Html>
			<Head />
			<Preview>
				We've received your message and a specialist in {service} will contact
				you within 24-48 hours. We appreciate your interest!
			</Preview>
			<Tailwind>
				<Body className='bg-gray-100 font-sans py-[40px]'>
					<Container className='max-w-[600px] mx-auto bg-white rounded-[8px] overflow-hidden'>
						<Section className='border-b border-gray-200 bg-blue-900 py-[32px] px-[48px]'>
							<Text className='text-[28px] font-bold text-white m-0'>
								Webbound
							</Text>
						</Section>

						<Section className='py-[32px] px-[48px]'>
							<Heading className='text-[24px] font-bold text-black my-[24px] mx-0'>
								Hello {name},
							</Heading>

							<Text className='text-[16px] leading-[24px] text-gray-700 mb-[24px]'>
								Thank you for reaching out to Webbound regarding{' '}
								<strong>{service}</strong>. We've received your query and
								appreciate you taking the time to contact us.
							</Text>

							<Section className='bg-gray-50 p-[16px] rounded-[8px] border border-gray-200 mb-[24px]'>
								<Text className='text-[16px] leading-[24px] text-gray-700 m-0'>
									<strong>Your contact details:</strong>
								</Text>
								<Text className='text-[14px] leading-[20px] text-gray-600 m-0'>
									Email: {email}
								</Text>
								{phone && (
									<Text className='text-[14px] leading-[20px] text-gray-600 m-0'>
										Phone: {phone}
									</Text>
								)}

								{message && (
									<>
										<Text className='text-[16px] leading-[24px] text-gray-700 mt-[16px] mb-[8px]'>
											<strong>Your message:</strong>
										</Text>
										<Text className='text-[14px] leading-[20px] text-gray-600 m-0 italic'>
											"{message}"
										</Text>
									</>
								)}
							</Section>

							<Text className='text-[16px] leading-[24px] text-gray-700 mb-[24px]'>
								A dedicated member of our team specializing in{' '}
								<strong>{service}</strong> will review your request and get back
								to you shortly. We strive to respond to all inquiries within
								24-48 hours during business days.
							</Text>

							<Text className='text-[16px] leading-[24px] text-gray-700 mb-[24px]'>
								If you have any additional information to share or urgent
								concerns in the meantime, please don't hesitate to reply to this
								email or call us directly.
							</Text>

							<Text className='text-[16px] leading-[24px] text-gray-700 mb-[8px]'>
								Best regards,
							</Text>

							<Text className='text-[16px] font-bold text-black '>
								The Webbound Team
							</Text>
							<Section className='flex justify-center'>
								<Img
									src={'/logo.webp'}
									alt='Webbound Logo'
									height={50}
									className='mx-auto mb-[24px]'
								/>
							</Section>
						</Section>

						<Section className='bg-gray-100 py-[24px] px-[48px] text-center'>
							<Text className='text-[14px] text-gray-500 m-0'>
								© {new Date().getFullYear()} Webbound. All rights reserved.
							</Text>
							<Text className='text-[14px] text-gray-500 m-0'>
								Ahmedabad, India
							</Text>
							<Text className='text-[14px] text-blue-600 underline m-0'>
								<a href='mailto:contact@webbound.com'>support@webbound.in</a>
							</Text>
							<Text className='text-[12px] text-gray-400 mt-[16px] m-0'>
								<a
									href='https://webbound.com/unsubscribe'
									className='text-gray-400'
								>
									Unsubscribe
								</a>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

ConfirmationEmail.PreviewProps = {
	name: 'John Smith',
	email: 'john.smith@example.com',
	phone: '+91 98765 43210',
	message:
		"I'm interested in revamping our company website to improve user experience and conversion rates. Could you provide information about your web design packages and timeline?",
	service: 'Website Design Services',
};

export default ConfirmationEmail;
