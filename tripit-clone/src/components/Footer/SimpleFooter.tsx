import React from "react";
import { links } from "../../content/SimpleFooterData";

const FooterSimple:React.FC= () => {

    return (
        <div className="w-full py-4 border-t border-gray-200 absolute bottom-0">
            <div className="flex flex-wrap md:flex-row flex-col justify-center items-center text-[11px] tracking-wide font-extralight text-[#595959] lg:gap-8 md:gap-4 gap-1">
                <p>© 2006-2024, Concur Technologies, Inc.</p>
                {links.map((link, index) => (
                    <a key={index} href={link.href}>
                        {link.text}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FooterSimple;