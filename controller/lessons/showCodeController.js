const showCode = (btn) => {
    const idPreTags = btn.getAttribute('data-target');
    const preTags = document.getElementById(idPreTags);

    if (preTags.style.display === 'block') {
        preTags.style.display = 'none';
        btn.textContent = 'Show Code';
    } else {
        preTags.style.display = 'block';
        btn.textContent = 'Hide Code';
    }
}
