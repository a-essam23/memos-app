import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, className }) {
    return (
        <section>
            <Header />
            <div
                className={`min-h-screen w-10/12 m-auto bg-slate-200 rounded-md bg-opacity-50 ${className}`}
            >
                {children}
            </div>
            <Footer />
        </section>
    );
}
