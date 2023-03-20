import Link from "next/link";
import Image from "next/image";
import {PostMetadata} from "@/app/components/Blogg/PostMetadata";


const PostPreview = (props: PostMetadata) => {
    return (
        <div className={"px-6 md:px-3 mb-44 z-10 h-96 md:h-702 transform transition-all hover:scale-105 relative"}>
            <Link href={`/blogg/${props.slug}`}>
                <div className="md:max-w-392 bg-white  shadow-lg rounded-lg min-h-500">
                    <Image
                        src={props.og_image} alt={props.slug}
                        width={400}
                        height={320}
                        className={"rounded-t-lg w-full object-cover h-72"}
                    />
                    <div className={"px-6 flex flex-col"}>
                        <p className={"font-poppins text-xs font-light pt-4 pb-3 text-codelabs-primary1"}>{props.date}</p>
                        <h4 className={"font-title pb-2 font-semibold text-2xl truncate text-grey-normal "}>{props.title}</h4>
                        <p className={"font-title font-normal text-base pb-24 textTruncate"}>{props.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PostPreview;