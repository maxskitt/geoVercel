import Image from "next/image";
import styles from "./page.module.css";

export default function Home({ searchParams }) {
  return (
    <main >
      <div>
        <p>
          <strong>Country:</strong> {searchParams.country}
        </p>
        <p>
          <strong>City:</strong> {searchParams.city}
        </p>
        <p>
          <strong>Region:</strong> {searchParams.region}
        </p>
        <p>
          <strong>Currency Code:</strong> {searchParams.currencyCode}
        </p>
        <p>
          <strong>Currency Symbol:</strong> {searchParams.currencySymbol}
        </p>
        <p>
          <strong>Currency Name:</strong> {searchParams.name}
        </p>
        <p>
          <strong>Languages:</strong> {searchParams.languages}
        </p>
      </div>
    </main>
  );
}
