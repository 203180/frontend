import React, {useState} from 'react';
import Header from "../components/header/Header";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";
import './home.css'

function Home() {
    return <div id={'home-page'}>
        <Header selectedPage={'Home'}/>
        <Container className={'text-container'}>
        <p>Welcome to Cinematic Perspectives, your go-to destination for all things film! At Cinematic Perspectives, we believe that movies are more than just entertainment—they're windows into different worlds, thought-provoking experiences, and catalysts for conversations. Our platform is dedicated to celebrating the magic of cinema by offering insightful reviews, engaging discussions, and a community of passionate movie lovers like yourself.

            <br/><br/>As you navigate through our site, you'll find a treasure trove of reviews covering a wide range of genres, from timeless classics to the latest blockbusters. Whether you're a cinephile searching for hidden gems or a casual viewer looking for your next movie night pick, we've got you covered. Our team of dedicated critics brings a diverse range of perspectives and expertise to their reviews, ensuring that you'll always find something new and exciting to explore.

            <br/><br/>But Cinematic Perspectives is more than just a review site—it's a hub for film enthusiasts to come together and share their love for the silver screen. Join our vibrant community forums to discuss your favorite films, debate hot topics in the industry, and connect with fellow movie buffs from around the globe. Whether you're debating the merits of practical effects versus CGI or dissecting the latest plot twists, you'll find a welcoming and engaging community eager to dive deep into all things film.
        </p>
        </Container>
        </div>
}

export default Home;