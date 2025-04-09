"use client";

import { Form, Input, Select } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { TextArea } = Input;
const { Option } = Select;

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 902 769 85666",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Lawrence.bill.520@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lagos, Nigeria",
  },
];

export default function Contact() {
  const [form] = Form.useForm();

  const [loading] = useState(false);

  const onFinish = async (values: string) => {
    console.log("Form values:", values);
    notify();

    await fetch("https://formsubmit.co/nogistune.me@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
  };

  const notify = () => {
    toast(
      <div className="">
        <div className="toast-title">Thank You!</div>
        <div className="toast-content">
          Harny will get in touch with you soon.
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
        className: "custom-toast",
        type: "success", // Optional: specify the type of toast
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto  md:py-24 py-4 ">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="lg:w-[54%] order-2 lg:order-none">
            <div className="md:p-10 p-4 bg-[#27272c] rounded-xl">
              <h3 className="text-xl md:text-4xl text-accent">{`Let's Work Together`}</h3>
              <p className="text-white/60 text-sm md:text-base md:py-6 py-4">
                {` Feel free to reach out! Whether you have a project in mind or
                just want to connect, I'm here to collaborate.`}
              </p>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="mt-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                  <Form.Item
                    name="firstName"
                    rules={[
                      { required: true, message: "First name is required" },
                    ]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    name="lastName"
                    rules={[
                      { required: true, message: "Last name is required" },
                    ]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Enter a valid email",
                      },
                    ]}
                  >
                    <Input placeholder="Email Address" className="" />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    rules={[
                      { required: true, message: "Phone number is required" },
                    ]}
                  >
                    <Input placeholder="Phone Number" />
                  </Form.Item>
                </div>
                <div>
                  {" "}
                  <Form.Item
                    name="service"
                    rules={[
                      { required: true, message: "Please select a service" },
                    ]}
                  >
                    <Select placeholder="Select a service">
                      <Option value="web">Web Development</Option>
                      <Option value="mobile">Mobile Development</Option>
                      <Option value="blockchain">Blockchain Development</Option>
                      <Option value="seo">SEO Optimization</Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="pt-4">
                  <Form.Item
                    name="message"
                    rules={[
                      { required: true, message: "Please enter a message" },
                    ]}
                    className="w-full my-4"
                  >
                    <TextArea
                      className="bg-red"
                      rows={4}
                      placeholder="Type your message here"
                    />
                  </Form.Item>
                </div>
                <motion.button
                  type="submit"
                  className="max-w-48 rounded-full bg-accent text-primary p-4 py-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -2, 2, -2, 2, 0] }}
                  animate={loading ? { scale: [1, 1.1, 1] } : {}}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </Form>
            </div>
          </div>
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <p className="md:text-xl text-sm text-white">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
