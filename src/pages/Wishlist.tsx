import { useMetaTitle } from "../hooks";
import { Banner, Button, Product, Title, WishlistItem } from "../components"
import { featuredProducts, wishList } from "../constants";
import { banner_02 } from "../assets"
import { CiHeart } from "react-icons/ci"

const Wishlist = () => {
    useMetaTitle("Pixel Diamond - Wishlist");
    const renderWishList = (
        <>
            {wishList.map((product) => (
                <WishlistItem key={product.id} elements={product} />
            ))}
        </>
    );

    const renderProducts = (
        <>
            {featuredProducts.map((item) => (
                <Product
                    key={item.id}
                    image={item.img}
                    title={item.title}
                    category={item.category}
                    rating={item.rating}
                    price={item.price}
                />
            ))}
        </>
    );
    return (
        <>
            <Banner
                img={banner_02}
                title="Wishlist"
                path={{ from: "Shop", to: "Wishlist" }}
            />
            {/* Inventory */}
            <div className="mainContainer py-20">
                <p className="text-grayColor py-4 border-t border-b border-borderColor">
                    5 items in wishlist
                </p>
                <div className="grid gridCols_6 gap-4 mt-5">
                    {renderWishList}
                    {Array(7)
                        .fill(1)
                        .map((_, index) => (
                            <div key={index} className="flexCenter w-full h-[200px] border border-borderColor rounded">
                                <CiHeart
                                    style={{
                                        fontSize: "50px",
                                        strokeWidth: "0.5",
                                        color: "#e4e4e4",
                                    }}
                                />
                            </div>
                        ))}
                </div>
                <Button div className="mx-auto mt-10 uppercase" variant="red">Clear all wishlist items</Button>
                {/* Featured Products */}
                <Title margin lineColor="red">Featured Products</Title>
                <div className="grid gridCols_4 justify-items-center gap-4">
                    {renderProducts}
                </div>
            </div>
        </>
    )
}

export default Wishlist
