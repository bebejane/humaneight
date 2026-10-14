import s from './ResearchBlock.module.scss';
import cn from 'classnames';

export type Props = {
	data: ResearchBlockRecord;
};

const GROUP_LABEL = 'Non neurodivergent respondents';

export default function ResearchBlock({
	data: { id, number, claim, eyebrow, heading, question, compare, group, note, answers },
}: Props) {
	return (
		<section className={cn(s.section, number && s.hasNumber)}>
			<div className={s.numberColumn}>
				{number && <div className={cn(s.number, 'very-big')}>{number}</div>}
			</div>
			<div className={s.content}>
				<header className={s.header}>
					{eyebrow && <h3 className={s.eyebrow}>{eyebrow}</h3>}
					{heading && <h2 className={s.heading}>{heading}</h2>}
					{claim && <p className={cn(s.claim, 'big')}>{claim}</p>}
					{group && <p className={cn(s.group, 'small')}>{GROUP_LABEL}</p>}
					{question && <p className={cn(s.question, 'mid')}>{question}</p>}
				</header>
				{compare && (
					<ul className={cn(s.legend, 'small')}>
						<li>
							<span className={s.swatch} />
							Neurodivergent
						</li>
						<li>
							<span className={cn(s.swatch, s.alt)} />
							Non neurodivergent
						</li>
					</ul>
				)}
				{answers?.length > 0 && (
					<ul className={s.answers}>
						{answers.map((answer) => (
							<li key={answer.id} className={s.answer}>
								<div className={s.row}>
									<span className={s.label}>{answer.label}</span>
									<span className={s.value}>
										{`${answer.value ?? 0}%`}
										{answer.valueSecond != null ? ` / ${answer.valueSecond}%` : ''}
									</span>
								</div>
								<div className={s.track}>
									<span className={s.bar} style={{ width: `${answer.value ?? 0}%` }} />
								</div>
								{answer.valueSecond != null && (
									<div className={s.track}>
										<span className={cn(s.bar, s.alt)} style={{ width: `${answer.valueSecond}%` }} />
									</div>
								)}
							</li>
						))}
					</ul>
				)}
				{note && <p className={cn(s.note, 'small')}>{note}</p>}
			</div>
		</section>
	);
}
