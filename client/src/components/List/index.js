import React from "react";
import "./styles.css";

function List(props) {
    let newArray = props.results.slice(0, props.count);
    return (
        <div>
            <ol>
                {newArray.map(result => (
                    <li key={result.id}>
                        <h4 className="text-center">{result.Name} {(result.Gender === "M") ? "- male" : "- female"}</h4>
                    </li>
                ))}
            </ol>
            {((props.results.length > 0) && (props.results.length > props.count)) ?
                (<div className="text-center white-text">
                    <button className="link-button" onClick={props.increaseCount}>+ More Results</button>
                </div>) : 
                (<div> </div>)
            }
            {((props.results.length > 0) && (props.results.length === props.count)) ?
                (<div className="text-center white-text">
                    <button className="link-button" onClick={props.increaseResults}>+ More Results</button>
                </div>) : 
                (<div> </div>)
            }
        </div>
    );
}

export default List;