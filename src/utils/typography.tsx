import { ReactNode } from "react";


interface LinkTextProps {
    children: ReactNode;
    className?: string;
}


export function H1({ className = '', children }: any) {
    const defaultClasses = `fclassName="text-primary-black font-Lexend font-bold text-2xl lg:text-4xl xl:text-5xl  sm:leading-[1.7] md:leading-[1.5] lg:leading-[1.5] 2xl:leading-[1.2] text-center  sm:text-left  " `;

    return <h1 className={`${defaultClasses} ${className}`}>{children}</h1>;
}

export function H2({ className = '', children }: any) {
    const defaultClasses =
        'font-poppins scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl';

    return <h2 className={`${defaultClasses} ${className}`}>{children}</h2>;
}

export function H3({ className = '', children }: any) {
    const defaultClasses =
        'font-poppins scroll-m-20 text-[30px] font-semibold tracking-tight lg:text-[35px]';

    return <h3 className={`${defaultClasses} ${className}`}>{children}</h3>;
}

export function H4({ className = '', children }: any) {
    const defaultClasses =
        'font-nohemi scroll-m-20 text-xl font-[400] tracking-wide lg:text-[33px]';

    return <h4 className={`${defaultClasses} ${className}`}>{children}</h4>;
}

export function H5({ className = '', children }: any) {
    const defaultClasses =
        'font-poppins scroll-m-20 text-lg font-semibold tracking-tight lg:text-xl';

    return <h5 className={`${defaultClasses} ${className}`}>{children}</h5>;
}

export function H6({ className = '', children }: any) {
    const defaultClasses = 'font-inter scroll-m-20 text-[22px] font-semibold leading-2 tracking-tight lg:text-[16px] xl:text-[18px] 2xl:text-[18px]';

    return <h6 className={`${defaultClasses} ${className}`}>{children}</h6>;
}

export function P({ className = '', children }: any) {
    const defaultClasses = 'font-inter leading-7 [&:not(:first-child)]:mt-6 ';

    return <p className={`${defaultClasses} ${className}`}>{children}</p>;
}

export function Lead({ className = '', children }: any) {
    const defaultClasses = 'font-poppins text-xl';

    return <p className={`${defaultClasses} ${className}`}>{children}</p>;
}

export function Large({ className = '', children }: any) {
    const defaultClasses = 'font-poppins text-lg font-semibold';

    return <p className={`${defaultClasses} ${className}`}>{children}</p>;
}

export function Small({ className = '', children }: any) {
    const defaultClasses = 'font-inter text-sm font-medium leading-none';

    return <p className={`${defaultClasses} ${className}`}>{children}</p>;
}

export function Muted({ className = '', children }: any) {
    const defaultClasses = 'font-inter text-muted-foreground text-sm';

    return <span className={`${defaultClasses} ${className}`}>{children}</span>;
}

export function LinkText({ children, className }: LinkTextProps) {
    return <span className={className ? className : "text-[100px]"}>{children}</span>;
}