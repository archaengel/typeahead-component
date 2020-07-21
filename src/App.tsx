import React, { PropsWithChildren } from 'react';
import { AppContainer } from './lib/components';

export const App = ({ children }: PropsWithChildren<{}>) => {
  return <AppContainer>{children}</AppContainer>;
};
