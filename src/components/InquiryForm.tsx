"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/useTranslation";

export default function InquiryForm() {
  const { t, lang } = useTranslation();
  const isAr = lang === "ar";

  const [formData, setFormData] = useState({
    companyName: "",
    businessType: "",
    country: "",
    productInterest: "",
    moq: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Inquiry submission failed:", err);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Inquiry submission error:", err);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("inquiry.success.title")}</h3>
        <p className="text-gray-600">{t("inquiry.success.desc")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("inquiry.company")} *</label>
          <input
            type="text"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            placeholder={isAr ? "اسم الشركة" : "Your company name"}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("inquiry.business_type")} *</label>
          <select
            name="businessType"
            required
            value={formData.businessType}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">{t("inquiry.select_business")}</option>
            <option value="distributor">{t("inquiry.distributor_option")}</option>
            <option value="buyer">{t("inquiry.buyer_option")}</option>
            <option value="other">{t("inquiry.other_option")}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("inquiry.country")} *</label>
          <input
            type="text"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            placeholder={isAr ? "مصر" : "Egypt"}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("inquiry.product_interest")} *</label>
          <select
            name="productInterest"
            required
            value={formData.productInterest}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">{t("inquiry.select_product")}</option>
            <option value="cockroach-spray">{t("inquiry.prod_cockroach")}</option>
            <option value="mosquito-spray">{t("inquiry.prod_mosquito_spray")}</option>
            <option value="mosquito-liquid">{t("inquiry.prod_liquid")}</option>
            <option value="large-heater">{t("inquiry.prod_heater")}</option>
            <option value="spherical-heater">{t("inquiry.prod_spherical")}</option>
            <option value="multiple">{t("inquiry.prod_multiple")}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("inquiry.moq")}</label>
          <input
            type="text"
            name="moq"
            value={formData.moq}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            placeholder={isAr ? "مثال: 1000 قطعة" : "e.g. 1000 pcs"}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("inquiry.email")} *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("inquiry.whatsapp")}</label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            placeholder="+20 100 000 0000"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("inquiry.message")}</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
          placeholder={isAr ? "أخبرنا عن متطلباتك..." : "Tell us about your requirements..."}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
      >
        {t("inquiry.submit")}
      </button>
    </form>
  );
}
