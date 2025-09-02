// Ensure #top anchor exists for "Back to top"
(() => {
  const htmlEl = document.documentElement;
  if (!htmlEl.id) htmlEl.id = 'top';
})();
