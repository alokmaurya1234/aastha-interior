const projectImages = import.meta.glob(
  "../assets/projects/**/*.{jpeg,jpg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export function getProjectImages(projectId) {
  return Object.entries(projectImages)
    .filter(([path]) =>
      path.includes(`/projects/${projectId}/`)
    )
    .map(([, image]) => image);
}