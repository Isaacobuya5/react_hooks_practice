import React, { useContext} from "react";
import Header from "./Header";
import ChangeTheme from "./posts/ChangeTheme";
import UserBar from "./user/UserBar";
import CreatePost from "./posts/CreatePost";

import { ThemeContext, StateContext } from "./contexts";

export default function HeaderBar({ setTheme }) {
    const theme = useContext(ThemeContext);
    const { state } = useContext(StateContext)

    const { user } = state;

    return (
        <div>
            <header>
        <Header text="React Hooks Blog" />
        <ChangeTheme theme={theme} setTheme={setTheme} />
        {/* <UserBar user={user} dispatch={dispatch}/> */}
        <React.Suspense fallback={"Loading..."}>
        <UserBar />
        </React.Suspense>
        <section id="rest">
    {/* {user &&  <CreatePost user={user} posts={posts} dispatch={dispatch}/>} */}
    {user &&  <CreatePost />}
    {/* <PostList posts={posts} /> */}
{/* {error && <b>{error}</b> }<PostList /> */}
    </section>
    </header>
        </div>
    )
}