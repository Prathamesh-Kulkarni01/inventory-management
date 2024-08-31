import React from 'react'
import Navbar from './(components)/Navbar'

type Props = {
    children:React.ReactNode
}

const DashboardWrapper = ({children}: Props) => {
  return (
    <div className='light flex bg-gray-50 textgre904 min-h-screen'>
        sidebar
        <main className='flex flex-col w-full h-full py-7 px-9 bg-gray-200 md:pl-24'>
            <Navbar/>
        {children}
        </main>
    </div>
  )
}

export default DashboardWrapper