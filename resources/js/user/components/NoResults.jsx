import React from "react"
import NoResultsImg from '../Assets/Images/no_result_img.png';

function NoResults(){
    return (
        <div class="flex h-screen">
            <div class="m-auto">
                <img className="md:h-96 rounded-lg" src={NoResultsImg} alt="no-results-img" />
            </div>
        </div>
    );
}

export default NoResults;