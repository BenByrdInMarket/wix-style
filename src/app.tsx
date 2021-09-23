import type React from 'react';
import {FilePicker, AreaChart} from "wix-style-react";
import Heading from "./Heading";
import ComponentWrapper from "./ComponentWrapper";
import StepperWithState from "./stepper";
import ProgressBars from "./progress-bars";
import Loaders from "./Loaders";
import Sliders from "./Sliders";
import BreadcrumbThemes from "./BreadcrumbThemes";
import UploadMedia from "./UploadMedia";
import ThemedAddItem from "./ThemedAddItem";
import InnerWrapper from "./InnerWrapper";
import FileUploadExample from "./FileUpload";
import {FormsExample} from "./FormsExample";
import {FormCardExample} from "./FormCardExample";
import {RichTextExample} from "./RichTextExample";
import {StatisticsCardExample} from "./StatisticsCardExample";

export interface AppProps {
  className?: string;
}

export const App: React.VFC<AppProps> = () => {
  return (
    <>
      <Heading value={'Wix Style Kit for React'} />

      <ComponentWrapper title={'Forms'}>
        <InnerWrapper>
          <FormsExample />
        </InnerWrapper>
      </ComponentWrapper>

      <ComponentWrapper title={'Form Card'}>
        <InnerWrapper>
          <FormCardExample />
        </InnerWrapper>
      </ComponentWrapper>

      <ComponentWrapper title={'Rich Text'}>
        <RichTextExample />
      </ComponentWrapper>

      <ComponentWrapper title={'Statistics Card'}>
        <StatisticsCardExample />
      </ComponentWrapper>

      <ComponentWrapper title={'Area Chart'}>
        <InnerWrapper>
          <AreaChart
            data={[
              {
                value: 1170,
                label: '12/9',
              },
              {
                value: 2030,
                label: '12/10',
              },
              {
                value: 1500,
                label: 'Nov',
              },
            ]}
            tooltipContent={(item) => 'tooltip ' + item.label}
          />
        </InnerWrapper>
      </ComponentWrapper>

      <ComponentWrapper title={'Breadcrumbs'}>
        <BreadcrumbThemes />
      </ComponentWrapper>

      <ComponentWrapper title={'Stepper'}>
        <StepperWithState />
      </ComponentWrapper>

      <ComponentWrapper title={'Progress Bars'}>
        <ProgressBars />
      </ComponentWrapper>

      <ComponentWrapper title={'Loaders'}>
        <Loaders />
      </ComponentWrapper>

      <ComponentWrapper title={'Sliders'}>
        <Sliders />
      </ComponentWrapper>

      <ComponentWrapper title={'Upload / Add Items'}>
        <InnerWrapper>
          <>
            <UploadMedia />
            <br />
            <ThemedAddItem />
          </>
        </InnerWrapper>
      </ComponentWrapper>

      <ComponentWrapper title={'File Picker'}>
        <FilePicker maxSize={800000} subLabel="No file chosen (Max size 8MB)" />
      </ComponentWrapper>

      <ComponentWrapper title={'File Upload'}>
        <FileUploadExample />
      </ComponentWrapper>
    </>
  );
};
