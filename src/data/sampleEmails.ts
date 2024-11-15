import { EmailData } from '../types';

export const sampleEmails: EmailData[] = [
  {
    id: '1',
    companyName: 'TechCorp Solutions',
    email: 'contact@techcorp.com',
    status: 'sent',
    deliveryStatus: 'delivered',
    scheduledTime: '2024-03-19 10:00'
  },
  {
    id: '2',
    companyName: 'Global Innovations Ltd',
    email: 'info@globalinnovations.co.uk',
    status: 'scheduled',
    deliveryStatus: null,
    scheduledTime: '2024-03-20 14:30'
  },
  {
    id: '3',
    companyName: 'Quantum Dynamics Inc',
    email: 'hello@quantumdynamics.com',
    status: 'pending',
    deliveryStatus: null,
    scheduledTime: '2024-03-21 09:15'
  },
  {
    id: '4',
    companyName: 'EcoSmart Systems',
    email: 'support@ecosmart.io',
    status: 'failed',
    deliveryStatus: 'bounced',
    scheduledTime: '2024-03-18 16:45'
  },
  {
    id: '5',
    companyName: 'DataFlow Analytics',
    email: 'sales@dataflow.tech',
    status: 'sent',
    deliveryStatus: 'opened',
    scheduledTime: '2024-03-19 11:30'
  },
  {
    id: '6',
    companyName: 'CloudNet Services',
    email: 'business@cloudnet.com',
    status: 'scheduled',
    deliveryStatus: null,
    scheduledTime: '2024-03-22 13:00'
  },
  {
    id: '7',
    companyName: 'Cyber Shield Security',
    email: 'info@cybershield.net',
    status: 'sent',
    deliveryStatus: 'delivered',
    scheduledTime: '2024-03-19 15:20'
  },
  {
    id: '8',
    companyName: 'Smart IoT Solutions',
    email: 'contact@smartiot.com',
    status: 'pending',
    deliveryStatus: null,
    scheduledTime: '2024-03-23 10:45'
  }
];