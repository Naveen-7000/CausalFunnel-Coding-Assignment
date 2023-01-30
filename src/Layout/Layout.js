import React from 'react'
import "../App.css";
import Footer from '../component/Footer';
import Header from '../component/Header';
import TableComponent from '../component/TableComponent';

const Layout = ({children}) => {
  return (
    <div className='layout'>
    <Header />
    <div className='bottom-layout'>
    <TableComponent />
    <Footer />
    </div>
    </div>
  )
}

export default Layout