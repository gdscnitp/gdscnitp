import { StylesContext } from '@material-ui/styles';
import Head from 'next/head'
import styles from '../styles/LandingPage.module.css'
import Image from 'next/image'

// images
import Logo from "../public/images/Logo.svg";

function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name = 'description' content = {description} />
                <meta name = 'keywords' content = {keywords} />
            </Head>
            <div className={styles.Logo}>
                
            <Image src={Logo} height={46} width={364} />
            </div>

            <div>
                {children}
            </div>
        </div>
    )
}
Layout.defaultProps = {
    title : "Welcome to DSC",
    keywords : "..",
    description : ".."
}
export default Layout


