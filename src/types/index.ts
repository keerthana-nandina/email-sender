export interface EmailData {
  id: string;
  companyName: string;
  email: string;
  status: 'pending' | 'sent' | 'scheduled' | 'failed';
  deliveryStatus: 'delivered' | 'opened' | 'bounced' | 'failed' | null;
  scheduledTime?: string;
}

export interface Analytics {
  totalEmails: number;
  sentEmails: number;
  pendingEmails: number;
  scheduledEmails: number;
  failedEmails: number;
  responseRate: number;
}

export interface EmailTemplate {
  subject: string;
  content: string;
}