import { useMemo, useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SimpleGrid from './simple-grid.mdx'
import {FormioProvider } from "@formio/react";
import { Formio } from "@formio/js";
import premium from "@formio/premium";
import aggrid from "@formio/aggrid";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Layout from './Layout';
import Home from './Home.jsx';

Formio.license = // Live license with premium components
  "eyJhbGciOiJQUzI1NiJ9.eyJsaWNlbnNlTmFtZSI6IkxpdmUgTGljZW5zZSBQcmVtaXVtIFZpa2EiLCJpYXQiOjE3NDg3MjUyMDAsImV4cCI6MTc4MDMwNDQwMCwiZmFpbERhdGUiOjE3ODE2MDA0MDAsInRlcm1zIjp7InByZW1pdW0iOnRydWUsIm9mZmxpbmUiOmZhbHNlLCJlbnRlcnByaXNlQnVpbGRlciI6ZmFsc2UsInJlcG9ydGluZyI6ZmFsc2UsInNxbGNvbm5lY3RvciI6ZmFsc2UsImVzaWduIjpmYWxzZSwiZW5kcG9pbnRzIjpbIiouZm9ybS5pbyJdLCJob3N0bmFtZXMiOlsiKi5jc2IuYXBwIl19LCJpc3MiOiJodHRwczovL2Zvcm0uaW8iLCJzdWIiOiJGb3JtLmlvIn0.rH2GGEan6M6uZxnoT8rZxjb6PmkxPu2D8Ucf5eM8CcOUqVjfM-XjT-sZ5o5LXBx-uQPbcG3MifD5TMXaUdkA9uTEDBxuvehYnMUiDr981OKffNKI6lCrrbZA5q-dRB8Pd9pl8AvfSE27MKgJLrmtlNp0-8HSlmQO_wCZNPxwu85dT6TNLzgO6e1kBInAeLUMwH78kutOhWaMCSlEhBu3vgxV2owVItYO_fjoUn6e_Xxy_FhFegPeFlTMl8ypX2nlRFpu1Ypogh8P6-OkKTHSq4ThILeU9LoXFlhwnYc4yT6MYgolzlvVDH-WN9joiQLDMf2sVS5a4Yvwi6P2jR6I_A";
Formio.use(premium);
Formio.use(aggrid);

const mdxModules = import.meta.glob('./*.mdx', { eager: true });

const mdxRoutes = () => {
  return Object.entries(mdxModules).map(([path, mod]) => {
    const fileName = path.replace('./', '').replace('.mdx', '');
    const Component = mod.default;
    return (
      <Route
        key={fileName}
        path={`/${fileName}`}
        element={<Layout><Component /></Layout>}
      />
    );
  });
};

export default function App() {
  
  
  return (
    <FormioProvider Formio={Formio}>
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            {mdxRoutes()}
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
      
      
        
      
    
    </FormioProvider>
  );
}


