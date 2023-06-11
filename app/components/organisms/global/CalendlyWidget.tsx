import Script from 'next/script';

function CalendlyWidget() {
  return (
    <>
      {/* Calendly inline widget */}
      <div className="calendly-inline-widget" data-url="https://calendly.com/competify/30min" style={{ minWidth: '320px', height: '700px' }}></div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  );
}

export default CalendlyWidget;