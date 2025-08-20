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
			head: [
				// Meta tags for site verification
				{
					tag: 'meta',
					attrs: {
						name: 'msvalidate.01',
						content: '172AB24A6FB2AE59B2ADE9024918D626',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'google-site-verification',
						content: 'O6m7pE8it0AIdabIBBkBi8lPgacgag9PlVoBXV_O8oA',
					},
				},
				// Favicon
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/fablab-logo.png',
						type: 'image/svg+xml',
					},
				},
				// Umami analytics script tag
				{
					tag: 'script',
					attrs: {
						defer: true,
						src: 'https://umami.saifdev.org/script.js',
						'data-website-id': '42658e4e-4a81-4138-8c72-bf9c64fa1575',
					},
				},
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
		}),
	],
});
