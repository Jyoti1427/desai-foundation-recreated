import React, { useState } from "react";

const DonationForm = () => {
  const [donationType, setDonationType] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const predefinedAmounts = [100, 250, 500, 1000];

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-white shadow-xl rounded-xl  space-y-6">
      {/* Toggle - One Time / Monthly */}
      <div className="grid grid-cols-2 gap-2">
        {["one-time", "monthly"].map((type) => (
          <button
            key={type}
            onClick={() => setDonationType(type)}
            className={`py-3 px-4 text-sm sm:text-lg font-bold rounded-xl bg-pink-100 hover:bg-gray-200 focus:bg-primary focus:text-white ${
              donationType === type ? "bg-primary " : ""
            }`}
          >
            {type === "one-time" ? "One Time" : "Monthly"}
          </button>
        ))}
      </div>

      {/* Choose text */}
      <p className="font-bold text-base sm:text-lg text-center">
        Choose an amount to donate
      </p>

      {/* 2x2 Grid of Amounts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {predefinedAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount("");
            }}
            className={`py-3 px-2 text-sm sm:text-lg font-bold rounded-xl bg-pink-100 hover:bg-gray-200 focus:bg-primary focus:text-white ${
              selectedAmount === amount ? "bg-primary text-white" : ""
            }`}
          >
            ${amount}
          </button>
        ))}
      </div>

      {/* Currency and Manual Entry */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="px-3 py-3 rounded-xl bg-pink-100 text-sm sm:text-lg font-bold text-black focus:outline-2 focus:outline-offset-2 focus:outline-black"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
          <option value="SOS">SOS</option>
          <option value="PEN">PEN</option>
          <option value="PGK">PGK</option>
          <option value="RSD">RSD</option>
          <option value="SAR">SAR</option>
          <option value="MNT">MNT</option>
          <option value="KZT">KZT</option>
          <option value="GNF">GNF</option>
          <option value="DJF">DJF</option>
          <option value="BTC">BTC</option>
        </select>

        <input
          type="number"
          placeholder="Other: Enter Amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(null);
          }}
          className="flex-1 px-2 py-3 bg-pink-100 text-sm sm:text-lg font-bold text-black rounded-xl placeholder-black focus:outline-2 focus:outline-offset-2 focus:outline-black"
        />
      </div>

      {/* Continue Button */}
      <button className="w-full py-4 sm:py-5 mt-4 font-bold rounded-xl bg-pink-900 text-white hover:bg-pink-950 transition duration-300 text-sm sm:text-lg">
        Continue
      </button>
    </div>
  );
};

export default DonationForm;
