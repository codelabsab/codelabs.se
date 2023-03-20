import Link from "next/link";
import Image from "next/image";
import {PostMetadata} from "@/app/components/Blogg/PostMetadata";


const PostPreview = (props: PostMetadata) => {
    return (
        <Link href={`/blogg/${props.slug}`}>
                    <Image
                        src={props.og_image} alt={props.slug}
                        width={320}
                        height={320}
                        className={"rounded-t-lg w-72 object-cover h-72"}
                    />
                <h2 className="text-2xl">{props.title}</h2>
                <p className="font-poppins">{props.description}</p>
                <p className="font-poppins text-codelabs-primary1">{props.date}</p>
        </Link>
    )
}

export default PostPreview;