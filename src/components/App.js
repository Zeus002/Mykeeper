import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function myKeeper(item) {
    return (
        <div>
            <Note 
                key = {item.id}
                title = {item.title}
                content = {item.content}

            />
        </div>
    )
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(myKeeper)}
      <Footer />
    </div>
  );
}


export default App;