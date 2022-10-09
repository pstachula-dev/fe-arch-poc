export const parseUrl = (url: string, args: string[]): string => {
  let parsedUrl = url;
  url.match(/{\w+}/g)?.forEach((param, index) => {
    parsedUrl = parsedUrl.replace(param, args[index]);
  });
  return parsedUrl;
};
