import React from 'react';
import { Mail, Clock, Shield } from 'lucide-react';

export function Settings() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Email Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
          <Mail className="h-6 w-6 text-gray-400" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">Email Provider</p>
            <button className="mt-1 text-sm text-indigo-600 hover:text-indigo-500">
              Connect Email Account
            </button>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
          <Clock className="h-6 w-6 text-gray-400" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">Sending Schedule</p>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>50 emails per hour</option>
              <option>100 emails per hour</option>
              <option>Custom schedule</option>
            </select>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
          <Shield className="h-6 w-6 text-gray-400" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">ESP Integration</p>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>SendGrid</option>
              <option>Amazon SES</option>
              <option>Mailgun</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}