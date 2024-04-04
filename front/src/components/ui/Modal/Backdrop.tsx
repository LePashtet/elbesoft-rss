import {FC,forwardRef,RefObject } from "react";
import clsx from "clsx";

import "./backdrop.scss"

export const Backdrop: FC<{
    className: string,
    open?: boolean
}> = forwardRef((props, ref) => {
    const {open = false, className, ...other} = props;
    return (
        <div
            className={clsx({'base-Backdrop-open': open}, className, "backdrop")}
            ref={ref as RefObject<HTMLDivElement>}
            {...other}
        />
    );
});
