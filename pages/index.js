import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Map from '../components/Map';
import Header from '../components/Header/header.js';
import LargeTitle from '../components/Header/title.js';
import InfoText from '../components/Header/body.js';
import Footer from '../components/Footer/footer.js';
import styled from 'styled-components';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Expo Line Map</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>

      <main className={styles.main}>
        <div><Header></Header></div>
        {/* <h1 class ="expo">Travel through Metro Vancouver with Expo Line</h1> */}
        <LargeTitle></LargeTitle>
        <Map></Map>
        <InfoText></InfoText>
        <div><Footer></Footer></div>

      </main>
    </>
  )
}
