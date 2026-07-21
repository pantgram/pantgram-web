export interface NavLink {
	href: string;
	label: string;
}

export interface SocialLink {
	platform: string;
	url: string;
	icon: 'github' | 'linkedin';
	ariaLabel: string;
}

export interface ContactInfo {
	email: string;
	location: string;
	availability: string;
	availabilityStatus: 'open' | 'limited' | 'closed';
}

export interface SiteData {
	brandName: string;
	title: string;
	description: string;
	navLinks: NavLink[];
	contact: ContactInfo;
	socials: SocialLink[];
}

export const site: SiteData = {
	brandName: 'Pantgram',
	title: 'Pantelis Grammatikopoulos | Software Engineer',
	description:
		'Software Engineer specializing in backend systems, APIs, microservices, and AI-powered automation.',
	navLinks: [
		{ href: '#about', label: 'About' },
		{ href: '#services', label: 'Services' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#contact', label: 'Contact' }
	],
	contact: {
		email: 'panteleimon.grammatikopoulos@gmail.com',
		location: 'Thessaloniki, Greece',
		availability: 'Open for new opportunities',
		availabilityStatus: 'open'
	},
	socials: [
		{
			platform: 'GitHub',
			url: 'https://github.com/pantgram',
			icon: 'github',
			ariaLabel: 'GitHub'
		},
		{
			platform: 'LinkedIn',
			url: 'https://www.linkedin.com/in/pantelis-grammatikopoulos-077871218/',
			icon: 'linkedin',
			ariaLabel: 'LinkedIn'
		}
	]
};
