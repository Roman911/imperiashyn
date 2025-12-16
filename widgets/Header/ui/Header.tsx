import { createStore } from '@/shared/store/createStore';
import { aliasApi } from '@/entities/alias/api/alias.api';
import { settingsApi } from '@/entities/settings/api/settings.api';
import TopBar from '@/widgets/Header/ui/TopBar';

export default async function HeaderServer() {
	const store = createStore();

	// 🔥 RTK Query SSR prefetch
	await store.dispatch(
		aliasApi.endpoints.fetchAliasAll.initiate()
	);

	await store.dispatch(
		settingsApi.endpoints.fetchSettings.initiate()
	);

	console.log(store.getState());

	return (
		<header>
			123
			{/*<HeaderProgress />*/}
			{/*<TopLine alias={ alias } settingsData={ settingsData }/>*/}
			{/*<TopBar alias={  } />*/}
			{/*<HeaderMain settingsData={ settingsData } />*/}
			{/*<HeaderMenu />*/}
		</header>
	);
}