export const sendContactForm = async (data: any) => fetch('/api/contact', {
    method: 'POST',
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
}).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
})