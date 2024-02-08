import { useForm } from "react-hook-form";
import "./Signin.css";

const Signin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", ""); // Get the value of the password field

  const onSubmit = (values) => alert("Signin successful");

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)} id="u">
        <h3 id="r">SIGNIN</h3>
        <div className="formInput">
          <label>
            <b>Email</b>
          </label>
          <br />
          <input
            type="email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                alert: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="formInput">
          <label>
            <b>Password</b>
          </label>
          <br />
          <input
            type="password"
            {...register("password", {
              required: "Required",
              pattern: {
                value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                alert:
                  "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="formInput">
          <label>
            <b>Confirm Password</b>
          </label>
          <br />
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Required",
              validate: {
                matchesPassword: (value) =>
                  value === password || "Passwords do not match",
              },
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <br />
        <button type="submit" id="b">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
