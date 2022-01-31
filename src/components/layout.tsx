import React from 'react'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Header />
      <main>
        { children }
      </main>
    </>
  )
}

export default Layout