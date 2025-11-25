import { useRef } from "react";
import { useForm } from "react-hook-form";
import useAxios, { METHODS } from "../hooks/useAxios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function SignUpForm() {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const password = useRef({});
  password.current = watch("password", "");

  const selectedRole = watch("role_id", "Customer");

  const {
    sendRequest: sendPostRequest,
    loading,
    error: apiError,
  } = useAxios({});

  const onSubmit = (formData) => {
    const formattedData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role_id: formData.role_id,
    };

    if (formData.role_id === "Store") {
      formattedData.store = {
        name: formData.storeName,
        phone: formData.storePhone,
        tax_no: formData.tax_no,
        bank_account: formData.bank_account,
      };
    }

    sendPostRequest({
      url: `/signup`,
      method: METHODS.POST,
      data: formattedData,
      callbackSuccess: () => {
        alert("You need to click link in email to activate your account!");
        history.goBack();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-concrete text-2xl text-ebonyClay font-[Montserrat,sans-serif] py-12"
    >
      <div className="w-8/10 sm:w-1/2 mx-auto flex flex-wrap gap-y-8">
        <div className="flex flex-col w-full sm:w-1/2 gap-y-4 px-4">
          <label htmlFor="name">Name</label>
          <input
            className="bg-white border-1 border-mercury rounded-sm py-4 px-6 text-doveGray text-base"
            {...register("name", {
              required: "You must write a name",
              minLength: {
                value: 3,
                message: "Name must contain at least 3 characters",
              },
            })}
            id="name"
            type="text"
            placeholder="Name *"
          />
          {errors.name && (
            <p className="text-cinnabar text-base">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col w-full sm:w-1/2 gap-y-4 px-4">
          <label htmlFor="email">Email address</label>
          <input
            className="bg-white border-1 border-mercury rounded-sm py-4 px-6 text-doveGray text-base"
            {...register("email", {
              required: "You must write a email",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            id="email"
            type="email"
            placeholder="Email *"
            autoComplete="username"
          />
          {errors.email && (
            <p className="text-cinnabar text-base">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col w-full sm:w-1/2 gap-y-4 px-4">
          <label htmlFor="password">Password *</label>
          <input
            className="bg-white border-1 border-mercury rounded-sm py-4 px-6 text-doveGray text-base"
            {...register("password", {
              required: "You must write a password",
              pattern: {
                value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                message:
                  "Password format invalid (min 6 char, alphanumeric + special)",
              },
              minLength: {
                value: 8,
                message: "Password must contain at least 8 characters",
              },
            })}
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
          />
          {errors.password && (
            <p className="text-cinnabar text-base">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col w-full sm:w-1/2 gap-y-4 px-4">
          <label htmlFor="passwordRep">Matched Password</label>
          <input
            className="bg-white border-1 border-mercury rounded-sm py-4 px-6 text-doveGray text-base"
            {...register("passwordRep", {
              required: "You must write a matched password",
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
            id="passwordRep"
            type="password"
            placeholder="Confirm Password"
            autoComplete="new-password"
          />
          {errors.passwordRep && (
            <p className="text-cinnabar text-base">
              {errors.passwordRep.message}
            </p>
          )}
        </div>

        <div className="flex flex-col w-full sm:w-1/2 gap-y-4 px-4">
          <label htmlFor="role_id">Role</label>
          <select
            {...register("role_id")}
            id="role_id"
            className="bg-white border-1 border-mercury rounded-sm py-4 px-6 text-doveGray text-base"
            defaultValue="Customer"
          >
            <option value="Customer">Customer</option>
            <option value="Store">Store</option>
          </select>
          <span className="text-doveGray text-base">Choose from the list.</span>
        </div>

        {selectedRole === "Store" && (
          <>
            <div className="flex flex-col w-full sm:w-1/2 gap-y-4 px-4">
              <label htmlFor="storeName">Store Name</label>
              <input
                className="bg-white border-1 border-mercury rounded-sm py-4 px-6 text-doveGray text-base"
                {...register("storeName", {
                  required: "You must write a store name",
                  minLength: {
                    value: 3,
                    message: "Store Name must contain at least 3 characters",
                  },
                })}
                id="storeName"
                type="text"
                placeholder="Store Name *"
              />
              {errors.storeName && (
                <p className="text-cinnabar text-base">
                  {errors.storeName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col w-full sm:w-1/2 gap-y-4 px-4">
              <label htmlFor="storePhone">Store Phone</label>
              <input
                className="bg-white border-1 border-mercury rounded-sm py-4 px-6 text-doveGray text-base"
                {...register("storePhone", {
                  required: "You must write a store phone",
                  pattern: {
                    value: /^(\+90|0)?5\d{9}$/,
                    message: "Please enter a valid TR phone number",
                  },
                })}
                id="storePhone"
                type="tel"
                placeholder="+905..."
              />
              {errors.storePhone && (
                <p className="text-cinnabar text-base">
                  {errors.storePhone.message}
                </p>
              )}
            </div>

            <div className="flex flex-col w-full sm:w-1/2 gap-y-4 px-4">
              <label htmlFor="tax_no">Store Tax ID</label>
              <input
                className="bg-white border-1 border-mercury rounded-sm py-4 px-6 text-doveGray text-base"
                {...register("tax_no", {
                  required: "You must write a Tax ID",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Format must be TXXXXVXXXXXX",
                  },
                })}
                id="tax_no"
                type="text"
                placeholder="T1234V123456"
              />
              {errors.tax_no && (
                <p className="text-cinnabar text-base">
                  {errors.tax_no.message}
                </p>
              )}
            </div>

            <div className="flex flex-col w-full sm:w-1/2 gap-y-4 px-4">
              <label htmlFor="bank_account">Store Bank Account (IBAN)</label>
              <input
                className="bg-white border-1 border-mercury rounded-sm py-4 px-6 text-doveGray text-base"
                {...register("bank_account", {
                  required: "You must write an IBAN",
                  pattern: {
                    value: /^TR\d{24}$/,
                    message: "Please enter a valid TR IBAN",
                  },
                })}
                id="bank_account"
                type="text"
                placeholder="TR..."
              />
              {errors.bank_account && (
                <p className="text-cinnabar text-base">
                  {errors.bank_account.message}
                </p>
              )}
            </div>
          </>
        )}
      </div>

      <div className="w-8/10 sm:w-1/2 mx-auto mt-8 px-4 flex flex-col gap-4">
        {apiError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{apiError}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={!isValid || loading}
          className="bg-pictonBlue text-white font-bold py-4 px-8 rounded w-full disabled:bg-silver disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              Processing...
            </span>
          ) : (
            "Sign Up"
          )}
        </button>
      </div>
    </form>
  );
}
