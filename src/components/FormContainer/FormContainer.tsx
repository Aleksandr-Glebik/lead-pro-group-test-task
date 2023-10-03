
import { useEffect, useState } from 'react'
import styles from './FormContainer.module.css'
import { Outlet, useLocation } from "react-router-dom"
import clsx from 'clsx'
import { useStateContext } from '../../rootState'

const FormContainer = () => {
  const location = useLocation()
  const [pageNum, setPageNum] = useState<string | null>('1')
  const { state } = useStateContext()
  console.log('state app', state);

  useEffect(() => {
    if (location.pathname.length === 1) {
      setPageNum('1')
    } else if (location.pathname === '/result') {
      setPageNum(null)
    } else {
      setPageNum(location.pathname.slice(-1))
    }
  }, [location])

  return (
    <form className={clsx(
            styles.container,
            pageNum ? styles.paddingTop : ''
          )}
    >
      {
        pageNum && (
          <div className={styles.page}>
            <span className={styles.page_active}>
              { pageNum }
            </span>/3
          </div>
        )
      }
      <Outlet />
    </form>
  )
}

export default FormContainer