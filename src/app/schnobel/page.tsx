
import {
    PageHeader,
    /*PageHeaderDescription,
    PageHeaderHeading,*/
} from "../components/page-header";

const Headline = () => (
    <PageHeader className="page-header pb-12 pt-4">
        <div className="pt-4 font-sans">
            <p className="pb-4">
                Here we just want to have some fun. These papers we find thought provoking, but funny.
            </p>
            <p className="pb-4">
                If you have come across any papers that you think are worth sharing, please let us know.
            </p>

        </div>
    </PageHeader>
);

export default function Home() {
    return (
        <div className="container min-h-screen relative px-16 pt-8 pb-16">
            <Headline />
            {/* Remove this if you don't want the TaskPage */}
            {/* <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow" id="annotated-papers">
        <TaskPage />
      </div> */}

            {/* Remove the entire Authors + Designer info */}
            {/* <div className="pt-16"> ... </div> */}
        </div>
    );
}
