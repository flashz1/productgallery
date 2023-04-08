import { PropsWithChildren } from 'react'
import Head from 'next/head'

interface ILayoutProps {
  pageTitle: string
  pageDescription: string
}

const Layout = ({
  children,
  pageTitle = 'Product Gallery',
  pageDescription = 'Product Gallery - is a test products page with Search, Filters.',
}: PropsWithChildren<ILayoutProps>) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-[100vh] md:flex-row">
        {children}
      </main>
    </>
  )
}

export default Layout
