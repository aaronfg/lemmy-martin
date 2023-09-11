/** Class with helper methods related to api usage */
export class APIUtils {
  static getQueryParamsFromObj = (obj: object) => {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(obj)) {
      if (value !== undefined) {
        params.append(key, value.toString());
      }
    }
    return params.toString();
  };
}
