import { client } from '@/lib/contentful'

const convertAcc = (rawData : any) => {
	const rawTab = rawData?.fields;
	return {
		title: rawTab?.title,
		description: rawTab?.description,
	};
}

const convertTab = (rawData : any) => {
	const rawTab = rawData?.fields;
	return {
		name: rawTab?.name,
		accordions: rawTab?.accordions?.map((entry: any) =>convertAcc(entry)),
	};
}

export async function fetchTabEntries(){
  const resData = await client.getEntries({
		limit: 3,
		content_type: "tabs"
	})

	if(resData && resData?.items && resData?.items?.length > 0) {
		const Tabs = resData?.items?.map((entry: any) => convertTab(entry));
		return Tabs;
	}
	return [];
}