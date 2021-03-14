import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({path}) => (
  <nav>
    <section>
      <Link to={`${path}`} className="link">LineChart</Link>
      <Link to={`${path}/Bar`} className="link">BarChart</Link>
      <Link to={`${path}/Doughnut`} className="link">DoughnutChart</Link>
      <Link to={`${path}/credit-card`} className="link">   credit-card</Link>
    </section>
  </nav>
)
