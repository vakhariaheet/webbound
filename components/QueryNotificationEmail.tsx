import * as React from 'react';
import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from '@react-email/components';

interface EmailProps {
	name: string;
	email: string;
	phone?: string;
	message: string;
	service: string;
	submissionTime: string;
}

const Email = ({
	name = 'John Doe',
	email = 'client@example.com',
	phone = '+91 9876543210',
	message = 'I need help with my website redesign project. Looking for a modern look that converts better.',
	service = 'Website Design',
	submissionTime = 'May 6, 2025 - 11:21 AM',
}: EmailProps) => {
	const previewText = `New lead requires follow-up. Client interested in ${service}. Submitted on ${submissionTime}.`;

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className='bg-gray-100 font-sans py-[40px]'>
					<Container className='bg-white rounded-[8px] mx-auto p-[24px] max-w-[600px]'>
						<Section>
							<Heading className='text-[24px] font-bold text-gray-800 m-0'>
								New Client Inquiry Received
							</Heading>
							<Text className='text-[16px] text-gray-600 mb-[24px]'>
								A potential client has submitted a query through the contact
								form. Please review the details below.
							</Text>
						</Section>

						<Hr className='border-gray-200 my-[16px]' />

						<Section className='bg-blue-50 p-[16px] rounded-[8px] mb-[24px]'>
							<Row>
								<Column>
									<Text className='text-[14px] text-blue-800 font-bold m-0'>
										Service Requested:
									</Text>
									<Text className='text-[14px] text-blue-800 m-0'>
										{service}
									</Text>
								</Column>
								<Column>
									<Text className='text-[14px] text-blue-800 font-bold m-0'>
										Submitted:
									</Text>
									<Text className='text-[14px] text-blue-800 m-0'>
										{submissionTime}
									</Text>
								</Column>
							</Row>
						</Section>

						<Section className='mb-[24px]'>
							<Heading className='text-[18px] font-bold text-gray-800 mb-[8px]'>
								Client Information
							</Heading>
							<Row className='mb-[8px]'>
								<Column className='w-[150px]'>
									<Text className='text-[14px] text-gray-500 font-bold m-0'>
										Name:
									</Text>
								</Column>
								<Column>
									<Text className='text-[14px] text-gray-800 m-0'>{name}</Text>
								</Column>
							</Row>
							<Row className='mb-[8px]'>
								<Column className='w-[150px]'>
									<Text className='text-[14px] text-gray-500 font-bold m-0'>
										Email:
									</Text>
								</Column>
								<Column>
									<Text className='text-[14px] text-gray-800 m-0'>
										<Link
											href={`mailto:${email}`}
											className='text-blue-600 no-underline'
										>
											{email}
										</Link>
									</Text>
								</Column>
							</Row>
							{phone && (
								<Row className='mb-[8px]'>
									<Column className='w-[150px]'>
										<Text className='text-[14px] text-gray-500 font-bold m-0'>
											Phone:
										</Text>
									</Column>
									<Column>
										<Text className='text-[14px] text-gray-800 m-0'>
											<Link
												href={`tel:${phone}`}
												className='text-blue-600 no-underline'
											>
												{phone}
											</Link>
										</Text>
									</Column>
								</Row>
							)}
						</Section>

						<Section className='mb-[24px]'>
							<Heading className='text-[18px] font-bold text-gray-800 mb-[8px]'>
								Client Message
							</Heading>
							<Text className='text-[14px] text-gray-800 bg-gray-50 p-[16px] rounded-[8px]'>
								{message}
							</Text>
						</Section>

						<Hr className='border-gray-200 my-[16px]' />

						<Section className='bg-yellow-50 p-[16px] rounded-[8px] mb-[24px]'>
							<Text className='text-[14px] text-yellow-800 font-bold m-0'>
								Reminder:
							</Text>
							<Text className='text-[14px] text-yellow-800 m-0'>
								Please respond to all client inquiries within 24-48 hours per
								company policy.
							</Text>
						</Section>

						<Hr className='border-gray-200 my-[16px]' />

						<Section>
							<Text className='text-[12px] text-gray-500 text-center m-0'>
								This is an internal notification from the Webbound contact
								system.
							</Text>
							<Text className='text-[12px] text-gray-500 text-center m-0'>
								© {new Date().getFullYear()} Webbound. All rights reserved.
							</Text>
							<Text className='text-[12px] text-gray-500 text-center m-0'>
								123 Web Street, Digital City, IN 380001
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

Email.PreviewProps = {
	name: 'John Doe',
	email: 'client@example.com',
	phone: '+91 9876543210',
	message:
		'I need help with my website redesign project. Looking for a modern look that converts better.',
	service: 'Website Design',
	submissionTime: 'May 6, 2025 - 11:21 AM',
};

export default Email;
