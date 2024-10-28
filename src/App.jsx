import{ useState } from "react";

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

export default function App() {
    const [showStory, setShowStory] = useState(false);
    const x = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const y = ["the soup kitchen", "Disneyland", "the White House"];
    const z = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
    
    const [name, setName] = useState("");
    const [xItem, setXItem] = useState(randomValueFromArray(x));
    const [yItem, setYItem] = useState(randomValueFromArray(y));
    const [zItem, setZitem] = useState(randomValueFromArray(z));

    const ukus = "us";

    function handleClickResetButton(){
      console.log("click");
      setXItem(randomValueFromArray(x));
      setYItem(randomValueFromArray(y));
      setZitem(randomValueFromArray(z));
      setShowStory(true);
      
    }
    console.log(xItem, yItem, zItem);
    return (
      <>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
          <input value={name}onChange={(event)=>{setName(event.target.value)}}type="text" placeholder="" />
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input type="radio" value="us" checked={ukus === "us"} />
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" checked={ukus === "uk"} />
        </div>
        <div>
          <button onClick={handleClickResetButton}>Generate random story</button>
        </div>
        {showStory && (
          <p>
            It was 94 fahrenheit outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}.
            {name == "" ? "Bob" : name} saw the whole thing, but was not surprised — {xItem} weighs 300
            pounds, and it was a hot day.
          </p>
        )}
      </>
    );
  }