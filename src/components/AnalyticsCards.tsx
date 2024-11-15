import React from 'react';
import { Mail, Clock, AlertCircle, CheckCircle, BarChart2 } from 'lucide-react';
import { sampleEmails } from '../data/sampleEmails';

export function AnalyticsCards() {
  const totalEmails = sampleEmails.length;
  const sentEmails = sampleEmails.filter(email => email.status === 'sent').length;
  const scheduledEmails = sampleEmails.filter(email => email.status === 'scheduled').length;
  const failedEmails = sampleEmails.filter(email => email.status === 'failed').length;
  const openedEmails = sampleEmails.filter(email => email.deliveryStatus === 'opened').length;
  const responseRate = Math.round((openedEmails / sentEmails) * 100);

  const stats = [
    {
      title: 'Total Emails',
      value: totalEmails.toString(),
      icon: Mail,
      color: 'bg-blue-500',
    },
    {
      title: 'Scheduled',
      value: scheduledEmails.toString(),
      icon: Clock,
      color: 'bg-yellow-500',
    },
    {
      title: 'Sent',
      value: sentEmails.toString(),
      icon: CheckCircle,
      color: 'bg-green-500',
    },
    {
      title: 'Failed',
      value: failedEmails.toString(),
      icon: AlertCircle,
      color: 'bg-red-500',
    },
    {
      title: 'Response Rate',
      value: `${responseRate}%`,
      icon: BarChart2,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}