import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import React from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ClerkProvider publishableKey={'pk_test_a25vd2luZy1ob3JzZS0xOC5jbGVyay5hY2NvdW50cy5kZXYk'}>
      <Head>
        <title>Shelly Ips</title>
        <meta name="description" content="Made by Finn" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <Component {...pageProps} />
      </SignedIn>
    </ClerkProvider>
  );
};

export default MyApp;