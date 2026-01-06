"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/ImageSlideshow";
import { Input } from "@/components/ui/Todolist";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: "", email: "", feedback: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <Card className="w-[400px] mx-auto mt-10">
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <Textarea name="feedback" placeholder="Feedback..." value={formData.feedback} onChange={handleChange} />
          <Button type="submit">Submit</Button>
        </form>

        {submitted && (
          <div className="mt-6">
            <h3 className="font-semibold">Submitted Data:</h3>
            <p>Name: {submitted.name}</p>
            <p>Email: {submitted.email}</p>
            <p>Feedback: {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
