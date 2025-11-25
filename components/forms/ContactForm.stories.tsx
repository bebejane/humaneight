import preview from '@/.storybook/preview';
import ContactForm from './ContactForm';

const meta = preview.meta({
	component: ContactForm,
});

export const Test = meta.story({
	args: {
		localization: {
			availableCountries: [
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'AT',
					name: 'Austria',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'BE',
					name: 'Belgium',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'BGN',
						name: 'Bulgarian Lev',
						symbol: 'лв.',
					},

					isoCode: 'BG',
					name: 'Bulgaria',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'CAD',
						name: 'Canadian Dollar',
						symbol: '$',
					},

					isoCode: 'CA',
					name: 'Canada',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'HR',
					name: 'Croatia',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'CY',
					name: 'Cyprus',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'CZK',
						name: 'Czech Koruna',
						symbol: 'Kč',
					},

					isoCode: 'CZ',
					name: 'Czechia',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'DKK',
						name: 'Danish Krone',
						symbol: 'kr.',
					},

					isoCode: 'DK',
					name: 'Denmark',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'EE',
					name: 'Estonia',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'FI',
					name: 'Finland',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'FR',
					name: 'France',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'DE',
					name: 'Germany',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'GR',
					name: 'Greece',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'HUF',
						name: 'Hungarian Forint',
						symbol: 'Ft',
					},

					isoCode: 'HU',
					name: 'Hungary',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'IE',
					name: 'Ireland',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'IT',
					name: 'Italy',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'JPY',
						name: 'Japanese Yen',
						symbol: '¥',
					},

					isoCode: 'JP',
					name: 'Japan',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'LV',
					name: 'Latvia',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'LT',
					name: 'Lithuania',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'LU',
					name: 'Luxembourg',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'MT',
					name: 'Malta',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'NL',
					name: 'Netherlands',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'NO',
					name: 'Norway',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'PLN',
						name: 'Polish Złoty',
						symbol: 'zł',
					},

					isoCode: 'PL',
					name: 'Poland',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'PT',
					name: 'Portugal',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'RON',
						name: 'Romanian Leu',
						symbol: 'Lei',
					},

					isoCode: 'RO',
					name: 'Romania',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'SK',
					name: 'Slovakia',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'SI',
					name: 'Slovenia',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'KRW',
						name: 'South Korean Won',
						symbol: '₩',
					},

					isoCode: 'KR',
					name: 'South Korea',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'EUR',
						name: 'Euro',
						symbol: '€',
					},

					isoCode: 'ES',
					name: 'Spain',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'SEK',
						name: 'Swedish Krona',
						symbol: 'kr',
					},

					isoCode: 'SE',
					name: 'Sweden',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'CHF',
						name: 'Swiss Franc',
						symbol: 'CHF',
					},

					isoCode: 'CH',
					name: 'Switzerland',
					unitSystem: 'METRIC_SYSTEM',
				},
				{
					currency: {
						isoCode: 'GBP',
						name: 'British Pound',
						symbol: '£',
					},

					isoCode: 'GB',
					name: 'United Kingdom',
					unitSystem: 'IMPERIAL_SYSTEM',
				},
				{
					currency: {
						isoCode: 'USD',
						name: 'United States Dollar',
						symbol: '$',
					},

					isoCode: 'US',
					name: 'United States',
					unitSystem: 'IMPERIAL_SYSTEM',
				},
			],

			country: {
				currency: {
					isoCode: 'USD',
					name: 'United States Dollar',
					symbol: '$',
				},

				isoCode: 'US',
				name: 'United States',
				unitSystem: 'IMPERIAL_SYSTEM',
			},
		},
	},
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/se',
			},
		},
	},
});
