import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../utils/yupSchema";
import "../styles/main.css";

function Contact() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(contactSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div class="body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="input-container ic1">
          <input
            id="fullname"
            class="input"
            type="text"
            placeholder=" "
            {...register("fullName")}
          />
          <div class="cut"></div>
          <label for="fullname" class="placeholder">
            First name
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="email"
            class="input"
            type="text"
            placeholder=" "
            {...register("email")}
          />
          <div class="cut"></div>
          <label for="email" class="placeholder">
            Email
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="subject"
            class="input"
            type="text"
            placeholder=" "
            {...register("subject")}
          />
          <div class="cut"></div>
          <label for="subject" class="placeholder">
            Subject
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="body"
            class="input"
            type="textarea"
            placeholder=" "
            {...register("body")}
          />
          <div class="cut cut-short"></div>
          <label for="body" class="placeholder">
            Body
          </label>
        </div>

        <input class="submit" type="submit" />
      </form>
    </div>
  );
}

export default Contact;
