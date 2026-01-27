async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    const chatBox = document.getElementById("chat-box");


    // 1️⃣ Show user message

    chatBox.innerHTML += `<div class="user"><b>You:</b> ${message}</div>`;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // 2️⃣ Loading message

    const loadingDiv = document.createElement("div");
    loadingDiv.classList.add("bot", "loading");
    loadingDiv.innerHTML = `<span class="spinner">⚽</span> Loading...`;
    chatBox.appendChild(loadingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        // 3️⃣ Send request

        const response = await fetch("/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: message })
        });

        const data = await response.json();

        // 4️⃣ Replace loading with answer

        loadingDiv.innerHTML = `<b>Assistant:</b> ${data.answer}`;
        loadingDiv.classList.remove("loading");
    } catch (error) {
        loadingDiv.innerHTML = `<b>Assistant:</b> Error fetching response.`;
        loadingDiv.classList.remove("loading");
        console.error(error);
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}


// ✅ ENTER KEY LISTENER (OUTSIDE the function)
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("user-input");

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });
});