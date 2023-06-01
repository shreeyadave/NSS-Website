import React from "react";
import Layout from "../Layout/Layout";
import BlogCard from "../UI/BlogCard";
import PageHeader from "../UI/PageHeader";

export default function Events() {
  return (
    <Layout>
      <PageHeader title="Events">
        The National Service Scheme (NSS) is a youth-focused voluntary
        organization in India that aims to develop the personality and character
        of students through community service. NSS events are organized by
        educational institutions, particularly colleges and universities, that
        have NSS units.
      </PageHeader>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
    </Layout>
  );
}
