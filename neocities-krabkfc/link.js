document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container_v_pink_background');

    if (container) {
      container.innerHTML = `
        <div class="container_v_pink_background"</div>
          <a href="index.html">Back to home page</a>
          <a href="blog.html">*Date* &middot Welcome</a>
        `;
    }
});
