import "@styles/globals.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primeflex/primeflex.css';                            // css utility
import 'primereact/resources/primereact.css';

import Sidebar from "@components/Sidebar";
import { Providers } from "./GlobalRedux/provider"

export const metadata = {
  title: "Nextjs Demo",
  description: "Component Demo Project",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang='en'>
    <body>
      <Sidebar />
      <Providers>
        <div className='main'>
          <main className='app'>
            {children}
          </main>
        </div>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
