import styles from "../../CSS/About.module.css";

function About() {
    return (
        <>
            <section className={styles.hero}>
                <h1>About Us</h1>
            </section>
            <section className={styles.whoAreWe}>
                <div className={styles.whoAreWeInfo}>
                    <h2><span>Who</span> We Are</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                </div>
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img-1024x576.jpg" alt="Us"/>
            </section>
            <main className={styles.container}>
                <section className={styles.ourTeam}>
                    <div className={styles.intro}>
                        <h3>A Few <span>Words</span> About</h3>
                        <h2>Our Team</h2>
                        <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                    </div>
                    <div className={styles.teamList}>
                        <div className={styles.card}>
                            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team2-free-img.png" alt="Harvey Spector" />
                            <h4>Harvey Spector</h4>
                            <p>Founder - CEO</p>
                        </div>
                        <div className={styles.card}>
                            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team1-free-img.png" alt="Jessica Pearson" />
                            <h4>Jessica Pearson</h4>
                            <p>COO</p>
                        </div>
                        <div className={styles.card}>
                            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team3-free-img.png" alt="Rachel Zain" />
                            <h4>Rachel Zain</h4>
                            <p>Marketing Head</p>
                        </div>
                        <div className={styles.card}>
                            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team4free-img.png" alt="Luise Litt" />
                            <h4>Luise Litt</h4>
                            <p>Lead Developer</p>
                        </div>
                        <div className={styles.card}>
                            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team5-free-img.png" alt="Katrina Bennett" />
                            <h4>Katrina Bennett</h4>
                            <p>Intern Designer</p>
                        </div>
                        <div className={styles.card}>
                            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team6-free-img.png" alt="Mike Ross" />
                            <h4>Mike Ross</h4>
                            <p>Intern Designer</p>
                        </div>
                    </div>
                </section>
            </main>
            <section className={styles.follow}>
                <div className={styles.followContent}>
                    <h2>Follow Us</h2>
                    <div className={styles.linksContainer}>
                        <a href="https://www.facebook.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                        </a>
                        <a href="https://twitter.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                        </a>
                        <a href="https://www.instagram.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </a>
                        <a href="https://www.google.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28"><title id="google_reviews"> Google Reviews </title><path d="M12 12.281h11.328c.109.609.187 1.203.187 2C23.515 21.125 18.921 26 11.999 26c-6.641 0-12-5.359-12-12s5.359-12 12-12c3.234 0 5.953 1.188 8.047 3.141L16.78 8.282c-.891-.859-2.453-1.859-4.781-1.859-4.094 0-7.438 3.391-7.438 7.578s3.344 7.578 7.438 7.578c4.75 0 6.531-3.406 6.813-5.172h-6.813v-4.125z"></path></svg>
                        </a>
                    </div>
                </div>
            </section>
            <section className={styles.features}>
                <div className={styles.feature}>
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png" alt="" />
                    <h2>Worldwide Shipping</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className={styles.feature}>
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png" alt="" />
                    <h2>Best Quality</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className={styles.feature}>
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png" alt="" />
                    <h2>Best Offers</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className={styles.feature}>
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png" alt="" />
                    <h2>Secure Payments</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
        </section>
        </>
    );
}

export default About;