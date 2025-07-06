'use client';

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#f7f4ed',
      textAlign: 'center' as const,
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      color: '#3b3a36',
      fontFamily: "'FreightSansPro', sans-serif",
      paddingTop: '8rem',
      paddingBottom: '8rem',
      minHeight: '500px',
    },
    heading: {
      color: '#41413f',
      fontFamily: 'outwitt, sans-serif',
      fontWeight: 50,
      fontSize: '35.2px',
      lineHeight: '58.2042px',
      marginTop: '40px',
      marginBottom: '2rem',
      fontWeight: 'lighter',
    },
    emailLink: {
      fontFamily: "'freight-sans-pro', sans-serif",
      fontSize: '19.2px',
      fontWeight: 'lighter' as const,
      lineHeight: '34.56px',
      textDecoration: 'underline',
      color: '#41413f',
      marginTop: '5px',
      display: 'inline-block',
    },
    contactText: {
      fontFamily: "'FreightSansPro', sans-serif",
      fontSize: '19px',
      fontWeight: 'lighter' as const,
      color: 'black',
      margin: 0,
      lineHeight: '1.5',
    },
    footerLinksContainer: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      justifyContent: 'center',
      alignItems: 'center',
      gap: '24px',
      marginBottom: '3rem',
      fontSize: '19.2px',
      fontFamily: "'FreightSansPro', sans-serif",
      textAlign: 'center' as const,
    },
    footerLink: {
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
      textDecorationThickness: '1px',
      display: 'inline-block',
      marginTop: '20px',
      color: '#41413f',
    },
    clientPortal: {
      textDecoration: 'underline',
      fontSize: '17px',
      fontFamily: "'FreightSansPro', sans-serif",
      textUnderlineOffset: '4px',
      marginBottom: '3rem',
      color: '#41413f',
      display: 'inline-block',
    },
    copyright: {
      fontSize: '0.875rem', // text-sm = 14px approx
      color: '#4b4a47',
      fontFamily: "'FreightSansPro', sans-serif",
      marginTop: '30px',
    },
    spaceY3: {
      marginBottom: '2.5rem',
    },
  };

  return (
    <footer style={styles.footer}>
      {/* Name */}
      <h2 style={styles.heading}>
        <br />
        Jennifer Hahm, Ph.D., Licensed Psychologist
      </h2>

      {/* Contact Info */}
      <div style={styles.spaceY3}>
        <p style={{ marginBottom: '0.75rem', textAlign: 'center', color: 'black' }}>
          <a href="mailto:jennifer@drjenniferhahm.com" style={styles.emailLink}>
            <br />
            jennifer@drjenniferhahm.com
          </a>
        </p>
        <p style={styles.contactText}>
          <br />
          Phone:{' '}
          <a href="tel:2489398150" style={styles.footerLink}>
            (248) 939-8150
          </a>{' '}
          Fax: (248) 939-8190
        </p>
        <p style={styles.contactText}>
          <br />
          28175 Haggerty Rd, Novi, MI 48377
        </p>
      </div>

      {/* Navigation Links */}
      <div style={styles.footerLinksContainer}>
        <a href="#" style={styles.footerLink}>
          Home
        </a>
        <a href="#" style={styles.footerLink}>
          Privacy Policy
        </a>
        <a href="#" style={styles.footerLink}>
          Good Faith Estimate
        </a>
      </div>

      {/* Client Portal */}
      <div style={{ marginBottom: '3rem' }}>
        <a href="#" style={styles.clientPortal}>
          <br />
          Client Portal
        </a>
      </div>

      {/* Copyright */}
      <p style={styles.copyright}>
        <br />© 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights reserved.
      </p>
    </footer>
  );
}
