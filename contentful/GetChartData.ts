import { client } from '@/lib/contentful'

const convertChartData = (rawData : any) => {
	const rawTab = rawData?.fields;
	return {
		category: rawTab?.category,
		value: rawTab?.value,
	};
}

export async function fetchChartEntries(){
  const resData = await client.getEntries({
		limit: 1,
		content_type: "chart"
	})

	if(resData && resData?.items && resData?.items?.length > 0) {
		const rec = resData?.items[0]?.fields?.chartRecored;
		const chartData = rec?.map((entry: any) => convertChartData(entry));
		return chartData;
	}
	return [];
}