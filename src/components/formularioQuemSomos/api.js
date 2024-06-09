export const sendContactForm = async (data) =>
  fetch("/api/contactMembers", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "aplication/json",
      Accept: "aplication/json",
    }
  });