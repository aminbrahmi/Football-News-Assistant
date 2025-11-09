async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    const chatBox = document.getElementById("chat-box");

    // 1️⃣ Afficher le message de l'utilisateur
    chatBox.innerHTML += `<div class="user"><b>You:</b> ${message}</div>`;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // 2️⃣ Ajouter le message de chargement avec le football qui tourne
    const loadingDiv = document.createElement("div");
    loadingDiv.classList.add("bot", "loading");
    loadingDiv.innerHTML = `<span class="spinner">⚽</span> Loading...`;
    chatBox.appendChild(loadingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        // 3️⃣ Envoyer la requête au backend
        const response = await fetch("/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: message })
        });

        const data = await response.json();

        // 4️⃣ Remplacer le message de chargement par la réponse réelle
        loadingDiv.innerHTML = `<b>Assistant:</b> ${data.answer}`;
        loadingDiv.classList.remove("loading");
    } catch (error) {
        loadingDiv.innerHTML = `<b>Assistant:</b> Error fetching response.`;
        loadingDiv.classList.remove("loading");
        console.error(error);
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}
