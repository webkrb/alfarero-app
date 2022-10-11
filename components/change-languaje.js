import React from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from 'next/image'
import flag_eng from "@/images/flag_eng.png";
import flag_esp from "@/images/flag_esp.png";
import flag_ru from "@/images/flag_ru.png";


const ChangeLanguaje = () => {
    const {  route } = useRouter()
    return (
        <>


            <Link href={route} locale={'es'} passHref>
                <button className="button_for_change_languaje">


                    <Image
                        src={flag_esp} alt="Spain flag" layout="fixed" width="25px" height="15px"
                    />
                </button>
            </Link>
            <Link href={route} locale={'en'}>
                <button className="button_for_change_languaje">


                    <Image
                        src={flag_eng} alt="Spain flag" layout="fixed" width="25px" height="15px"
                    />
                </button>
            </Link>
            <Link href={route} locale={'ru'}>
                <button className="button_for_change_languaje">


                    <Image
                        src={flag_ru} alt="Spain flag" layout="fixed" width="25px" height="15px"
                    />
                </button>
            </Link>
        </>
    );
};

export default ChangeLanguaje;
