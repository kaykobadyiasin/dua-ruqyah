import { Poppins } from "next/font/google";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Settings from "./components/settings/Settings";


const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Dua & Ruqyah",
  description: "Dua diplayed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} p-10 bg-[#F7F8FA]`}>
        <div className="grid lg:grid-flow-col gap-8">
          <div className="col-span"><Navbar /></div>
          <div className="col-span-12">
            {children}
          </div>
          <div className="col-span">
            <Settings />
          </div>
        </div>
      </body>
    </html>
  );
}
