import React from 'react'
import "./home.css"


function Home() {
    return (
        <div className="row my_mt">
            <div className="col-12 col-md-6">
                <h4 className="welcome text-capitalize">welcome to our site</h4>
                <h3 className="tree text-capitalize">tree</h3>
                <p className="game text-capitalize">Our favorite game</p>
                <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                utilisée à titre provisoire pour calibrer une mise en page, le texte définitif
                venant remplacer le faux-texte dès qu'il est prêt ou que la
                mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem
                ipsum ou Lipsum</p>
                <button type="button" className="btn_home">learn more</button>
            </div>
            <div className="col-12 col-md-6 text-center">
                <img src="images/land.png" className="img-fluid" />
            </div>
        </div>
    )
}

export default Home