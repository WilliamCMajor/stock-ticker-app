import ejs from "ejs";

const resultView = `
<section>
    <h2>Symbol: <%= Symbol %></h2>
    <h3><%= price %>USD</h3>
    <ul>
        <li>open</li>
        <li>high</li>
        <li>low</li>
        <li>close</li>
        <li>volume</li>
    </ul>
</section>
`;

function ResultView (viewId){
    this.view = document.querySelector(viewId)

    this.configUI = function(data){
        console.log(data);;
        
    }

    return this
}

export default ResultView