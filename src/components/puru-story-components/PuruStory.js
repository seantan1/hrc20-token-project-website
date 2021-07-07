import './css/PuruStory.css';

// images
import PuruImage1 from '../../assets/black/1.png';
import PuruImage2 from '../../assets/black/2.png';
import PuruImage3 from '../../assets/black/3.png';
import PuruImage4 from '../../assets/black/4.png';
import PuruImage5 from '../../assets/black/5.png';

const totalStories = 5;
const totalImages = 5;

const PuruStory = () => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    var storyNumber = getRandomInt(totalStories);
    var imageNumber = getRandomInt(totalImages);


    return (
        <div className="purustory">
            <div className="purustory-paragraph-container">
                {imageNumber === 1 && <img className="purustory-paragraph-container-image" alt="puru" src={PuruImage1}></img>}
                {imageNumber === 2 && <img className="purustory-paragraph-container-image" alt="puru" src={PuruImage2}></img>}
                {imageNumber === 3 && <img className="purustory-paragraph-container-image" alt="puru" src={PuruImage3}></img>}
                {imageNumber === 4 && <img className="purustory-paragraph-container-image" alt="puru" src={PuruImage4}></img>}
                {imageNumber === 5 && <img className="purustory-paragraph-container-image" alt="puru" src={PuruImage5}></img>}

                {storyNumber === 1 &&
                    <p>Nobody seems to know why the purus does this annual pilgrimage to search for the most valuable gift. However, this act has benefited the puru kingdom by boosting its GDP(Gross Domestic Puruduct) year after year as the other gifts that didn’t make the cut get sold to nearby lands. </p>
                }
                {storyNumber === 2 &&
                    <p>According to the Puru Hall of Fame, puru king #01010000 01110101 01110010 01110101 01101100 01100001 01101110 01100100 once brought back a gift that was unlike any other. His Majesty once haul back the entire Lost city of Atlantis as a gift. His only accomplishment is now written in the history books for future purus to study. </p>
                }
                {storyNumber === 3 &&
                    <p>The current puru king got his title by presenting a single Beetcoin. It seems that by the time he completed his journey back to Puruland, the value of his Beetcoin has risen over the roof. Needless to say, he too was over the roof when he was proclaimed king. </p>
                }
                {storyNumber === 4 &&
                    <p>Every year, a few purus get injured during their year-long journey. The Puruland government has thus put up a notice to remind fellow purus to not be over zealous and adhere to the OSHA guidelines. </p>
                }
                {storyNumber === 5 &&
                    <p>Despite being not the best at evaluating objects, purus still do their best to find something that they believe is valuable. “If it’s shiny, it’s usually something worth bringing back.” - a wise puru once said.</p>
                }
            </div>
        </div>

    );
}

export default PuruStory;
