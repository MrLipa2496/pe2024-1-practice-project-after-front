import React from 'react';
import styles from './RegistrationFooter.module.sass';
import CONSTANTS from '../../../constants';
import faqData from './data.json';

const { TEL } = CONSTANTS.CONTACTS;

const RegistrationFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.articlesMainContainer}>
        <div className={styles.ColumnContainer}>
          {faqData.map((item, index) => (
            <div key={index}>
              <div className={styles.headerArticle}>{item.question}</div>
              <div className={styles.article}>{item.answer}</div>
            </div>
          ))}
        </div>
        <div className={styles.ColumnContainer}>
          <div className={styles.headerArticle}>How much does it cost?</div>
          <div className={styles.article}>
            Our naming competitions start at $199, and our logo design
            competitions start at $299. Also, there are three additional contest
            level that each offer more features and benefits. See our Pricing
            Page for details.
          </div>
          <div className={styles.headerArticle}>
            Do you offer any discount for multiple contests?
          </div>
          <div className={styles.article}>
            Yes! We have many contest bundles - our most popular being our Name,
            Tagline, and Logo bundle. Bundles allow you to purchase multiple
            contests at one time and save as much as from $75 - $400. You can
            learn more about our bundle options on our Pricing Page.
          </div>
          <div className={styles.headerArticle}>
            Will you help me validate my name?
          </div>
          <div className={styles.article}>
            Yes! We believe that validating and securing your name is a critical
            part of your branding process. Squadhelp offers domain checks,
            Trademark support, linguistics analysis, and professional audience
            testing to help you choose your name with confidence. We even have
            special prices for Trademark filing for our customers.
          </div>
          <div className={styles.headerArticle}>
            I have other questions! How can I get in touch with Squadhelp?
          </div>
          <div className={styles.article}>
            Check out our <span className={styles.orangeSpan}>FAQs</span> or
            send us a <span className={styles.orangeSpan}>message</span>. For
            assistance with launching a contest, you can also call us at{' '}
            <a className={styles.tel} href={`tel:${TEL}`}>
              {TEL}
            </a>{' '}
            or schedule a
            <span className={styles.orangeSpan}>Branding Consultation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFooter;
