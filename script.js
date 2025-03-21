<html>
  <body>
    <input id="input" type="text">
    <button onclick="getNews()">Generate news</button>
    <div id="result">

    </div>
    <script>
        const input = document.getElementById("input");
      async function getNews() {
        const API_KEY =
          "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";
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "user",
                content: "Generate news on topic"+ input.value +" in div tag with css no html and body tag",
              },
            ],
          }),
        });
        const body = await response.json();
        console.log(body);
        const newDiv = document.createElement('div');
        newDiv.innerHTML = body.choices[0].message.content;
        document.getElementById('result').appendChild(newDiv)
        
      }
    </script>
  </body>
</html>
