"use client";

export default function Error({ error }) {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {error.message}
      </div>
    </div>
  );
}
