import { EmotionCache } from "@emotion/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};
