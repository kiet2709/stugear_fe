import { Outlet } from 'react-router'

import './HomeLayout.css'
import { Container } from 'react-bootstrap'
import ForumTitle from '../../components/Home/ForumTitle/ForumTitle'
import SideBar from '../../components/SideBar/SideBar'
import CategoryService from '../../service/CategoryService'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import Loading from '../../components/Loading'
const HomeLayout = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setLoading] = useState(true)
  const getCategories = async () => {
    const response = await CategoryService.getAllCategories()
    if (response?.status === 500) {
      console.log('Something wentwrong')
    } else {
      setCategories(response)
      setLoading(false)
    }
  }
  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <Header sticky={false}/>

      <Container>
        <ForumTitle />

        <div className="row">
          <div className="col-2 ">

            {isLoading
              ? (
              <Loading/>
                )
              : (
              <SideBar categories={categories} />
                )}

          </div>
          <div className="col content">
            <Outlet />
          </div>
        </div>
      </Container>
      <Footer/>
    </>
  )
}
export default HomeLayout
