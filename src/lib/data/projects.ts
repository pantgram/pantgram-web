export interface Project {
	title: string;
	description: string;
	tech: string[];
	category: string;
	metrics: string;
}

export const projects: Project[] = [
	{
		title: 'UniverSIS / Data Trees',
		description:
			'A specialized service to manage the registered courses of students in the UniverSIS system. Built around Merkle Tree techniques that ensure data integrity and security, exposing an API that communicates directly with the central UniverSIS API for efficient data exchange.',
		tech: ['Node.js', 'JavaScript', 'TypeScript', 'NPM'],
		category: 'Backend / Security',
		metrics: 'Thesis · Published'
	},
	{
		title: 'HomiDirect',
		description:
			'A modern real estate platform connecting landlords and tenants. End-to-end application with a React front end and a FastAPI backend backed by PostgreSQL.',
		tech: ['React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Pydantic'],
		category: 'Full Stack',
		metrics: 'Personal Project'
	},
	{
		title: 'Articles Database REST API',
		description:
			'A RESTful API for an articles management system covering articles, users, tags and comments. Includes JWT authorization, full-text search and export features.',
		tech: ['Django', 'Django REST Framework', 'PostgreSQL'],
		category: 'Backend',
		metrics: 'Personal Project'
	}
];
