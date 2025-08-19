// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
	site: 'https://fablabgharbia.netlify.app',
	integrations: [
		starlight({
			title: 'Gharbiya FabLab',
			plugins: [
				starlightThemeNova({
					nav: [
						{ label: 'Home', href: '/' },
						{ label: 'About', href: '/fablab-info' },
						{ label: 'Machines', href: '/machine' },
						{ label: 'Team', href: '/team/fablab-team-members' },
					],
				})
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/fablabgharbia/docs' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Home', link: '/' },
						{ label: 'About FabLab', link: '/fablab-info' },
					],
				},
				{
					label: 'Equipment',
					items: [
						{ label: 'Machine Overview', link: '/machine' },
						{ label: 'Software Setup', link: '/machine-software' },
						{
							label: 'Machines',
							autogenerate: { 
								directory: 'machines',
								collapsed: true
							}
						},
					],
				},
				{
					label: 'Software & Tools',
					items: [
						{ label: 'FreeCAD', link: '/freecad' },
						{ label: 'Software Guide', link: '/software' },
					],
				},
				{
					label: 'Team & Activities',
					autogenerate: { 
						directory: 'team',
						collapsed: false
					}
				},
				{
					label: 'Inventory',
					autogenerate: { 
						directory: 'inventory',
						collapsed: true
					}
				},
				{
					label: 'Learning Resources',
					items: [
						{ label: 'Challenge Overview', link: '/challenges/new-challenges' },
						{ 
							label: 'All Challenges',
							autogenerate: { 
								directory: 'challenges'
							}
						},
					],
				},
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.svg',
						type: 'image/svg+xml',
					},
				},
			]
		}),
	],
});
