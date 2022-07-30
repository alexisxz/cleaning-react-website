import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer__container">
                <div className="footer__container-contact">
                    <article className="footer-field">
                        <h3>Adress</h3>
                        <h5>
                            <span>Florian-Geyer-Str</span>
                            <span>1176646 Bruchsal</span>
                        </h5>
                    </article>

                    <article className="footer-field">
                        <h3>Contact</h3>
                        <h5>Shyrete Shema</h5>
                    </article>

                    <article className="footer-field">
                        <h3>Phone</h3>
                        <h5>+49 176 72312348</h5>
                    </article>

                    <article className="footer-field">
                        <h3>Days</h3>
                        <h5>
                            <span>Monday - Friday</span>
                            <span>09:00 - 18:00 GMT+2</span>
                        </h5>
                    </article>
                </div>
                <div className="footer__container-imprint">
                    <h3>Imprint</h3>
                    <h5>SHEMA</h5>
                    <h5>
                        <span>Florian-Geyer-Str.11</span>
                        <span>76646 Bruchsal</span>
                        <span>Tel:  07251 / 9377052</span>
                        <span>Fax: 07251 / 9377569</span>

                    </h5>
                    <h5>shyrete.shema@shema-gruppe.de</h5>
                    <h5>
                        <span>Inhaberin: Shyrete Shema</span>
                        <span>Firmensitz in DE 76646 Bruchsal</span>
                        <span>Identifikationsnummer: 63 597 194 083</span>
                    </h5>
                </div>
                <div className="footer__copyright">
                    <small>&copy; Shema GBmH. All rights reserved.</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer