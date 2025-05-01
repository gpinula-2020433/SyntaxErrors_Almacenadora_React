import React from 'react'
import './ReportPage.css'

export const ReportPage = () => {
  return (
    <>
      <div className='report-containter'>
        {/* Report Banner */}
        <section className='report-banner'>
          <div className='report-content'>
            <div className='report-icon'>📊</div>
            <h1>REPORT</h1>
            <button className='report-button' onClick={() => navigate('/dashboard')}>
              Generate Report
            </button>
          </div>
        </section>

        <section className='information-foot'>
          <div className='foot-content information-content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed scelerisque ex ac maximus venenatis. 
              Sed euismod efficitur ipsum ac sodales. Donec vel leo consequat, iaculis urna non, pellentesque ex. 
              Suspendisse elit nibh, cursus sit amet pretium et, aliquet et nulla. Proin semper aliquam eros sed interdum. 
              Donec tellus felis, placerat et leo ac, sodales venenatis odio. Nunc pulvinar lacinia tristique. 
              Aenean ac sapien in neque viverra vulputate. Donec at purus quis neque dapibus rutrum ac quis ante. 
              Aenean vel dolor non arcu rhoncus mollis. Duis auctor ipsum sapien. Nulla et ante pharetra, iaculis leo at, lacinia sem. 
              Nulla quis pulvinar ipsum. Mauris ac laoreet risus. Nunc tortor est, condimentum eu odio at, varius lacinia lorem.</p>
          </div>
        </section>

      </div>
    </>
  )
}
