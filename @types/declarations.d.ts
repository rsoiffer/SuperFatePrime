declare module "*.scss" {
  const classes: { [className: string]: string };
  export = classes;
}
declare module "*.yaml" {
  const classes: { [className: string]: any };
  export = classes;
}
