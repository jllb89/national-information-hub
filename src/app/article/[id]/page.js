import styles from "./page.module.css";

export default function Article({ params }) {
  return (
    <>
          <h1>ID: {params.id}</h1>
      <a href="/faq">faq</a>
    </>

  );
}