import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  console.log(currency, typeof currency);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res[currency]);
      })
      .catch((res) => {
        console.log("Resd", res);
      });
  }, [currency]);

  console.log("asdf", data);
  return data;
}
export default useCurrencyInfo;
