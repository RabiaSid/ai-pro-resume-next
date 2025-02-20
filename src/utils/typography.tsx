export function H1({ className = '', children }: any) {
    const defaultClasses = `font-nohemi scroll-m-20 text-4xl font-[600] tracking-wider 
      leading-[60px] sm:leading-[60px] md:leading-[80px] lg:leading-[110px] xl:leading-[120px] 
    text-[50px] md:text-[70px] lg:text-[90px] xl:text-[100px] `;

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
    const defaultClasses = `font-inter scroll-m-20 text-[22px] font-semibold leading-2 tracking-tight 
    text-[20px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px]`;

    return <h6 className={`${defaultClasses} ${className}`}>{children}</h6>;
}

export function P({ className = '', children }: any) {
    const defaultClasses = 'font-inter leading-7 [&:not(:first-child)]:mt-6';

    return <p className={`${defaultClasses} ${className}`}>{children}</p>;
}

export function Lead({ className = '', children }: any) {
    const defaultClasses = 'font-poppins text-xl';

    return <p className={`${defaultClasses} ${className}`}>{children}</p>;
}

export function Large({ className = '', children }: any) {
    const defaultClasses = 'font-poppins text-lg font-semibold';

    return <div className={`${defaultClasses} ${className}`}>{children}</div>;
}

export function Small({ className = '', children }: any) {
    const defaultClasses = 'font-inter text-sm font-medium leading-none';

    return <small className={`${defaultClasses} ${className}`}>{children}</small>;
}

export function Muted({ className = '', children }: any) {
    const defaultClasses = 'font-inter text-muted-foreground text-sm';

    return <p className={`${defaultClasses} ${className}`}>{children}</p>;
}