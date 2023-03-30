import Link from 'next/link'

import { Mainlayout } from '../../components/layouts/MainLayout'
import { DarkLayout } from '../../components/layouts/DarkLayout';

import styles from '../../styles/Home.module.css'
import { Inter } from 'next/font/google'
import { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function PricingPage() {
  return (
    <>
      <h1
        style={{textAlign: "center", marginBottom: "20px", marginTop: "40px"}}
      > Pricing </h1>

      <div className={styles.centerGrid}>
        <Link
          href="/"
          className={styles.card}
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Ir al HOME <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Encontraras otro tipo de información
          </p>
        </Link>
      </div>  
    </>
  );
};

PricingPage.getLayout = function getLayout(page:ReactElement) {
  return(
    <Mainlayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </Mainlayout>
  )
};
