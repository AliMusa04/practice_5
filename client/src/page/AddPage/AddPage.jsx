import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./AddPage.scss";

const AddPage = () => {
  const formik = useFormik({
    initialValues: {
      img: "",
      name: "",
      price: "",
    },
    validationSchema: Yup.object({
      img: Yup.string().required("Required"),
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      price: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:8080/flowers", values).then(() => {
        alert("Post created");
      });
    },
  });
  return (
    <section className="add_page_section">
      <div className="add_page_contanier">
        <div className="addpage_title">
          <h2>Add your Flower</h2>
        </div>

        <div className="form_cont">
          <form onSubmit={formik.handleSubmit}>
            <input
              placeholder="Enter your Flower's image"
              id="img"
              name="img"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.img}
            />
            {formik.touched.img && formik.errors.img ? (
              <span>{formik.errors.img} !</span>
            ) : null}

            <input
              placeholder="Enter Flower's name"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <span>{formik.errors.name}</span>
            ) : null}

            <input
              placeholder="Enter Flower's price"
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
              <span>{formik.errors.price}</span>
            ) : null}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddPage;
