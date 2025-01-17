import React from "react";
import { enUS } from "date-fns/locale";
import { Color } from "../../../lib/inputTypes";
export type Locale = typeof enUS;
export interface DatePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "value" | "defaultValue"> {
    value?: Date;
    defaultValue?: Date;
    onValueChange?: (value: Date | undefined) => void;
    minDate?: Date;
    maxDate?: Date;
    placeholder?: string;
    disabled?: boolean;
    color?: Color;
    locale?: Locale;
    enableClear?: boolean;
    enableYearNavigation?: boolean;
    children?: React.ReactElement[] | React.ReactElement;
}
declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLDivElement>>;
export default DatePicker;
