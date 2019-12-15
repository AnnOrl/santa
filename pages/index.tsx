import React from 'react'
import withAppLayout from '../components/AppLayout/Layout'
import Banner from '../components/Banner/Banner'
import Steps from '../components/Steps/Steps'


const Home = () => (
    <>
        <Banner/>
        <Steps/>
    </>
)

export default withAppLayout()(Home)
