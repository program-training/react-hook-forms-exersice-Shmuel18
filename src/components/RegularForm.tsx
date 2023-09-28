// import { useState, ChangeEvent, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function RegularForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
    },
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data), alert(JSON.stringify(data));
      })}
    >
      <h1>Change Me To React Hook Form</h1>
      <div>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: "שדה זה הוא שדה חובה",
            minLength: {
              value: 2,
              message: "הזן מינימום 2 תווים",
            },
          })}
          placeholder="Enter UserName"
        />
        {/* <ErrorMessage
          name="email"
          errors={errors}
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          }
        /> */}
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: "שדה זה הוא שדה חובה",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "אנא הזן כתובת אימייל חוקית",
            },
          })}
          placeholder="Enter Email"
        />
        {/* <ErrorMessage
          name="email"
          errors={errors}
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          }
        /> */}
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <input
          type="text"
          id="password"
          {...register("password", {
            required: "שדה זה הוא שדה חובה",

            pattern: {
              value:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,20}$/,
              message: "הסיסמה לא תקינה",
            },
          })}
          placeholder="Enter Password"
        />
        {/* <ErrorMessage
          name="password"
          errors={errors}
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          }
        /> */}

        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <input
          type="text"
          id="phone"
          {...register("phone", {
            required: "שדה זה הוא שדה חובה",
            pattern: {
              value: /^\d{10}$/, // תבנית למספר טלפון באורך של 10 ספרות
              message: "אנא הזן מספר טלפון חוקי (10 ספרות)",
            },
          })}
          placeholder="Enter a phone number"
        />
        {/* <ErrorMessage
          name="phone"
          errors={errors}
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          }
        /> */}

        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegularForm;
