function runOnStart() {
  const minwidth = window.matchMedia("(min-width: 0px)");
  const maxwidth = window.matchMedia("(max-width: 1279px)");
  if (!(minwidth.matches && maxwidth.matches)) {
    location.href="../DeviceNotEligible.html";
  }
}
