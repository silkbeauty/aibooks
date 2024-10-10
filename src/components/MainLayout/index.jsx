import React from "react";
import { useSelector } from "react-redux";
import NewsItem from "../NewsItem/index.jsx";
import "./MainLayout.scss";

const ANewsItem = (obj) => {
    return obj.activeNewsSource.map((newsData, index) => (
        <NewsItem key={index} newsData={newsData} />
    ));
};

const StaticNewsItem = () => {
    const staticNews = [
        {
            title: "Nobel Prize in Physics Awarded  for their contributions to machine learning  for their contributions to machine learning for their contributions to machine learning for their contributions to machine learning for their contributions to machine learning for their contributions to machine learning",
            content: "John Hopfield and Geoffrey Hinton were awarded the Nobel Prize for their contributions to machine learning. for their contributions to machine learning for their contributions to machine learning for their contributions to machine learning for their contributions to machine learning for their contributions to machine learning",
            url: "https://example.com/nobel-prize",
            urlToImage: "/image.png"

        },
        {
            title: "US Marshals Arrest Man",
            description: "The US Marshals have arrested a man who allegedly shot somebody in the head and set them on fire.",
            image: "/assets/images/arrest.jpg",
        },
    ];

    return staticNews.map((newsData, index) => (
        <NewsItem key={index} newsData={newsData} />
    ));
};


const Spinner = () => {
    return (
        <div className="spinner-layout">
            <div className="spinner-square">
                <div className="square-1 square"></div>
                <div className="square-2 square"></div>
                <div className="square-3 square"></div>
            </div>
        </div>
    );
};

function MainLayout() {
    const isLoading = false;

    return (
        <div className="main-layout-container">
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="real-container">
                    <StaticNewsItem />
                </div>
            )}
        </div>
    );
}

export default MainLayout;
