import {Inter} from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from "../component/BootstrapClient";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Instituto Jaim", description: "Cursos de estética",
};

export default function RootLayout({children}) {
    return (
        <html lang="es">
        <body className={inter.className}>
        {children}
        <BootstrapClient/>
        </body>
        </html>
    );
}
