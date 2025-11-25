import { defineMain } from '@storybook/nextjs-vite/node';
import path from 'path';

const __dirname = import.meta.dirname;

export default defineMain({
	framework: '@storybook/nextjs-vite',
	stories: ['../components/**/*.stories.tsx'],
	viteFinal: async (config) => {
		return {
			...config,
			resolve: {
				alias: {
					'@': path.resolve(__dirname, '../'),
				},
			},
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: `
              @use "sass:math";
    	        @use "@/styles/mediaqueries" as *;
            `,
					},
				},
			},
		};
	},
});
