'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { IReactQueryProps } from './types';

const queryClient = new QueryClient();

const ReactQueryProvider = ({ children }: IReactQueryProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default ReactQueryProvider;
