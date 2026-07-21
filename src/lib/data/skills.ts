export interface Skill {
	name: string;
	level: number;
}

export interface SkillCategory {
	name: string;
	skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
	{
		name: 'Languages',
		skills: [
			{ name: 'Python', level: 90 },
			{ name: 'TypeScript', level: 85 },
			{ name: 'JavaScript', level: 85 },
			{ name: 'Java', level: 70 },
			{ name: 'SQL', level: 85 }
		]
	},
	{
		name: 'Frameworks & Libraries',
		skills: [
			{ name: 'FastAPI', level: 90 },
			{ name: 'SQLAlchemy', level: 85 },
			{ name: 'Pydantic', level: 85 },
			{ name: 'Django / DRF', level: 75 },
			{ name: 'Node.js / Angular', level: 75 }
		]
	},
	{
		name: 'Automation & Integration',
		skills: [
			{ name: 'UiPath', level: 85 },
			{ name: 'Boomi iPaaS', level: 85 },
			{ name: 'LLM Document Extraction', level: 80 },
			{ name: 'Workflow Orchestration', level: 80 },
			{ name: 'Legacy System Integration', level: 75 }
		]
	},
	{
		name: 'Databases',
		skills: [
			{ name: 'PostgreSQL', level: 88 },
			{ name: 'MySQL', level: 80 },
			{ name: 'Data Modeling', level: 85 },
			{ name: 'Query Optimization', level: 80 },
			{ name: 'Merkle Trees', level: 70 }
		]
	},
	{
		name: 'Tools & Practices',
		skills: [
			{ name: 'Git', level: 90 },
			{ name: 'Docker', level: 80 },
			{ name: 'API Design', level: 88 },
			{ name: 'Microservices', level: 85 },
			{ name: 'NPM Packaging', level: 75 }
		]
	},
	{
		name: 'Soft Skills',
		skills: [
			{ name: 'Teamwork', level: 90 },
			{ name: 'Communication', level: 88 },
			{ name: 'Fast Learner', level: 90 },
			{ name: 'Persistence', level: 92 }
		]
	}
];
