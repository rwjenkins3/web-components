import './Layout.css';


const Layout = ({children}) => {
    return(
        <div className='layoutGrid'>
            {children}
        </div>
    );
}


export default Layout;