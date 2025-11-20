import styles from "./NavBar.module.css"

function NavBar(){

    return(
        <>
            <div className={styles.navContainer}>

                <img    src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" 
                        alt="Udemy" 
                        width="91"
                        height="34"
                        />
                <a href="">Explore</a>
                <div className={styles.searchContainer}>
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <div className={styles.searchText}>
                        <input type="text" 
                        placeholder="Search For Anything"/>
                    </div>
                </div>
                <a href="">Plans & Pricing</a>
                <a href="">Udemy Business</a>
                <a href="">Tech on Udemy</a>

                <div className={styles.cartContainer}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                    >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </div>

                <div className={styles.btns}>
                    <button className={styles.loginBtn}>Log In</button>
                    <button className={styles.signupBtn}>Sign Up</button>
                        <button className={styles.iconBtn}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"></path>
                            </svg>
                        </button>

                </div>


            
            </div>
        </>
    );
}
export default NavBar;