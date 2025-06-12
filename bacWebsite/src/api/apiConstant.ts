let host = "http://localhost:5000";

if (!window.location.origin.includes("localhost")) {
  host = window.location.origin;
}

export const API_HOST = host;
