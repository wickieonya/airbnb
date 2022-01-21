import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({exploreData, cardsData}) {
    return (
        <div className="">
            <Head>
                <title>iiaCinch AirBnB</title>
            </Head>

            <Header/>
            <Banner/>
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
                    {/*    pull some data from server*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {exploreData?.map(({img, distance, location}) => (
                            <SmallCard
                                key={img}
                                img={img}
                                distance={distance}
                                location={location}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
                    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-4">
                        {cardsData?.map(({img, title}) => (
                            <MediumCard
                                key={img}
                                img={img}
                                title={title}
                            />
                        ))}
                    </div>
                </section>

                <LargeCard
                    img="https://links.papareact.com/4cj"
                    title="The greatest outdoors"
                    description="Wishlists curated by Airbnb"
                    buttonText="Get Inspired"
                />

            </main>

            <Footer/>

        </div>
    );
}

export async function getStaticProps() {
    const exploreData = await fetch('https://links.papareact.com/pyp')
        .then(response => response.json());

    const cardsData = await fetch('https://links.papareact.com/zp1')
        .then(response => response.json());

    return {
        props: {
            exploreData,
            cardsData,
        }
    }
}
