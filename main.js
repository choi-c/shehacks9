// Testing function
/*
function myFunction(){
    document.getElementById("p").innerHTML = "hihihihihi";
}
let x = document.createElement("text");
x.setAttribute("type","text");
*/
document.getElementById('codeForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const prompt = document.getElementById('prompt').value;
    const code = document.getElementById('code').value;

    try {
        const response = await fetch('/api/codehere', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt, code })
        });

        const data = await response.json();
        document.getElementById('response').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('response').innerText = 'Error: ' + error.message;
    }
});

console.log("hello world");