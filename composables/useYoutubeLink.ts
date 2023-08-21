// Credit: https://github.com/hlassiege/eventuallycoding
// make this as remark plugin to avoid FOUC?

export const useYoutubeLink = (containerId: string) => {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.querySelectorAll("p").forEach((element) => {
    const isYoutubeVideo = element.textContent?.match(
      /^https:\/\/www\.youtube\.com\/watch\?(v=[0-9a-zA-Z_]*)\&?/
    );

    if (isYoutubeVideo) {
      isYoutubeVideo.forEach((match) => {
        const regExpMatchArray = match.match(/v=(.*)$/);
        if (regExpMatchArray) {
          const videoId = regExpMatchArray[1];
          const container = document.createElement("div");
          container.setAttribute("class", "w-1/2 ml-auto mr-auto");
          const iframe = document.createElement("iframe");
          iframe.setAttribute("src", `https://www.youtube-nocookie.com/embed/${videoId}`);
          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute("allowfullscreen", "allowfullscreen");
          element.innerHTML = "";
          container.appendChild(iframe);
          element.appendChild(container);
        }
      });
    }
  });
};
