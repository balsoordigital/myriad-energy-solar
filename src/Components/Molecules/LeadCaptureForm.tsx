import { useState } from "react";

type FormErrors = {
  fullName?: string;
  whatsapp?: string;
  pinCode?: string;
  averageBill?: string;
  housingSocietyName?: string;
  electricityBill?: string;
  designation?: string;
  agmStatus?: string;
  companyName?: string;
  city?: string;
};

const LeadCaptureForm = () => {
  const [formType, setFormType] = useState("Residential");
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    pinCode: "",
    averageBill: "",
    housingSocietyName: "",
    electricityBill: "",
    designation: "",
    agmStatus: "",
    companyName: "",
    city: "",
    agree: true,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDesignationClick = (designation: string) => {
    setFormData({ ...formData, designation });
  };

  const validate = () => {
    const newErrors = {
      fullName: "",
      whatsapp: "",
      pinCode: "",
      averageBill: "",
      housingSocietyName: "",
      electricityBill: "",
      designation: "",
      agmStatus: "",
      companyName: "",
      city: "",
      agree: true,
    };

    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "Required";
    if (!formData.pinCode.trim()) newErrors.pinCode = "Required";

    if (formType === "Residential" && !formData.averageBill)
      newErrors.averageBill = "Required";

    if (formType === "Housing Society") {
      if (!formData.housingSocietyName.trim())
        newErrors.housingSocietyName = "Required";
      if (!formData.electricityBill) newErrors.electricityBill = "Required";
      if (!formData.designation) newErrors.designation = "Required";
      if (!formData.agmStatus) newErrors.agmStatus = "Required";
    }

    if (formType === "Commercial") {
      if (!formData.companyName.trim()) newErrors.companyName = "Required";
      if (!formData.city.trim()) newErrors.city = "Required";
      if (!formData.averageBill.trim()) newErrors.averageBill = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <div className="flex justify-between border rounded-full mb-6 overflow-hidden">
        {["Residential", "Housing Society", "Commercial"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setFormType(type);
              setErrors({});
            }}
            className={`flex-1 py-2 px-4 font-medium ${
              formType === type
                ? "bg-[#e6e6fa] text-black"
                : "bg-white text-black"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>

        {formType === "Residential" && (
          <>
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                WhatsApp number <span className="text-red-500">*</span>
              </label>
              <input
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
              {errors.whatsapp && (
                <p className="text-red-500 text-sm">{errors.whatsapp}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Pin code <span className="text-red-500">*</span>
              </label>
              <input
                name="pinCode"
                value={formData.pinCode}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
              {errors.pinCode && (
                <p className="text-red-500 text-sm">{errors.pinCode}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                What is your average monthly bill?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Less than ₹1500",
                  "₹1500 - ₹2500",
                  "₹2500 - ₹4000",
                  "₹4000 - ₹8000",
                  "More than ₹8000",
                ].map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`border rounded px-3 py-1 ${
                      formData.averageBill === value
                        ? "bg-black text-white"
                        : ""
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, averageBill: value })
                    }
                  >
                    {value}
                  </button>
                ))}
              </div>
              {errors.averageBill && (
                <p className="text-red-500 text-sm">{errors.averageBill}</p>
              )}
            </div>
          </>
        )}

        {formType === "Housing Society" && (
          <>
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Name of Housing Society <span className="text-red-500">*</span>
              </label>
              <input
                name="housingSocietyName"
                value={formData.housingSocietyName}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
              {errors.housingSocietyName && (
                <p className="text-red-500 text-sm">
                  {errors.housingSocietyName}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Pin code <span className="text-red-500">*</span>
              </label>
              <input
                name="pinCode"
                value={formData.pinCode}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
              {errors.pinCode && (
                <p className="text-red-500 text-sm">{errors.pinCode}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 font-medium">
                  WhatsApp number <span className="text-red-500">*</span>
                </label>
                <input
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.whatsapp && (
                  <p className="text-red-500 text-sm">{errors.whatsapp}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Monthly Electricity Bill{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="electricityBill"
                  value={formData.electricityBill}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Select</option>
                  <option value="0-50000">0 - 50000</option>
                  <option value="50000+">50000+</option>
                </select>
                {errors.electricityBill && (
                  <p className="text-red-500 text-sm">
                    {errors.electricityBill}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                What is your designation in Housing Society?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Management committee member",
                  "Resident",
                  "Builder",
                  "Facility Manager",
                ].map((role) => (
                  <button
                    key={role}
                    type="button"
                    className={`border rounded px-3 py-1 ${
                      formData.designation === role ? "bg-black text-white" : ""
                    }`}
                    onClick={() => handleDesignationClick(role)}
                  >
                    {role}
                  </button>
                ))}
              </div>
              {errors.designation && (
                <p className="text-red-500 text-sm">{errors.designation}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                AGM approval status <span className="text-red-500">*</span>
              </label>
              <select
                name="agmStatus"
                value={formData.agmStatus}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select Approval Status</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
              </select>
              {errors.agmStatus && (
                <p className="text-red-500 text-sm">{errors.agmStatus}</p>
              )}
            </div>
          </>
        )}

        {formType === "Commercial" && (
          <>
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm">{errors.companyName}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 font-medium">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Pin code <span className="text-red-500">*</span>
                </label>
                <input
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.pinCode && (
                  <p className="text-red-500 text-sm">{errors.pinCode}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 font-medium">
                  WhatsApp number <span className="text-red-500">*</span>
                </label>
                <input
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.whatsapp && (
                  <p className="text-red-500 text-sm">{errors.whatsapp}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Average Monthly Bill <span className="text-red-500">*</span>
                </label>
                <input
                  name="averageBill"
                  value={formData.averageBill}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.averageBill && (
                  <p className="text-red-500 text-sm">{errors.averageBill}</p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked
              readOnly
              className="mt-1 mr-2 opacity-50 cursor-not-allowed"
            />
            I agree to Myriad's {""}
            <a href="#" className="underline text-blue-500 px-1">
              terms of service
            </a>{" "}
            &{" "}
            <a href="#" className="underline text-blue-500 px-1">
              privacy policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-black text-white rounded-full font-semibold"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
