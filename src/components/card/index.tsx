import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
    const {
        src='',
        alt=''
    } = props?.movie || {};

    return <Link href="/" className="w-40 h-60">
        <Image src={src} height={240} width={160} alt={alt} />
        <h2>Baby Reindeer</h2>
    </Link>
}

export default Card;