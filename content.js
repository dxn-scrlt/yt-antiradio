const [base, query] = window.location.href.split("?");
const params = query.split("&");
const videoParam = params[0];

const url = `${base}?${videoParam}`;

window.history.replaceState({}, "", url);