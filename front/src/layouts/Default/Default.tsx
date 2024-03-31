import {Outlet} from 'react-router-dom'
import {Header} from '../../components/Header/Header'
import './Steps.scss'

export const Default = () => {
    return (
        <main className='page'>
            <Header/>
            <div className="page-content">
                <Outlet/>
            </div>
        </main>
    )
}
