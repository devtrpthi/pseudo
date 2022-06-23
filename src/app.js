import React from "react";

function Profile() {
    return(
        <img
             src="https://i.imgur.com/MK3eW3As.jpg"
        />
    );
}

function Gallery() {
    return(
        <div>
            <h2>Amazing Scientists</h2>
            <Profile/>
            <Profile/>
            <Profile/>
        </div>
    );
}

export default Gallery;