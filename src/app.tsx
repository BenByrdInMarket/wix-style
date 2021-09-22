import type React from 'react';
import {Button} from 'wix-style-react';

export interface AppProps {
  className?: string;
}

export const App: React.VFC<AppProps> = () => {
  return (
    <main>
      <Button>
        Click me
      </Button>
    </main>
  );
};
