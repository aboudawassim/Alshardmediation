"use client"; // Add this directive at the top

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

export function Contact() {
  const [state, handleSubmit] = useForm("xjkbrbbz");
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  React.useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', message: '' });
    }
  }, [state.succeeded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <section id="contact" className="bg-muted py-16 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-background rounded-lg shadow-lg p-8 grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={5} 
              value={formData.message}
              onChange={handleChange}
              required 
              
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <Button type="submit" disabled={state.submitting}>Submit</Button>
          {state.succeeded && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline"> Your message has been sent successfully. We will get back to you soon.</span>
            </div>
          )}
          {state.errors && Object.keys(state.errors).length > 0 && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> There was an issue sending your message. Please try again.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
