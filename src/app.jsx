import Router from "@/libs/router";

import Home from "@/pages/home";
import Service from "@/pages/service";
import Skill from "@/pages/skill";
import Contact from "@/pages/contact";
import Err from "@/pages/404";

import Layout from "@/components/layout/layout";

import "@/styles/global.css";
import "@/styles/responsive.css";
import "@/styles/thumbnail.css";

export function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <Service path="/service" />
        <Skill path="/skill" />
        <Contact path="/contact" />
        <Err path="/err" />
      </Router>
    </Layout>
  );
}

/**
 * commit :
 * 404 page
 * <Link /> ==> auto https / http
 * service page with out firestore
 * timeline.jsx
 * Contact page
 */
