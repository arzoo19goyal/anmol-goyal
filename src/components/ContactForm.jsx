"use client";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send email to owner here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Name</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Phone Number</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="uppercase text-sm py-2">Email</label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="uppercase text-sm py-2">Subject</label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Message</label>
        <textarea
          className="border-2 rounded-lg p-3 border-gray-300"
          rows="10"
          placeholder="Type your message here... "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <Button
        variant="primary"
        type="submit"
        className="w-full p-4 text-gray-100 mt-4 bg-[#0e7490]"
      >
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
