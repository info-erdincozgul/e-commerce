import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana"];

export default function AddressForm({
  onSubmit,
  initialData,
  onCancel,
  isSubmitting,
  apiError,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || { city: "" },
  });
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset({
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
        address: "",
      });
    }
  }, [initialData, reset]);

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  const inputClass =
    "w-full border border-mercury rounded p-3 text-sm text-silver focus:outline-none focus:ring-1 focus:ring-pictonBlue transition";
  const labelClass = "block text-sm font-semibold text-ebonyClay mb-1";

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="bg-white p-6 rounded shadow-md border border-mercury mb-6"
    >
      <h3 className="text-xl font-bold text-ebonyClay mb-4 border-b pb-2">
        {initialData ? "Update Address" : "New Address"}
      </h3>
      
      {apiError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
          Error: {apiError}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className={labelClass}>Address Title</label>
          <input
            {...register("title", { required: "Title Needed" })}
            className={inputClass}
            placeholder="Exp: Home Address, Work Address"
          />
          {errors.title && (
            <span className="text-burnSienna text-xs mt-1 block">
              {errors.title.message}
            </span>
          )}
        </div>
        
        <div>
          <label className={labelClass}>Name</label>
          <input
            {...register("name", { required: "Name Needed" })}
            className={inputClass}
          />
                {errors.name && (
            <span className="text-burnSienna text-xs mt-1 block">
              {errors.name.message}
            </span>
          )}
        </div>
        
        <div>
          <label className={labelClass}>Last Name</label>
          <input
            {...register("surname", { required: "Last Name Needed" })}
            className={inputClass}
          />
                {errors.surname && (
            <span className="text-burnSienna text-xs mt-1 block">
              {errors.surname.message}
            </span>
          )}
        </div>
        
        <div className="col-span-2 sm:col-span-1">
          <label className={labelClass}>Phone</label>
          <input
            {...register("phone", {
              required: "Phone Needed",
              pattern: {
                value: /^\d{10,11}$/,
                message: "Phone number not correct format",
              },
            })}
            className={inputClass}
            placeholder="5XX XXX XX XX"
          />
                {errors.phone && (
            <span className="text-burnSienna text-xs mt-1 block">
              {errors.phone.message}
            </span>
          )}
        </div>
    
        <div className="col-span-2 sm:col-span-1">
          <label className={labelClass}>City</label>
          <select
            {...register("city", { required: "City Needed" })}
            className={inputClass}
          >
            <option value="">Cities</option>
            {cities.map((city) => (
              <option key={city} value={city.toLowerCase()}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && (
            <span className="text-burnSienna text-xs mt-1 block">
              {errors.city.message}
            </span>
          )}
        </div>
        
        <div>
          <label className={labelClass}>District</label>
          <input
            {...register("district", { required: "District Needed" })}
            className={inputClass}
          />
             {errors.district && (
            <span className="text-burnSienna text-xs mt-1 block">
              {errors.district.message}
            </span>
          )}
        </div>
        
        <div>
          <label className={labelClass}>Neighborhood</label>
          <input
            {...register("neighborhood", { required: "Neighborhood" })}
            className={inputClass}
          />
              {errors.neighborhood && (
            <span className="text-burnSienna text-xs mt-1 block">
              {errors.neighborhood.message}
            </span>
          )}
        </div>
        
        <div className="col-span-2">
          <label className={labelClass}>Address Details</label>
          <textarea
            {...register("address", { required: "Address Detail Needed" })}
            className={inputClass}
            rows="3"
            placeholder="Open Address ..."
          ></textarea>
               {errors.address && (
            <span className="text-burnSienna text-xs mt-1 block">
              {errors.address.message}
            </span>
          )}
        </div>
      </div>
      
      <div className="flex justify-end gap-4 mt-6 border-t pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 text-silver font-semibold border border-mercury rounded hover:bg-mercury transition"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-2 rounded font-semibold transition flex items-center justify-center gap-2
            ${
              isSubmitting
                ? "bg-pictonBlue text-silver cursor-not-allowed"
                : "bg-pictonBlue text-white hover:bg-pictonBlue"
            }`}
        >
          {isSubmitting && <Loader2 size={18} className="animate-spin" />}
          {initialData
            ? isSubmitting
              ? "Updating..."
              : "Update"
            : isSubmitting
            ? "Saving..."
            : "Save"}
        </button>
      </div>
    </form>
  );
}