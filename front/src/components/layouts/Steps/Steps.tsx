import { Outlet } from 'react-router-dom'
import { Header } from '../../malecules/Header/Header'
import './Steps.scss'

export const Steps=()=>{
  return(
<main className='page'>
  <Header/>
  <div className="page-content">
    <Outlet/>
  </div>
</main>
)
}