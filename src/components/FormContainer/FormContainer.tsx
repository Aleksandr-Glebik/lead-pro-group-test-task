
import { useEffect, useState } from 'react'
import styles from './FormContainer.module.css'
import { Outlet, useLocation } from "react-router-dom"

const FormContainer = () => {
  const location = useLocation()
  const [pageNum, setPageNum] = useState<string>('1')

  useEffect(() => {
    if (location.pathname.length === 1) {
      setPageNum('1')
    } else {
      setPageNum(location.pathname.slice(-1))
    }
  }, [location])

  return (
    <form className={styles.container}>
      <div className={styles.page}>
        <span className={styles.page_active}>
          { pageNum }
        </span>/3
      </div>
      <Outlet />
    </form>
  )
}

export default FormContainer