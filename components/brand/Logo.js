import Image from "next/image"

const Logo = () => {
    return (
        <>
            <div className="align-middle flex mt-1">
                <div>
                    <Image src="/img/supaboard.svg" alt="Supaboard" width={28} height={28} />
                </div>
                <div className="text-xl font-extrabold ml-3">
                    Supaboard
                </div>
            </div>
        </>
    )
}


export default Logo