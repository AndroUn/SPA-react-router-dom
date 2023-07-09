import { Link, Outlet } from "react-router-dom"
import styles from "../modules/styles.module.css"

const LinkLayout = () => {
    return(
        <div>
            <div className={styles.links}>
                <Link className={styles.link} to={'/'}>Home</Link>
                <Link className={styles.link} to={'/about'} >About</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default LinkLayout