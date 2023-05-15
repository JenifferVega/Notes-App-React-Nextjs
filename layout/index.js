import Link from "next/link"

export const Layout = (props)=>{
    <div>
        <Link href={"/Home"}></Link>
        <Link href={"/Register"}></Link>
        <Link href={"/Login"}></Link>
    </div>
}