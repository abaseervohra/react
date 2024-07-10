<div className={styles.menuPart}>
    <div className={styles.container}>
        <div className={styles.reactMainMenu}>
            <nav>
                <div className={styles.menuToggle}>
                    <div className={styles.logo}>
                        <a className={styles.logoText} href="/">
                            <img src="" alt=""/>
                        </a>
                    </div>
                    <button type="button" id="menu-btn" className={styles.mobileMenuBtn}>
                        <span className={styles.iconBar}></span>
                        <span className={styles.iconBar}></span>
                        <span className={styles.iconBar}></span>
                    </button>
                </div>
                <div className={styles.reactInnerMenus}>
                    <ul id="backmenu" className={`${styles.reactMenus} ${styles.reactSubShadow}`}>
                        <li className={`${styles.hasSub} ${styles.menuActive}`}>
                            <a className={styles.hash} href="/">Home<span className={styles.arrow}></span></a>
                            <ul className={styles.subMenu}>
                                <li className={styles.menuActive}><a href="/">Home One</a></li>
                                <li><a href="/home-2">Home Two</a></li>
                                <li><a href="/home-3">Home Three</a></li>
                            </ul>
                        </li>
                        <li className={styles.hasSub}>
                            <a className={styles.hash} href="/">Pages<span className={styles.arrow}></span></a>
                            <ul className={styles.subMenu}>
                                <li><a href="/about">About</a></li>
                                <li><a href="/instructor">Instructor</a></li>
                                <li><a href="/instructor/1">Profile</a></li>
                                <li><a href="/login">Login</a></li>
                                <li><a href="/signup">Signup</a></li>
                                <li className={styles.hasSub}>
                                    <a className={styles.hash} href="/">Events</a>
                                    <ul className={styles.subMenu}>
                                        <li><a href="/event">Events</a></li>
                                        <li><a href="/event-sidebar">Events Sidebar</a></li>
                                        <li><a href="/event/1">Event Single</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.hasSub}>
                            <a className={styles.hash} href="/">Courses<span className={styles.arrow}></span></a>
                            <ul className={styles.subMenu}>
                                <li><a href="/course">Course</a></li>
                                <li><a href="/course-sidebar">Right Sidebar</a></li>
                                <li><a href="/course-list">Courses List</a></li>
                                <li><a href="/course/1">Course Single</a></li>
                            </ul>
                        </li>
                        <li className={styles.hasSub}>
                            <a className={styles.hash} href="/">Blog<span className={styles.arrow}></span></a>
                            <ul className={styles.subMenu}>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/blog/1">Blog Single</a></li>
                            </ul>
                        </li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <div className={styles.searchbarPart}>
                        <form className={styles.searchForm}>
                            <input type="text" className={styles.formInput} placeholder="Search Course">
                            <a className={styles.formButton} href="/course">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
