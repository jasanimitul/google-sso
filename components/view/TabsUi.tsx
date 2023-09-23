"use client"
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { tabsType } from '@/interface/interface';
import AccordionUi from './AccordionUi';

export default function TabsUi({tabsRes}:{tabsRes:tabsType[]}) {
  return(
    <>
      <Tabs>
        <TabList>
          {tabsRes?.map((item: tabsType, index: number) => (
            <Tab key={index}>{item?.name}</Tab>
          ))}
        </TabList>

        {tabsRes?.map((item: tabsType, index: number) => (
          <TabPanel key={index} style={{padding:'10px'}}>
            <AccordionUi accData={item?.accordions} />
          </TabPanel>
        ))}
      </Tabs>
    </>
  )
}
