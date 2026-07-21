export interface ExperienceItem {
	role: string;
	company: string;
	period: string;
	location: string;
	type: 'Full-time' | 'Contract' | 'Internship' | 'Military Service';
	description: string;
	highlights: string[];
	tech: string[];
}

export const experience: ExperienceItem[] = [
	{
		role: 'Software Engineer',
		company: 'Kuehne + Nagel',
		period: 'Sep 2025 — Present',
		location: 'Thessaloniki, GR',
		type: 'Full-time',
		description:
			'Building AI-powered automation pipelines and an internal platform for measuring the value and impact of automations across the organization.',
		highlights: [
			'Designed and implemented a platform for measuring the Value and Impact of automations inside the organization',
			'Engineered automations using UiPath and Python to automate invoice processing, report generation, and legacy system integrations',
			'Developed internal APIs and Python scripts orchestrating data processing workflows between UiPath bots and enterprise systems, improving reliability and maintainability',
			'Implemented AI-powered document extraction with LLMs, improving data accuracy in invoice processing and reducing manual validation efforts',
			'Automated complex web-based workflows interacting with legacy applications and modern APIs'
		],
		tech: ['UiPath', 'Python', 'LLMs', 'FastAPI', 'Docker']
	},
	{
		role: 'IT Services — Mandatory Military Service',
		company: 'NRDC-GR',
		period: 'May 2024 — May 2025',
		location: 'Thessaloniki, GR',
		type: 'Military Service',
		description:
			'Served mandatory military service in the IT unit, handling network administration, user support and a custom service for the military club.',
		highlights: [
			'Network administration and troubleshooting',
			'User support and management',
			'Created a service to provide restaurant availability and management for the military club'
		],
		tech: ['Network Administration', 'IT Support', 'Full Stack']
	},
	{
		role: 'Full Stack Developer — Contractor',
		company: 'AUTH IT Center',
		period: 'Dec 2024 — May 2025',
		location: 'Thessaloniki, GR',
		type: 'Contract',
		description:
			'Contract full-stack development on Student Information System (SIS) plugins and educational management interfaces for Aristotle University.',
		highlights: [
			'Developed and maintained API plugins and integrations using Node.js frameworks for Student Information Systems (SIS)',
			'Created responsive front-end applications with Angular for educational management interfaces',
			'Designed and optimized database queries and data models for student information management'
		],
		tech: ['Node.js', 'Angular', 'PostgreSQL', 'TypeScript']
	},
	{
		role: 'Junior Integration Developer',
		company: 'Deloitte',
		period: 'Apr 2023 — May 2024',
		location: 'Thessaloniki, GR',
		type: 'Full-time',
		description:
			'Enterprise integration engineering with Boomi iPaaS — designing API-driven interfaces and microservices architectures for complex enterprise environments.',
		highlights: [
			'Designed and implemented API-driven interfaces using Boomi iPaaS, enabling enterprise integration solutions that streamlined operational workflows and enhanced system interoperability',
			'Contributed to the deployment of microservices architectures, improving system orchestration, re-usability and high availability for complex enterprise environments',
			'Assisted in creating integration architectures with Boomi iPaaS that facilitated seamless communication between cloud applications and enterprise systems, ensuring plug-and-play compatibility'
		],
		tech: ['Boomi iPaaS', 'Microservices', 'API Design', 'REST']
	}
];
