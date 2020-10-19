import React from 'react';
import SEO from '../components/seo';
import NavBar from '../components/Navbar/NavBar';
import Layout from '../components/layout';
import Settings from '../components/settings-page/Settings';

const SettingsPage = () => (
  <Layout>
    <NavBar bg="c-black" barColor="black" />
    <SEO title="Settings" />
    <main>
        <Settings />
    </main>
  </Layout>
);

export default SettingsPage;
