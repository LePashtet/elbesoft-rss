import {Outlet} from 'react-router-dom'
import {Header} from '../../components/Header/Header'
import './Default.scss'

export const Default = () => {
    return (
        <>
        <Header/>
        <main className='page'>
            <div className="page-content">
                <Outlet/>
            </div>
        </main>
        </>
    )
}
