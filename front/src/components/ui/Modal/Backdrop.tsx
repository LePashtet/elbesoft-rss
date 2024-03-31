import * as React from "react";
import clsx from "clsx";
import {FC} from "react";

import "./backdrop.scss"

export const Backdrop: FC<{
    className: string,
    open?: boolean
}> = React.forwardRef((props, ref) => {
    const {open = false, className, ...other} = props;
    return (
        <div
            className={clsx({'base-Backdrop-open': open}, className, "backdrop")}
            // @ts-ignore
            ref={ref}
            {...other}
        />
    );
});
