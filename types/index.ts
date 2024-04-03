export type INavLinks = {
  id: string;
  title: string;
};

export type IFeatures = INavLinks & {
  icon: string;
  content: string;
};

export type IFeedback = INavLinks & {
  img: { src: string };
  name: string;
  content: string;
};
