import ViewBanner from "../Banner/ViewBanner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Author from "./Autor";
import Content from "./Content";
import PostButton from "./PostButton";
import PostCategory from "./PostCategory";
import "./postview.css";
import Title from "./TItle";
export default function PostView(posts) {
    console.log(posts);
    console.log(posts.posts[0].id);
    return (
        <>
            <Header />
            <ViewBanner />
            <div className="view">
                <div className="max-width">
                    <section className="wrap-box">
                        <div className="inner">
                            <Author />
                            <PostCategory />
                            <Title />
                            <hr />
                            <Content />
                            <PostButton />
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
