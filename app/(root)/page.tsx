import Header from '@/components/view/Header'
import ProfileBar from '@/components/view/ProfileBar'
import { fetchTabEntries } from '@/contentful/GetTabs'
import { fetchChartEntries } from '@/contentful/GetChartData'
import EChartsRow from '@/components/view/EChartsRow'
import TabsUi from '@/components/view/TabsUi'


export default async function Home() {

  const tabsRes = await fetchTabEntries()
  const chartRes = await fetchChartEntries()

  return (
    <div className='wrapper'>
      <Header />
      <div className='container'>
        <div className='cl-row '>
          <div className="cl-col-4 left-col">
            <ProfileBar />
          </div>
          <div className="cl-col-8 right-col">
            <div className="cn-row">
              <EChartsRow chartRec={chartRes} />
            </div>
            <div className="cn-row">
              <div className="tabs">
                <TabsUi tabsRes={tabsRes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

