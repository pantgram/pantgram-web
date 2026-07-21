export type ServiceIcon = 'api' | 'ai' | 'data' | 'infra' | 'micro' | 'chat';

export interface Service {
	icon: ServiceIcon;
	title: string;
	description: string;
	features: string[];
}

export const services: Service[] = [
	{
		icon: 'api',
		title: 'API Development',
		description:
			'Designing and implementing RESTful APIs and API plugins with FastAPI, Django REST Framework and Node.js — built for clarity, security and maintainability.',
		features: ['REST APIs', 'JWT Auth', 'Full-text Search', 'OpenAPI Docs']
	},
	{
		icon: 'micro',
		title: 'Microservices & Integrations',
		description:
			'API-driven interfaces and microservices orchestrated with Boomi iPaaS to enable seamless, plug-and-play communication between cloud and enterprise systems.',
		features: ['Boomi iPaaS', 'Event-driven', 'Legacy Systems', 'Interoperability']
	},
	{
		icon: 'ai',
		title: 'AI Automation',
		description:
			'Intelligent automation pipelines powered by UiPath and LLMs — automating invoice processing, document extraction and report generation end to end.',
		features: ['UiPath Bots', 'LLM Extraction', 'Python Workflows', 'Web Automation']
	},
	{
		icon: 'data',
		title: 'Data Modeling & Storage',
		description:
			'Designing and optimizing data models and database queries for information systems, with a focus on data integrity and efficient access patterns.',
		features: ['PostgreSQL', 'MySQL', 'SQLAlchemy', 'Merkle Trees']
	},
	{
		icon: 'infra',
		title: 'Automation Reliability',
		description:
			'Internal APIs and Python services that orchestrate data processing workflows between bots and enterprise systems, improving reliability and maintainability.',
		features: ['Workflow Orchestration', 'Docker', 'Git', 'Monitoring']
	},
	{
		icon: 'chat',
		title: 'Full-Stack Delivery',
		description:
			'Responsive front-end applications with Angular and React paired with backend services — from student information systems to real estate platforms.',
		features: ['Angular', 'React', 'Node.js', 'TypeScript']
	}
];
