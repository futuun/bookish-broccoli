export async function getCV() {
  const cv = await fetch("https://api.github.com/repos/futuun/cv/contents/cv.yaml", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_CV_TOKEN}`,
      Accept: "application/vnd.github.raw+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  }).then((response) => response.text());

  return cv;
}
