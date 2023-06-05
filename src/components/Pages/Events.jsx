import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import BlogCard from "../UI/BlogCard";
import PageHeader from "../UI/PageHeader";
import firebase from "firebase/compat/app";
import { getDocs, collection } from "@firebase/firestore";
import { firestore } from "../../firebase";
export default function Events() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await getDocs(collection(firestore, "posts")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(newData);
      console.log(posts, newData);
    });
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log();
  // const posts = ["1", "2", "3"];
  return (
    <Layout>
      <PageHeader title="Events">
        The National Service Scheme (NSS) is a youth-focused voluntary
        organization in India that aims to develop the personality and character
        of students through community service. NSS events are organized by
        educational institutions, particularly colleges and universities, that
        have NSS units.
      </PageHeader>
      {posts.map((post, index) => (
        <BlogCard key={index} title={post.title} to={`/events/${post.id}`} />
      ))}
    </Layout>
  );
}
