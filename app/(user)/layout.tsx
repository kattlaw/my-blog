import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import '../../styles/globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="mx-0">
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  )
}
