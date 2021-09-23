import type {VFC} from "react";
import {Card, StatisticsWidget} from "wix-style-react";

export const StatisticsCardExample:VFC = () => (
  <Card>
    <Card.Header title={'Article performance'} />
    <Card.Divider />
    <Card.Content>
      <StatisticsWidget
        items={[
          {
            value: '500',
            description: 'Views',
            percentage: 21,
            onClick: () => null,
          },
          {
            value: '350',
            description: 'Uniq visits',
            percentage: 21,
            invertedPercentage: true,
          },
          {
            value: '3.9',
            description: 'Pages per visitor',
            percentage: -11,
          },
          {
            value: '$3,500',
            description: 'Revenue',
            percentage: -11,
            invertedPercentage: true,
            descriptionInfo: 'Sales on Thursday',
            onClick: () => null,
          },
          {
            value: '0',
            description: 'Shares',
            percentage: 0,
            invertedPercentage: true,
            descriptionInfo: 'Clicks on Friday',
            onClick: () => null,
          },
        ]}
      />
    </Card.Content>
  </Card>
)