export const loadScript = async (
  scriptUrl: string,
  scriptId: string,
  attributes: { [key: string]: string } = {},
  callback?: () => void
) => {
  const existingScript = document.getElementById(scriptId);

  if (!existingScript) {
    const script = document.createElement('script');
    script.async = false;
    script.src = scriptUrl;
    for (const [key, value] of Object.entries(attributes)) {
      script.setAttribute(key, value);
    }
    document.body.appendChild(script);

    script.onload = () => {
      if (callback) {
        callback();
      }
    };
  }

  if (existingScript && callback) {
    callback();
  }
};

export const removeElementsByIdPrefix = (prefix: string) => {
  const elements = document.querySelectorAll(`[id^="${prefix}"]`);
  elements.forEach((element) => {
    element.remove();
  });
};
