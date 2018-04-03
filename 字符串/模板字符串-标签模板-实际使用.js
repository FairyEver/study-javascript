let sender = '<script>alert("abc")</script>'; // 恶意代码

let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

console.log(message)
// <p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>

function SaferHTML(templateData) {
  let s = templateData[0];
  for (let i = 1; i < arguments.length; i++) {
    let arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}