import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import React from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
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