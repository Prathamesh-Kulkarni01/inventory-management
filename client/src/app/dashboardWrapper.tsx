import React from 'react'
import Navbar from './(components)/Navbar'
import SideBar from './(components)/SideBar'

type Props = {
    children:React.ReactNode
}

const DashboardWrapper = ({children}: Props) => {
  return (
    <div className='light h-screen flex bg-gray-50 textgre904 min-h-screen'>
        <SideBar/>
        <main className='flex flex-col w-full h-full py-7 px-9  md:pl-24'>
            <Navbar/>
        {children}
        </main>
    </div>
  )
}

export default DashboardWrapper