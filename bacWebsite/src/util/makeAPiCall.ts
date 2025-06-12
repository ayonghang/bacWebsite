import to from "await-to-js";
import { capitalize } from "lodash";

/**
 * Wrapper function for making api calls.
 * @param {Promise} apiFunctionPromise
 * @param {string} dataKeyName - The name of the field (e.g. 'data') in the response whose value gets resolved by the promise.
 * @returns {Promise<unknown>}
 */
export const makeAPICall = async (apiFunctionPromise, dataKeyName = "data") => {
  const [err, res] = await to(apiFunctionPromise);
  if (res) {
    if (res?.data?.status === "success") {
      let data = res?.data?.[dataKeyName];
      return Promise.resolve(data);
    } else {
      const errorObjToReturn = {
        title: res?.data?.status ? capitalize(res.data.status) : "Error",
        content: [res.data.message], // This will be an array of strings. Determined differently depending on the type of error.
        correlationID: false,
      };

      return Promise.reject(errorObjToReturn);
    }
  }
  if (err || !res) {
    // console.log("makeAPICall ERROR",err)
    // console.table(   [["err?.response?.data?.message",err?.response?.data?.message], ["err.message",err.message],["err.response.status",err.response.status],["err.response.statusText",err.response.statusText]])
    const errorObjToReturn = {
      title: err?.response?.status ? `${err.response.status} Error` : "Error",
      content: [
        err?.response?.data?.message ?? err?.response?.statusText ?? "",
      ], // This will be an array of strings. Determined differently depending on the type of error.
      correlationID: false,
      originalError: err,
    };

    return Promise.reject(errorObjToReturn);
  }
};
