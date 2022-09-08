import React from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import api from '../Api'

const Home = () => {
  return (
    <>
      <Hero />
      <Row rowID='1' title='Popular' fetchURL={api.requestPopular} />
      <Row rowID='2' title='Trending' fetchURL={api.requestTrending} />
      <Row rowID='3' title='Top Rated' fetchURL={api.requestTopRated} />
      <Row rowID='4' title='Horror' fetchURL={api.requestHorror} />
      <Row rowID='5' title='UpComing' fetchURL={api.requestUpcoming} />
    </>
  )
}

export default Home
