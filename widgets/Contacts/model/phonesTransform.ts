import { LangConfig } from '@/shared/types/settings';
import { phoneTypes } from '@/widgets/Contacts/model/phoneTypes';

export const phonesTransform = (langConfig: LangConfig): phoneTypes[] => (
	[
		{
			phone: langConfig.config_telephone_life,
			url: langConfig.config_telephone_life_url,
			logo: 'lifecell'
		},
		{
			phone: langConfig.config_telephone_vodafone,
			url: langConfig.config_telephone_vodafone_url,
			logo: 'vodafone'
		},
		{
			phone: langConfig.config_telephone_kievstar,
			url: langConfig.config_telephone_kievstar_url,
			logo: 'kievstar'
		},
	]
);
