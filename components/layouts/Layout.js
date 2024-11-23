import Link from "next/link";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM Project</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">Next Js Project | CRM Project &copy;</footer>
    </>
  );
}

export default Layout;
