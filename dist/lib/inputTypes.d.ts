export type ValueFormatter = {
    (value: number): string;
};
export type CurveType = "linear" | "natural" | "monotone" | "step";
declare const iconVariantValues: readonly ["simple", "light", "shadow", "solid", "outlined"];
export type IconVariant = (typeof iconVariantValues)[number];
export type HorizontalPosition = "left" | "right";
export type VerticalPosition = "top" | "bottom";
export type ButtonVariant = "primary" | "secondary" | "light";
declare const deltaTypeValues: readonly ["increase", "moderateIncrease", "decrease", "moderateDecrease", "unchanged"];
export type DeltaType = (typeof deltaTypeValues)[number];
declare const sizeValues: readonly ["xs", "sm", "md", "lg", "xl"];
export type Size = (typeof sizeValues)[number];
declare const colorValues: readonly ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"];
export type Color = (typeof colorValues)[number];
declare const justifyContentValues: readonly ["start", "end", "center", "between", "around", "evenly"];
export type JustifyContent = (typeof justifyContentValues)[number];
declare const alignItemsValues: readonly ["start", "end", "center", "baseline", "stretch"];
export type AlignItems = (typeof alignItemsValues)[number];
export type FlexDirection = "row" | "col" | "row-reverse" | "col-reverse";
export {};