export const sendContactForm = async (data, contact) =>
  fetch(`/api/${contact}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "aplication/json",
      Accept: "aplication/json",
    }
  });