import styles from "../../CSS/ContactUs.module.css";

function ContactUs() {
    return (
        <>
            <section className={styles.hero}>
                <h1>Contact Us</h1>
            </section>
            <main>
                <section className={styles.container}>
                    <section className={styles.contactInfo}>
                        <h3>Have any queries?</h3>
                        <h2>We're here to help.​</h2>
                        <div className={styles.cardContainer}>
                            <div className={styles.card}>
                                <h3>Sales</h3>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus. </p>
                                <p>1800 123 4567</p>
                            </div>
                            <div className={styles.card}>
                                <h3>Complaints </h3>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus. </p>
                                <p>1900 223 8899</p>
                            </div>
                            <div className={styles.card}>
                                <h3>Returns</h3>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus. </p>
                                <p>returns@mail.com</p>
                            </div>
                            <div className={styles.card}>
                                <h3>Marketing </h3>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus. </p>
                                <p>1700 444 5578</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.contactForm}>
                        <div className={styles.formDetails}>
                            <h4>Don't be a stranger!</h4>
                            <h3>You tell us. We listen.</h3>
                            <p>Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.</p>
                        </div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                            <input type="text" placeholder="NAME" required/>
                            <input type="text" placeholder="SUBJECT" />
                            <input type="email" placeholder="EMAIL" required/>
                            <textarea placeholder="MESSAGE" cols="30" rows="10" required></textarea>
                            <button type="Submit">Send Message</button>
                        </form>
                    </section>
                </section>
            </main>
        </>
    );
}

export default ContactUs;






