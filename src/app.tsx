import type React from 'react';
import {FilePicker} from "wix-style-react";
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
