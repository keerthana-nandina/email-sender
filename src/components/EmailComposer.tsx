import React from 'react';
import { Send } from 'lucide-react';

export function EmailComposer() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Email Template</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter email subject"
          />
        </div>
        <div>
          <label htmlFor="template" className="block text-sm font-medium text-gray-700">
            Email Template
          </label>
          <div className="mt-1">
            <textarea
              id="template"
              rows={4}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your email template with placeholders like {Company Name}, {Location}"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Send className="h-4 w-4 mr-2" />
            Save Template
          </button>
        </div>
      </div>
    </div>
  );
}