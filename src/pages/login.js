import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import Login from '../components/auth/Login';

const login = () => {
  return (
        <Layout>
            <SEO title="Login" />
            <NavBar />
            <main className="center">
                <div className="w-100 h-100 center">
                    <Login/>
                </div>
            </main>
        </Layout>
  );
};

export default login;
