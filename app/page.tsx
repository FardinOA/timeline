import Feeds from "@/components/feeds";

export default function Home() {
    return (
        <main className=" container grid grid-cols-1 lg:grid-cols-12 gap-6 ">
            <section className="lg:col-span-3 hidden lg:block "></section>
            <section className="lg:col-span-6    ">
                {/* feeds */}
                <Feeds />
            </section>
            <section className="lg:col-span-3 hidden lg:block "> </section>
        </main>
    );
}
