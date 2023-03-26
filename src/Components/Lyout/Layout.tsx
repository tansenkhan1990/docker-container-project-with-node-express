import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

const Layout: React.FC = () => {
  const naigate = useNavigate();
  useEffect(() => {
    naigate("home");
  }, [naigate]);
  return (
    <>
      <Container>
        <header className="header">
          <Header />
        </header>
        <main>
          <div className="outlet-content">
            <Outlet />
          </div>
        </main>
      </Container>
    </>
  );
};

export default Layout;
