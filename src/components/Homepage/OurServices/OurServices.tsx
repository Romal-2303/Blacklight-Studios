"use client";

import React, { useState } from "react";
import classes from "./OurServices.module.scss";
import { motion } from "framer-motion";
import TextSpinner from "@/components/TextSpinner/TextSpinner";

const services = [
  {
    id: 1,
    title: "WEB DEVELOPMENT",
    description:
      "Our expert team crafts bespoke websites tailored to your brand’s needs, ensuring seamless functionality and stunning design to captivate your audience.",
  },
  {
    id: 2,
    title: "DIGITAL MARKETING STRATEGIES",
    description:
      "Harness the power of targeted digital campaigns designed to maximize your online reach and drive connections, with our data-driven approach delivering measurable results every time.",
  },
  {
    id: 3,
    title: "CREATIVE DESIGN SERVICE",
    description:
      "From eye-catching visuals to intuitive user experiences, our creative design services breathe life into your brand, ensuring memorable interactions that resonate with your audience.",
  },
  {
    id: 4,
    title: "E-COMMERCE",
    description:
      "Elevate your online retail experience with our comprehensive e-commerce solutions. From user-friendly interfaces to secure payment gateways, we empower businesses to thrive in the digital marketplace.",
  },
  {
    id: 5,
    title: "SEO OPTIMIZATION",
    description:
      "Boost your website’s visibility with our expert SEO services. We ensure your brand ranks higher on search engines, attracting more organic traffic and engagement.",
  },
];

const OurServices = () => {
  const [btnHovered, setBtnHovered] = useState(false);
  const [hoveredBox, setHoveredBox] = useState(null);

  return (
    <div className={classes["our-services-container"]}>
      <div className={classes["our-services-content-container"]}>
        <p className={classes["our-services-heading"]}>Our Services</p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className={classes["our-services-desc"]}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo et
          fugiat natus perferendis reiciendis aliquam asperiores quod laboriosam
          quas, optio tempora, aspernatur impedit modi ab eius quidem, nulla
          deleniti dignissimos labore. Eius.
        </motion.p>
      </div>
      <div className={classes["contact-us-component"]}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className={classes["contact-us"]}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
        >
          {!btnHovered ? (
            "Contact Us"
          ) : (
            <TextSpinner speed={50} content="Contact Us" />
          )}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={classes["list-box-container"]}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className={classes["box"]}
            onMouseEnter={() => setHoveredBox(service.id)}
            onMouseLeave={() => setHoveredBox(null)}
            style={{
              backgroundColor:
                hoveredBox === service.id ? "white" : "transparent",
              color: hoveredBox === service.id ? "#1c1c1c" : "white",
              transition:
                "background-color 0.6s ease-in-out, color 0.6s ease-in-out",
              cursor: "pointer",
            }}
          >
            <div
              className={classes["number"]}
              style={{
                backgroundColor:
                  hoveredBox === service.id ? "#1c1c1c" : "white",
                color: hoveredBox === service.id ? "white" : "#1c1c1c",
                transition:
                  "background-color 0.6s ease-in-out, color 0.6s ease-in-out",
              }}
            >{`0${service.id}`}</div>
            <div className={classes["box-body"]}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurServices;
