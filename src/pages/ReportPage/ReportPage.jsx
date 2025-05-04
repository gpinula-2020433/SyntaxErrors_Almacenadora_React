import React, { useEffect, useState } from 'react'
import './ReportPage.css'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import { getBestSellingProducts } from '../../services/api'
import { data } from 'react-router-dom'

export const ReportPage = () => {
  const [productData, setProductData] = useState({
    labels: [],
    datasets: []
  })

  useEffect(()=>{
    const fetchData = async()=>{
      const products = await getBestSellingProducts()
      const labels = products.map(p = p.name)
      const sales = products.map(p = p.soldCount)

      setProductData({
        labels,
        datasets:[
          {
            label: "Productos más vendidios",
            data : sales,
          }
        ]
      })
    }
    fetchData()
  }, [])


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
            <Bar
              data={productData}
            />
          </div>
        </section>

      </div>
    </>
  )
}
