import { EmailData } from '../types';

export function parseCSV(csvContent: string): EmailData[] {
  const lines = csvContent.split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map((line, index) => {
    const values = line.split(',');
    return {
      id: (index + 1).toString(),
      companyName: values[0],
      email: values[2],
      status: 'pending',
      deliveryStatus: null,
      scheduledTime: new Date(Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 16)
        .replace('T', ' ')
    } as EmailData;
  });
}