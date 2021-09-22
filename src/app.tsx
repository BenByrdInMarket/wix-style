import type React from 'react';
import SimpleSidebar from './sidebar';
import StepperWithState from "./stepper";

export interface AppProps {
  className?: string;
}

export const App: React.VFC<AppProps> = () => {
  return (
    <>
      <SimpleSidebar />
      <StepperWithState />
    </>
  );
};
