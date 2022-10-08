import React, { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { FlowProvider } from "./context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <FlowProvider>{children}</FlowProvider>;
    </QueryClientProvider>
  );
};
