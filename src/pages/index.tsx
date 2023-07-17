import { useRouter } from 'next/router'
import React from 'react'

const Home = () => {

  const {pathname} = useRouter()
console.log(pathname)
  return (
    <div>
      Hello
    </div>
  )
}

export default Home
