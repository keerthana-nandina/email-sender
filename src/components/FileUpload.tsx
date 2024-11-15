import React, { useCallback } from 'react';
import { Upload, FileSpreadsheet, Download } from 'lucide-react';
import { parseCSV } from '../utils/csvParser';

export function FileUpload() {
  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const parsedData = parseCSV(content);
        console.log('Parsed CSV data:', parsedData);
        // TODO: Update application state with parsed data
      };
      reader.readAsText(file);
    }
  }, []);

  const handleDownloadSample = () => {
    const csvContent = `Company Name,Contact Name,Email,Industry,Location,Last Contact,Products,Notes
TechCorp Solutions,John Smith,contact@techcorp.com,Technology,San Francisco,2024-01-15,Cloud Services,"Interested in enterprise solutions"
Global Innovations Ltd,Emma Watson,info@globalinnovations.co.uk,Manufacturing,London,2024-02-01,Industrial Equipment,"Previous customer, looking to upgrade"
Quantum Dynamics Inc,Michael Chen,hello@quantumdynamics.com,Research,Boston,2024-02-15,Research Tools,"New lead from conference"
EcoSmart Systems,Sarah Johnson,support@ecosmart.io,Environmental,Portland,2024-01-30,Green Energy Solutions,"Requesting product demo"
DataFlow Analytics,David Brown,sales@dataflow.tech,Data Science,Toronto,2024-02-10,Analytics Platform,"Follow-up needed"`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'sample-contacts.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Import Data</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <div className="flex flex-col items-center">
          <FileSpreadsheet className="h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop your CSV file or Google Sheet data
          </p>
          <p className="text-xs text-gray-500">
            Supported formats: CSV, XLSX, Google Sheets
          </p>
          <div className="mt-4 flex gap-4">
            <label className="cursor-pointer">
              <input
                type="file"
                accept=".csv"
                className="hidden"
                onChange={handleFileUpload}
              />
              <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <Upload className="h-4 w-4 mr-2" />
                Upload File
              </span>
            </label>
            <button
              onClick={handleDownloadSample}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}