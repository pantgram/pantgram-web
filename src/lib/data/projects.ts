export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  metrics: string;
  repo?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "UniverSIS / Data Trees",
    description:
      "A specialized service to manage the registered courses of students in the UniverSIS system. Built around Merkle Tree techniques that ensure data integrity and security, exposing an API that communicates directly with the central UniverSIS API for efficient data exchange. Published as part of my BSc thesis.",
    tech: ["Node.js", "JavaScript", "TypeScript", "NPM"],
    category: "Backend / Security",
    metrics: "Thesis · Published",
    repo: "https://gitlab.com/universis/data-trees",
  },
  {
    title: "HomiDirect",
    description:
      "A modern real estate platform connecting landlords and tenants. End-to-end application with a React front end and a FastAPI backend backed by PostgreSQL.",
    tech: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic"],
    category: "Full Stack",
    metrics: "Personal Project",
    repo: "https://github.com/pantgram/homidirect",
    // live: "https://homidirect.com",
  },
  {
    title: "Articles Database REST API",
    description:
      "A RESTful API for an articles management system covering articles, users, tags and comments. Includes JWT authorization, full-text search and export features.",
    tech: ["Django", "Django REST Framework", "PostgreSQL"],
    category: "Backend",
    metrics: "Personal Project",
    repo: "https://github.com/pantgram/ArticlesRESTapi",
  },
  {
    title: "Groceries Analyzer",
    description:
      "A data analysis notebook that explores and classifies grocery receipts, turning raw purchase data into structured insights with Python and pandas.",
    tech: ["Python", "Pandas", "Jupyter", "Data Analysis"],
    category: "Data / ML",
    metrics: "Personal Project",
    repo: "https://github.com/pantgram/Groceries-Analyzer",
  },
];
