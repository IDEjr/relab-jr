export const sendContactForm = async (data) =>
  fetch("/api/contactClients", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "aplication/json",
      Accept: "aplication/json",
    }
  });