import React from 'react';
import { Layout } from './Layout';
import { AnalyticsCards } from './AnalyticsCards';
import { EmailList } from './EmailList';
import { FileUpload } from './FileUpload';
import { EmailComposer } from './EmailComposer';
import { Settings } from './Settings';

export function Dashboard() {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FileUpload />
          <Settings />
        </div>
        <AnalyticsCards />
        <EmailComposer />
        <EmailList />
      </div>
    </Layout>
  );
}