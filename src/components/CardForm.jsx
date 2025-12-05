import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

const months = Array.from({ length: 12 }, (_, i) => i + 1);
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

export default function CardForm({ onSubmit, initialData, onCancel, isSubmitting, apiError }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || { expire_month: "", expire_year: "" },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset({
        card_no: "",
        expire_month: "",
        expire_year: "",
        name_on_card: "",
      });
    }
  }, [initialData, reset]);

  const handleFormSubmit = (data) => {
    const processedData = {
      ...data,
      expire_month: parseInt(data.expire_month),
      expire_year: parseInt(data.expire_year)
    };
    onSubmit(processedData);
  };

  const inputClass = "w-full border border-mercury rounded p-3 text-sm text-silver focus:outline-none focus:ring-1 focus:ring-pictonBlue transition";
  const labelClass = "block text-sm font-semibold text-ebonyClay mb-1";

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-white p-6 rounded shadow-md border border-mercury">
      <h3 className="text-xl font-bold text-ebonyClay mb-4 border-b pb-2">
        {initialData ? "Update Card" : "Add New Card"}
      </h3>

      {apiError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
          Error: {apiError}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className={labelClass}>Card Number (16 digits)</label>
          <input
            {...register("card_no", { 
              required: "Card number is required",
              pattern: { value: /^\d{16}$/, message: "Please enter a valid 16-digit card number" }
            })}
            className={inputClass}
            placeholder="XXXX XXXX XXXX XXXX"
            maxLength={16}
          />
          {errors.card_no && <span className="text-burnSienna text-xs mt-1 block">{errors.card_no.message}</span>}
        </div>
        
        <div className="col-span-2">
          <label className={labelClass}>Name on Card</label>
          <input
            {...register("name_on_card", { required: "Name is required" })}
            className={inputClass}
            placeholder="NAME SURNAME"
          />
          {errors.name_on_card && <span className="text-burnSienna text-xs mt-1 block">{errors.name_on_card.message}</span>}
        </div>

        <div>
          <label className={labelClass}>Expiry Month</label>
          <select 
            {...register("expire_month", { 
              required: "Month is required",
              validate: value => value !== "" || "Please select a month"
            })} 
            className={inputClass}
          >
            <option value="">Month</option>
            {months.map((month) => (
              <option key={month} value={month < 10 ? `0${month}` : month}>
                {month < 10 ? `0${month}` : month}
              </option>
            ))}
          </select>
          {errors.expire_month && <span className="text-burnSienna text-xs mt-1 block">{errors.expire_month.message}</span>}
        </div>

        <div>
          <label className={labelClass}>Expiry Year</label>
          <select 
            {...register("expire_year", { 
              required: "Year is required",
              validate: value => value !== "" || "Please select a year"
            })} 
            className={inputClass}
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.expire_year && <span className="text-burnSienna text-xs mt-1 block">{errors.expire_year.message}</span>}
        </div>
        
        <div>
          <label className={labelClass}>CVC</label>
          <input 
            type="text"
            className={inputClass}
            placeholder="***"
            maxLength={3}
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6 border-t pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 text-ebonyClay font-semibold border border-mercury rounded hover:bg-mercury transition"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting} 
          className={`px-6 py-2 rounded font-semibold transition flex items-center justify-center gap-2
            ${isSubmitting ? "bg-pictonBlue/70 text-white cursor-not-allowed" : "bg-pictonBlue text-white hover:bg-pictonBlue/90"}`}
        >
          {isSubmitting && <Loader2 size={18} className="animate-spin" />}
          {initialData ? (isSubmitting ? "Updating..." : "Update Card") : (isSubmitting ? "Saving..." : "Save Card")}
        </button>
      </div>
    </form>
  );
}