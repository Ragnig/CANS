import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicInfoForm from "./BasicInfoForm";

const API = "http://localhost:5000/api/basic-info";

export default function ViewForm() {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(all => {
        const found = all.find((f) => f.ID === id);
        if (!found) return;

        const schema = JSON.parse(found.SchemaJSON);

        setForm({
          overview: schema.overview,
          answers: schema.answers,
          status: found.Status
        });
      });
  }, [id]);

  if (!form) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <BasicInfoForm
      overview={form.overview}
      answersProp={form.answers}
      forceSubmitted={form.status === "complete"}
    />
  );
}
