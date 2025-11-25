import '../styles/index.scss';
import { definePreview } from '@storybook/nextjs-vite';
import addonA11y from '@storybook/addon-a11y';

export default definePreview({
	// 👇 Add your addons here
	addons: [addonA11y()],
	parameters: {
		// type-safe!
		a11y: {
			options: { xpath: true },
		},
	},
});
