import s from './ResearchSummary.module.scss';

export default function ResearchSummary() {
	return (
		<div className={s.container}>
			<h2>How the research was done.</h2>
			<p>
				Online survey of 1,000 UK adults aged 18 and over, completed 30 January to 6 February 2026.
				500 identified as neurodivergent and 500 did not. Neurodivergence was self reported.
				Fieldwork by 3Gem Research and Insights on their in-house panel of double opt-in
				respondents, compliant with the Market Research Society code of conduct. Percentages are
				rounded, so some sets do not add to exactly 100. The two groups differ in age. The
				neurodivergent group has a mean age of 39, the non neurodivergent group 51, and the non
				neurodivergent group has almost no one under 25. Comparisons between the groups should be
				read with that in mind.
			</p>
			<div className={s.stats}>
				{data.map(({ name, count, women, men, ages }) => (
					<div className={s.stat} key={name}>
						<div className={s.name}>
							{name}, {count}
						</div>
						<div className={s.ages}>
							{ages.map(({ age, percentage }) => (
								<div className={s.row}>
									<div className={s.age}>{age}</div>
									<div className={s.bar}>
										<div className={s.value} style={{ width: `${percentage}%` }}></div>
									</div>
									<div className={s.percentage}>{percentage}%</div>
								</div>
							))}
						</div>
						<div className={s.gender}>
							{men}% men, {women}% women
						</div>
					</div>
				))}
			</div>
			<div className={s.notes}>
				Age bars are drawn at twice the scale of the other charts so the shape of each group is
				readable.
			</div>
		</div>
	);
}

const data = [
	{
		name: 'Neurodivergent',
		count: 500,
		women: 51,
		men: 49,
		ages: [
			{
				age: '18 to 24',
				percentage: 12,
			},
			{
				age: '25 to 34',
				percentage: 30,
			},
			{
				age: '35 to 44',
				percentage: 27,
			},
			{
				age: '45 to 54',
				percentage: 17,
			},
			{
				age: '55 to 64',
				percentage: 10,
			},
			{
				age: '65 and over',
				percentage: 4,
			},
		],
	},
	{
		name: 'Non neurodivergent',
		count: 500,
		women: 49,
		men: 51,
		ages: [
			{
				age: '18 to 24',
				percentage: 0,
			},
			{
				age: '25 to 34',
				percentage: 14,
			},
			{
				age: '35 to 44',
				percentage: 22,
			},
			{
				age: '45 to 54',
				percentage: 23,
			},
			{
				age: '55 to 64',
				percentage: 23,
			},
			{
				age: '65 and over',
				percentage: 18,
			},
		],
	},
];
