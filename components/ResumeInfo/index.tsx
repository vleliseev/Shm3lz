import { useRouter } from 'next/dist/client/router';
import { useI18n } from '../../i18n';
import ExperienceList from '../ExperienceList';
import SkillsGrid from '../SkillsGrid';

interface ResumeInfoProps {
	bio: string;
	experience: ExperienceItem[];
	skillSections: SkillSectionData[];
}

const ResumeInfo: React.FC<ResumeInfoProps> = ({ bio, experience, skillSections }) => {
	const i18n = useI18n();

	return (
		<section className="resume-info">
			<div className="resume-info__about">
				<h2 className="resume-info__sec-title">{i18n('resume_info.about_title')}</h2>
				<p className="resume-info__bio">{bio}</p>
			</div>

			<div className="resume-info__exp">
				<h2 className="resume-info__sec-title">{i18n('resume_info.experience_title')}</h2>
				<ExperienceList items={experience} />
			</div>

			{skillSections.map((section, index) => (
				<div className="resume-info__skills-section" key={index}>
					<h2 className="resume-info__sec-title">{section.title}</h2>
					<SkillsGrid items={section.skills} />
				</div>
			))}
		</section>
	);
}

export default ResumeInfo;