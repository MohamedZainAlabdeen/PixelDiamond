import { useMetaTitle } from "../hooks";
import { Banner, PageNavigation, PhotoList, PostPreviewShowcase, Posts, PostVideo, Socials, TagsList, Title } from "../components"
import { latestReviews, popularPosts, postPreview_lg } from "../constants"
import { banner_03, cover_03 } from "../assets"

const News = () => {
    useMetaTitle("Pixel Diamond - News");
    return (
        <>
            <Banner
                img={banner_03}
                title="Gaming News"
                path={{ to: "Gaming News" }}
            />
            <main className="mainContainer grid grid-cols-4 gap-8 my-20">
                {/* layout-body */}
                <section className="md:col-span-3 col-span-4">
                    <div className="sm:col-span-2 col-span-3 space-y-8">
                        <Posts setHeight="h-[450px]" posts={postPreview_lg} />
                    </div>
                    {/* PAGE NAVIGATION */}
                    <PageNavigation />
                </section>
                {/* layout-sidebar */}
                <aside className="md:block hidden">
                    {/* List Social */}
                    <Title marginBottom lineColor="blue">Social Pixel</Title>
                    <Socials size="lg" />
                    {/* POPULAR Posts */}
                    <Title margin lineColor="blue">POPULAR POSTS</Title>
                    <PostPreviewShowcase posts={popularPosts} color="blue" />
                    {/* Posts */}
                    <Title margin lineColor="red">LATEST REVIEWS</Title>
                    <PostPreviewShowcase
                        posts={latestReviews}
                        color="red"
                    />
                    {/* Video */}
                    <Title margin lineColor="blueGreen">FEATURED VIDEO</Title>
                    <PostVideo
                        banner={cover_03}
                        title="'THE SANDBENDERS II' BREAK THE BAD SEQUEL SPELL WITH A..."
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
                    />
                    {/* Tags List */}
                    <Title margin lineColor="blueGreen">PIXEL TAGS</Title>
                    <TagsList />
                    {/* Instagram */}
                    <Title margin lineColor="red">INSTAGRAM WIDGET</Title>
                    <div className="photo-list grid grid-cols-3 gap-1">
                        <PhotoList />
                    </div>
                </aside>
            </main>
        </>
    )
}

export default News
