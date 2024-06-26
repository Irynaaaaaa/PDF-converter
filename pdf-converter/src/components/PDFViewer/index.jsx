import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import DefaultPreview from './DefaultPreview';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PDFViewer({ url }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return url ? (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="h-full">
        <Viewer fileUrl={url} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  ) : (
    <DefaultPreview text="No files selected" />
  );
}
