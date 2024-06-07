import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
function App() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>

            <div id="contact">
                <Footer/>
            </div>

        </div>
    )

}

export default App