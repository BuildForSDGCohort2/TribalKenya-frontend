import React from 'react';
import SEO from '../components/seo';
import NavBar from '../components/Navbar/NavBar';
import Profile from '../components/profile-page/Profile';
import Layout from '../components/layout';

const ProfilePage = () => (
  <Layout>
    <NavBar/>
    <SEO title="Profile" />
    <main>
        <Profile />
    </main>
  </Layout>
);

export default ProfilePage;
