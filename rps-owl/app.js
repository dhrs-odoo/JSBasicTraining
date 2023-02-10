const { Component, mount, xml, onMounted, onWillRender } = owl;
let user_count=0
let com_count=0

class Scoreboard extends Component {
  static template = xml`
    <header>
    <h1>Rock Paper Scissors</h1>
    </header>
        <div class="score-board">
            <div id="user" class="badge">User</div>
            <div id="computer" class="badge">Comp</div>
            <span id="user_score">0</span> : <span id="computer_score">0</span>
        </div>
    `;
}

class Result extends Component {
  static template = xml`
    <div class="result">
        <h3 id="user_result"></h3>
        <h3 id="result"></h3>
        <h3 id="com_result"></h3>

    </div>
    `;
}

class Buttons extends Component {
  static template = xml`
   <Scoreboard/>
    <Result/>
    <div class="buttons">
    <div>
        <button class="button btn" id="rock" t-on-click="rockBtn">Rock</button>   
    </div>
    <div >
        <button  class="button btn" id="paper" t-on-click="paperBtn">Paper</button>
    </div>
    <div>
        <button   class="button btn" id="scissors" t-on-click="scissorBtn">Scissors</button>
    </div>
   
</div>

    `;
    rockBtn(){
        let Computer_choice = (Math.floor(Math.random()*3+1))
        if(Computer_choice==2){
            user_result.innerText="Rock"
            result.innerText="You Lose"
            com_result.innerText="PAPER"
            com_count++ 
            computer_score.innerText=com_count
        }
        else if(Computer_choice==3){
            user_result.innerText="Rock"
            result.innerText="You Win"
            com_result.innerText="SCISSORS"
            user_count++ 
            user_score.innerText=user_count
        }
        else{
            user_result.innerText="ROCK"
            result.innerText="It's a Tie"
            com_result.innerText="ROCK"
        }
    }
    paperBtn(){
        let Computer_choice = (Math.floor(Math.random()*3+1))
        if(Computer_choice==1){
            user_result.innerText="PAPER"
            result.innerText="You Won"
            com_result.innerText="ROCK"
            user_count++ 
            user_score.innerText=user_count
        }
        else if(Computer_choice==2){
            user_result.innerText="PAPER"
            result.innerText="It's a Tie"
            com_result.innerText="PAPER"
        }
        else if(Computer_choice==3)    {
            user_result.innerText="PAPER"
            result.innerText="You Lose"
            com_result.innerText="SCISSORS"
            user_count++ 
            user_score.innerText=user_count
        }
    }
    scissorBtn(){
        let Computer_choice = (Math.floor(Math.random()*3+1))
        if(Computer_choice==1){
            user_result.innerText="SCISSORS"
            result.innerText="You Lose"
            com_result.innerText="ROCK"
            user_count++ 
            user_score.innerText=user_count
        }
        else if(Computer_choice==2){
            user_result.innerText="SCISSORS"
            result.innerText="You Won"
            com_result.innerText="PAPER"
            user_count++ 
            user_score.innerText=user_count
        }
        else{
            user_result.innerText="SCISSORS"
            result.innerText="It's a Tie"
            com_result.innerText="SCISSORS"
        }
    }
  static components = { Result ,Scoreboard };
}

mount(Buttons, document.body);
