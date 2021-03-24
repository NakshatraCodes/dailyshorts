const publicVapidKey =
  "BBjyFE2x3Y2Qykw5nY0YWaRKMzMZsWDmaGWHkQwkt2byvOOYMnsl2dmzitqJzWPhCu1irowuPeqM2XRhAjnXaqk";

//   Check for service worker
if ("serviceWorker" in navigator) {
  send().catch((err) => console.error(err));
}
